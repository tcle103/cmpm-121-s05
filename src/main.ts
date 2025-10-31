// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let c = 0;

// These constants are for button IDs and heading text
const a = "increment", b = "counter", h = "CMPM 121 Project";

// make counter num updates into another function
// to reduce repeated code
function counterUpdate(amt: number) {
  // Increase counter by amt
  c += amt;
  // Update the counter display
  const ctr = document.getElementById(b);
  if (ctr) {
    ctr.innerHTML = `${c}`;
  }
  // Update the document title
  document.title = "Clicked " + c;
  // Change the background color based on even/odd count
  document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
}

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${h}</h1>
    <p>Counter: <span id="${b}">0</span></p>
    <button id="${a}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Get the increment button element from the document
  const bI = document.getElementById(a);
  // Get the decrement button element from the document
  const bD = document.getElementById("dec");
  // Get the reset button element from the document
  const bR = document.getElementById("reset");
  // Get the counter span element from the document
  const ctr = document.getElementById(b);

  // Check if any element is missing, then exit the function
  if (!bI || !bD || !bR || !ctr) return;

  // Add click event to the increment button
  bI.addEventListener("click", () => {
    // Increase counter by 1 and update display
    counterUpdate(1);
  });

  // Add click event to the decrement button
  bD.addEventListener("click", () => {
    // Decrease counter by 1 and update display
    counterUpdate(-1);
  });

  // Add click event to the reset button
  bR.addEventListener("click", () => {
    // Set counter to 0 by adding negative counter value
    // and update display
    counterUpdate(-c);
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
