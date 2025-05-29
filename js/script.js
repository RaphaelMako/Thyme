// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the HTML elements
  const myButton = document.getElementById("myButton");
  const outputArea = document.getElementById("outputArea");

  // Check if the elements exist before adding event listeners
  if (myButton && outputArea) {
    // Add an event listener to the button
    myButton.addEventListener("click", function () {
      // Action to perform when the button is clicked
      const currentTime = new Date().toLocaleTimeString();
      outputArea.textContent = `Button clicked at: ${currentTime}! Hello from JavaScript!`;

      // You can also log to the console for debugging
      console.log("Button was clicked.");
    });
  } else {
    console.error("Could not find #myButton or #outputArea elements.");
  }

  // Example of another function you might define
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }

  // Call the function
  greet("Developer");

  // You can add more functions and logic here as your application grows.
  // For example, fetching data from an API, handling forms, etc.
}); // End of DOMContentLoaded
