/*
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
*/

let seconds = 0;

let updateTime = function(){
  const addSecond = function() {
  seconds = seconds + 1;
  $('#timer').html(seconds);
  }
  interval = setInterval(addSecond, 1000);
};

$('#start').on("click", updateTime);

let stopTime = function(){
  clearInterval(interval);
};

$('#pause').on("click", stopTime);

let resetTime = function(){
  clearInterval(interval);
  seconds = 0;
  $('#timer').html("Stop Watch");
};

$('#reset').on("click", resetTime);
