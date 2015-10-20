var timerStart = document.querySelector('#start');
var timer = document.querySelector('#timer');
var timerPause = document.querySelector('#pause');
var timerReset = document.querySelector('#reset');

var seconds = 0;
var songTimer;

var updateTimer = function() {
  seconds++;
  timer.textContent = seconds
}

var startTimer = function () {
  timer,textContent = seconds
  songTimer = setInterval(updateTimer, 1000)
  timerStart.removeEventListener("click", startTimer)
}

timerStart.addEventListener('click', startTimer)

timerPause.addEventListener("click", function(){
 clearInterval(songTimer)
 start.addEventListener("click", startTimer)
});

timerReset.addEventListener("click", function(){
 clearInterval(songTimer)
 seconds = 0
 timer.textContent = 'Stop Watch'
 start.addEventListener("click", startTimer)
});
