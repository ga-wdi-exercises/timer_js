

//create selectors that target the buttons
var resetButton = document.querySelector("#reset");
var startButton = document.querySelector("#start");
var pauseButton = document.querySelector("#pause");

//declare variables

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

//add event listeners on buttons

resetButton.addEventListener("click", resetTimer);
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);

//timer update function

var updateTime = function() {
  displayTime.textContent = seconds;
  seconds++;
}
