const heartsBox = document.querySelector('.hearts');
const hearts = Array.from(document.querySelectorAll('.heart'));
const button = document.querySelector('.button');
const { innerWidth, innerHeight } = window;
let currentAnimation;

gsap.set(heartsBox, { visibility: 'visible' });
gsap.set(hearts, { opacity: 0 });

const heartPop = ({ x, y }) => {
  if (currentAnimation) currentAnimation.kill();

  currentAnimation = gsap.timeline().addLabel('start');

  hearts.forEach((heart, index) => {
    const heartAnimation = gsap.
    timeline().
    set(heart, {
      opacity: 1,
      scale: 0,
      x: x,
      y: y }).

    to(
    heart,
    {
      duration: 0.5,
      ease: 'power1.out',
      rotate: 60 - Math.random() * 120,
      scale: 0.2 + Math.random() * 1,
      delay: index * 0.02,
      x: x + innerWidth / 4 - Math.random() * innerWidth / 2,
      y: y - 50 - Math.random() * (innerHeight / 4) }).


    to(heart, {
      duration: 0.5,
      opacity: 0,
      y: y + 200,
      rotate: 0,
      ease: 'power1.in' });


    currentAnimation.add(heartAnimation, 'start');
  });
};

button.addEventListener('click', event => {
  heartPop(event);
});