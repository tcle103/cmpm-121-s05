# Section 5 – Refactoring Code Smells in Practice

### Extracted function out of increment/decrement/reset button code to reduce repeated code.

Before:

```js
// Add click event to the increment button
bI.addEventListener("click", () => {
  // Increase the counter by 1
  c++;
  // Update the counter display
  ctr.innerHTML = `${c}`;
  // Update the document title
  document.title = "Clicked " + c;
  // Change the background color based on even/odd count
  document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
});
```

```js
// Add click event to the decrement button
bD.addEventListener("click", () => {
  // Decrease the counter by 1
  c--;
  // Update the counter display
  ctr.innerHTML = `${c}`;
  // Update the document title
  document.title = "Clicked " + c;
  // Change the background color based on even/odd count
  document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
});
```

```js
// Add click event to the reset button
bR.addEventListener("click", () => {
  // Reset the counter to 0
  c = 0;
  // Update the counter display
  ctr.innerHTML = `${c}`;
  // Update the document title
  document.title = "Clicked " + c;
  // Change the background color based on even/odd count
  document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
});
```

After:

```js
// make counter num updates into another function
  // to reduce repeated code
  function counterUpdate(amt: number) {
    // Increase counter by amt
    c += amt;
    // Update the counter display
    if (ctr) {
      ctr.innerHTML = `${c}`;
    }
    // Update the document title
    document.title = "Clicked " + c;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
  }
```

```js
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
```

### Changed variable name for readability

Before:

```js
// This variable keeps track of the counter
let c = 0;

// These constants are for button IDs and heading text
const a = "increment", b = "counter", h = "CMPM 121 Project";
```

After:

```js
// This variable keeps track of the counter
let counter = 0;

// These constants are for button IDs and heading text
const incrementID = "increment",
  counterID = "counter",
  headerID = "CMPM 121 Project";
```

### Added missing button labels to label constants for consistency

Before:

```js
// These constants are for button IDs and heading text
const incrementID = "increment",
  counterID = "counter",
  headerID = "CMPM 121 Project";
```

```js
// Get the increment button element from the document
const bI = document.getElementById(a);
// Get the decrement button element from the document
const bD = document.getElementById("dec");
// Get the reset button element from the document
const bR = document.getElementById("reset");
// Get the counter span element from the document
const ctr = document.getElementById(b);
```

After:

```js
// These constants are for button IDs and heading text
const incrementID = "increment",
  counterID = "counter",
  decrementID = "decrement",
  resetID = "reset",
  headerID = "CMPM 121 Project";
```

```js
// Get the increment button element from the document
const bI = document.getElementById(incrementID);
// Get the decrement button element from the document
const bD = document.getElementById(decrementID);
// Get the reset button element from the document
const bR = document.getElementById(resetID);
// Get the counter span element from the document
const ctr = document.getElementById(counterID);
```
