//create selectors that target the buttons
var resetButton = document.querySelector("#reset");
var startButton = document.querySelector("#start");
var pauseButton = document.querySelector("#pause");

displayTime = document.querySelector("h1")
displayTime.id = "#timer"

var seconds = 0;
var timerId;
var isRunning = false;

//create click handlers

var resetTimer = function() {
  console.log("reset");
  clearInterval(timerId);
  seconds = 0;
  displayTime.textContent = "Stop Watch"
  isRunning = false;
};

var startTimer = function() {
  while (!isRunning) {
  console.log("start");
  isRunning = true;
  timerId = setInterval(updateTime, 1000);
    }
  }

var pauseTimer = function() {
  console.log("pause");
  clearInterval(timerId);
  isRunning = false;
}

resetButton.addEventListener("click", resetTimer);
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);


// 4. Create an `updateTime()` function that increments the `seconds` counter and inserts that value into the `<h1>` element with `id="timer"`.

var updateTime = function() {
  displayTime.textContent = seconds;
  seconds++;
}
