// <button id="reset">Reset</button>
// <button id="start">Start</button>
// <button id="pause">Pause</button>

var timer = document.getElementById('timer')
var seconds = 0
var timerID;
var updateTime = function () {
  seconds++;
  timer.innerHTML = "Time Elapsed: " + seconds;
};

var startButton = document.getElementById('start');
//if(seconds = 0) {
startButton.addEventListener("click", function startTimer() {
  if (!timerID) {
    timerID = window.setInterval(updateTime, 1000);
  }
});

var pauseButton = document.getElementById('pause');
pauseButton.addEventListener("click", function pauseTime() {
  window.clearInterval(timerID);
  timerID = null;
});

var resetButton = document.getElementById('reset');
resetButton.addEventListener("click", function resetTime() {
  window.clearInterval(timerID);
  seconds = 0;
  timer.innerHTML = "Stop Watch"
  timerID = null;
});
