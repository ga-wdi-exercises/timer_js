// Create Javascript selectors that target each of the timer buttons

var start = document.querySelector("#start");
var pause = document.querySelector("#pause");
var reset = document.querySelector("#reset");

var timer_is_running = false; // Keeps track of whether the timer is running.

// Create click handlers for each of the timer buttons.

start.addEventListener("click", function () {
  // start
  if ( timer_is_running ) {
    console.log("Timer already started.");
  } else {
  console.log("Timer started.");
    // Replace "Stop Watch" in the HTML with the content of the seconds variable.
    document.querySelector("#timer").innerText = "Time elapsed: " + seconds;
    // Use setInterval() to increment the timer by 1 every second
    timerId = setInterval(updateTime, 1000);
    timer_is_running = true;
  }
});

pause.addEventListener("click", function () {
  // pause
  if ( timer_is_running ) {
    console.log("Timer paused.");
    // Stop -- but do not reset! -- the timer using clearInterval().
    clearInterval(timerId);
    timer_is_running = false;
  } else {
    console.log("Timer already paused.");
  }
});

reset.addEventListener("click", function () {
  // reset
  console.log("Timer reset.");
  // Stop the timer using clearInterval().
  clearInterval(timerId);
  // Reset the timer.
  seconds = 0;
  // Replace the time in your HTML with the original "Stop Watch" text.
  document.querySelector("#timer").innerText = "Stop Watch";
  timer_is_running = false;
});

// Instantiate seconds and timerId variables for the timer.
// The latter will make more sense after reading up on setInterval().

var seconds = 0;
var timerId;
// var timerId = document.querySelector("#timer");


// Create an updateTime() function that increments the seconds counter and
// inserts that value into the <h1> element with id="timer".

function updateTime() {
  seconds += 1;
  document.querySelector("#timer").innerText = "Time elapsed: " + seconds;
}
