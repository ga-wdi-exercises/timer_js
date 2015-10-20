

//get HTML elements
var reset = document.getElementById('reset');
var start = document.getElementById('start');
var pause = document.getElementById('pause');
var timer = document.getElementById('timer');

//defines global variables functions
var seconds = 0;
var songTimer;

var updateTimer = function(){
  seconds++;
  timer.textContent = seconds;
}
var startTimer = function(){
  timer.textContent = seconds;
  songTimer = setInterval(updateTimer, 1000)
  start.removeEventListener("click", startTimer)
}

//add event listeners for start
start.addEventListener("click", startTimer)


//add event for pause
pause.addEventListener("click", function(){
  clearInterval(songTimer)
  start.addEventListener("click", startTimer)
});

//add event for reset
reset.addEventListener("click", function(){
  clearInterval(songTimer)
  seconds = 0
  timer.textContent = 'Stop Watch'
  start.addEventListener("click", startTimer)
});
