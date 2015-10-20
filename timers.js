var seconds = 0;
var timerId = 0;
var timerDisplay = document.getElementById("timer");

var reset = document.getElementById("reset");
var resetClickEvent = function(){
  clearInterval(timerId);
  seconds = 0;
  document.getElementById("timer").innerHTML = "Stop Watch";
}
reset.onclick = resetClickEvent;

var start = document.getElementById("start");
var startClickEvent = function(){
  timerDisplay.innerHTML = seconds;
  timerId = setInterval(updateTime, 1000)
}
start.onclick = startClickEvent;

var pause = document.getElementById("pause");
var pauseClickEvent = function(){
  clearInterval(timerId);
}
pause.onclick = pauseClickEvent;

function updateTime() {
  seconds++; //are the seconds in milliseconds?
  timerDisplay.innerHTML = seconds;
}
