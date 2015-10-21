var seconds = 0;
var timerId = 0;
var timerDisplay = document.getElementById("timer");
var numClicks = 0;

var reset = document.getElementById("reset");
var resetClickEvent = function(){
  clearInterval(timerId);
  seconds = 0;
  document.getElementById("timer").innerHTML = "Stop Watch";
  numClicks = 0;
}
reset.onclick = resetClickEvent;

var start = document.getElementById("start");
var startClickEvent = function(){
  numClicks++
  if (numClicks == 1) {
    timerDisplay.innerHTML = (seconds + " seconds");
    timerId = setInterval(updateTime, 1000);
  }
}
start.onclick = startClickEvent;

var pause = document.getElementById("pause");
var pauseClickEvent = function(){
  clearInterval(timerId);
  numClicks = 0;
}
pause.onclick = pauseClickEvent;

function updateTime() {
  seconds++;
  timerDisplay.innerHTML = seconds + " seconds";
}
