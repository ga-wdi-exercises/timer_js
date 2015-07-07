
var resetButton = document.getElementById("reset");
var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");
var timer = document.getElementById("timer");

resetButton.addEventListener("click",reset)
startButton.addEventListener("click", start)
pauseButton.addEventListener("click", pause)

var seconds = 0;
var timerId;

function updateTime() {
  seconds++;
  timer.innerHTML = seconds;
  }
function start () {
  timerId = window.setInterval (updateTime, 1000);
}
function pause () {
clearInterval(timerId);
}

function reset () {
  timer.innerHTML = "Stop Watch";
  clearInterval(timerId);
  seconds = 0;
}
