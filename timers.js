var startButton = document.getElementById("start");
var timerText = document.getElementById("timer");
var seconds = 0;
var resetButton = document.getElementById("reset");
var pauseButton = document.getElementById("pause");
var timeInterval;

startButton.addEventListener("click", updateTime);
resetButton.addEventListener("click", resetTime);
pauseButton.addEventListener("click", pauseTime);

function updateTime() {
  timeInterval = setInterval(startTime,1000);
}

function startTime() {
  seconds.textContent = seconds++;
  timerText.textContent = "Time elapsed:" + " " + seconds;
}

function resetTime() {
  clearInterval(timeInterval);
  timerText.textContent = "Stop Watch";
  seconds = 0;
}

function pauseTime() {
  clearInterval(timeInterval);
}
