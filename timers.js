// Create Javascript selectors that target each of the timer buttons.
var reset = document.querySelector("button#reset");
var start = document.querySelector("button#start");
var pause = document.querySelector("button#pause");

// Create click handlers (empty, for now) for each of the timer buttons.
reset.addEventListener("click", doWhenResetIsClicked) {

}

start.addEventListener("click", doWhenStartIsClicked) {
  updateTime()
}

pause.addEventListener("click", doWhenPauseIsClicked) {

}

// Instantiate seconds and timerId variables for your timer. The latter will make more sense after reading up on setInterval().
var seconds = 0;
var timerId = 0;

// Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".
function updateTime() {
  seconds += 1;
  document.getElementById("timer").innerHTML = "Time elapsed: " +  seconds;
}

// Inside your click handler for the start button...
// Replace "Stop Watch" in the HTML with the content of the seconds variable.


// Use setInterval() to increment the timer by 1 every second.


// Inside your click handler for the pause button...


// Stop -- but do not reset! -- the timer using clearInterval().


// Once again, inside your click handler for the start button...


// Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".


// Inside your click handler for the reset button...


// Stop the timer using clearInterval().


// Reset the timer.


// Replace the time in your HTML with the original "Stop Watch" text.
