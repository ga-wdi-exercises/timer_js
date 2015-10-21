// Create Javascript selectors that target each of the timer buttons.
var resetButton = document.querySelector("#reset");
var startButton = document.querySelector("#start");
var pauseButton = document.querySelector("#pause");
var seconds = 0;
var timerId;

// Create click handlers (empty, for now) for each of the timer buttons.
function resetButtonClickHandler() {
  clearInterval( timerId ) //stops the timer from running
  seconds = 0;
  document.getElementById("timer").textContent = "Stop Watch";
  console.log("Timer reset!");
  startButton.addEventListener("click", startButtonClickHandler);
}

function startButtonClickHandler() {
  document.getElementById("timer").textContent = "Time Elapsed: " + seconds;
  timerId = setInterval( updateTime, 1000);
  console.log("Timer started!");
  startButton.removeEventListener("click",startButtonClickHandler);
// Use setInterval() to increment the timer by 1 every second.
}

function pauseButtonClickHandler() {
  clearInterval(timerId);
  console.log("Timer paused!")
  startButton.addEventListener("click", startButtonClickHandler);
}

// Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".
function updateTime() {
  seconds += 1;
  document.getElementById("timer").textContent = "Time Elapsed: " + seconds;
}

startButton.addEventListener("click", startButtonClickHandler);
pauseButton.addEventListener("click", pauseButtonClickHandler);
resetButton.addEventListener("click", resetButtonClickHandler);
