var reset = document.getElementById('reset');
var start = document.getElementById('start');
var pause = document.getElementById('pause');

reset.addEventListener("click", resetClock)
start.addEventListener("click", startClock)
pause.addEventListener("click", pauseClock)
//Global Variables
var seconds = 0;
var timerId;
//Used to avoid overlapping starts
var clickCount = 0;

//Modified
var updateTime = function () {
  seconds ++;
  document.getElementById("timer").innerHTML="Time Elapsed: " + seconds};

function startClock () {
  clickCount ++;
  if (clickCount === 1) {
  timerId = setInterval(updateTime, 1000)}};

function pauseClock () {
  clearInterval(timerId);
  clickCount = 0;
}

function resetClock () {
  clearInterval(timerId);
  clickCount = 0;
  document.getElementById("timer").innerHTML="Stop Watch";
  seconds = 0;}
