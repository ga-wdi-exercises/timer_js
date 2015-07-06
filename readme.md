## Stop Watch

We've been tasked with building out the behavior for a digital stopwatch, the interface for which is in `index.html`.

####Client Specs
* When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0", and the count should increment every second.
* When "Reset" is clicked, the text should return to "Stop Watch"
* When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing.

####Directions
Spend 10 minutes looking at [JavaScript Timers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Timers), then check out the specific documentation for `setInterval` and `clearInterval`.

####Take It Step By Step

This is a tough assignment, so don't stress over not meeting each of the below requirements. Just take it step by step. We've included some benchmarks for you to follow below.  

1. Create Javascript selectors that target each of the timer buttons.
2. Create click handlers (empty, for now) for each of the timer buttons.
3. Instantiate `seconds` and `timerId` variables for your timer. The latter will make more sense after reading up on `setInterval()`.
4. Create an `updateTime()` function that increments the `seconds` counter and inserts that value into the `<h1>` element with `id="timer"`.
5. Inside your click handler for the start button...
  - Replace "Stop Watch" in the HTML with the content of the `seconds` variable.
  - Use `setInterval()` to increment the timer by 1 every second.
6. Inside your click handler for the pause button...
  - Stop -- but do not reset! -- the timer using `clearInterval()`.
7. Once again, inside your click handler for the start button...
  - Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".
8. Inside your click handler for the reset button...
  - Stop the timer using `clearInterval()`.
  - Reset the timer.
  - Replace the time in your HTML with the original "Stop Watch" text.

####Bonus

Reformat your timer so that everything in your `timers.js` file -- variables and functions -- are part of a global object. It would look something like...

  ```javascript
  // Start of .js file

  var timer = {
    // All your code goes in here...
  }
  ```
