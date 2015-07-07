var resetButton = document.getElementById('reset');
var startButton = document.getElementById('start');
var pauseButton = document.getElementById('pause');
var timeCounter = document.getElementById('timer');
var seconds = 0;

startButton.addEventListener("click", function(){
  timeCounter.innerHTML = "Time Elasped: " + seconds + "s";
  timerControl = setInterval(updateTime, 1000);
});

resetButton.addEventListener("click", function(){
  timeCounter.innerHTML = "Stop Watch";
  seconds = 0;
  clearInterval(timerControl);
});

pauseButton.addEventListener("click", function(){
  clearInterval(timerControl);
});

function updateTime() {
  seconds++;
  timeCounter.innerHTML = "Time Elasped: " + seconds + "s";
};
