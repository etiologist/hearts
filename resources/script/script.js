const button = document.getElementById("loading-button");
const square = document.getElementById("square");
const empty =  document.getElementById("empty");

button.addEventListener("click", () => {
  // Disable the button to prevent multiple clicks
  button.disabled = true;

  // Add the loading animation CSS class
  //button.classList.add("button-loader");
  square.classList.add("box1");
  //empty.classList.add("box2");

  // Simulate an asynchronous task (replace this with your actual task)
  setTimeout(() => {
    // Re-enable the button
    button.disabled = false;

    // Remove the loading animation CSS class
    square.classList.remove("box1");
    //empty.classList.remove("box2");

  }, 2000); // Simulated 2-second task
});