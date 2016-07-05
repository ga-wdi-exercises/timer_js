var startButton = document.getElementById("start");
var timerText = document.getElementById("timer");
var timeCount = 0;
var resetButton = document.getElementById("reset");
var pauseButton = document.getElementById("pause");
var timeInterval;

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
pauseButton.addEventListener("click", pauseTimer);

// var setTimer = setInterval(startTimer,1000);
//
// function startTimer() {
//   timeCount.textContent = timeCount++;
//   timerText.textContent = "Time elapsed:" + " " + timeCount;
// }

function startTimer() {
  timeInterval = setInterval(timeCountStart,1000);
}

function timeCountStart() {
  timeCount.textContent = timeCount++;
  timerText.textContent = "Time elapsed:" + " " + timeCount;
}

function resetTimer() {
  clearInterval(timeInterval);
  timerText.textContent = "Stop Watch";
  timeCount = 0;
}

function pauseTimer() {
  clearInterval(timeInterval);
}
