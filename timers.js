// Create Javascript selectors that target each of the timer buttons.
var resetButton = querySelector("#reset");
var startButton = querySelector("#start");
var pauseButton = querySelector("#pause");
var seconds;
var timerId;

// Create click handlers (empty, for now) for each of the timer buttons.
function resetButtonClickHandler() {
  clearInterval( timerId ) //stops the timer from running
  seconds = 0;
  document.getElementById("timer").textContent = "Stop Watch";
  startButton.addEventListener("click", startButtonClickHandler);
}

function startButtonClickHandler() {
// Replace "Stop Watch" in the HTML with the content of the seconds variable.
    document.getElementById("timer").textContent = timeElapsed();
    timerId = setInterval( updateTime, 1000);

// Use setInterval() to increment the timer by 1 every second.

// Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".
}

function pauseButtonClickHandler() {
  // Inside your click handler for the pause button...
  clearInterval(timerId);
  startButton.addEventListener("click", startButtonClickHandler);
}

// Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".
function updateTime() {
  return seconds += 1;
}

timeElapsed = function() {
  return "Time Elapsed: " + timerId;
}

startButton.addEventListener("click", startButtonClickHandler);
startButton.removeEventListener("click",startButtonClickHandler);
pauseButtonClickHandler.addEventListener("click", pauseButtonClickHandler);
resetButton.addEventListener("click", resetButtonClickHandler);
