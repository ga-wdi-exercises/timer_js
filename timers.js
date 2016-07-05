var startButton = document.getElementById("start");
var timerText = document.getElementById("timer");
var timeCount = 0;

startButton.addEventListener("click", startTimer);

function startTimer() {
  setInterval(timeCountStart,1000);
}

function timeCountStart() {
  timeCount.textContent = timeCount++;
  timerText.textContent = "Time elapsed:" + " " + timeCount;
}
