var timer = {
seconds: 0,
timerID: 0,
};

var timerStart = document.getElementById('timer');
var startButton = document.getElementById('start');
var resetButton = document.getElementById('reset');
var pauseButton = document.getElementById('pause');

startButton.addEventListener("click", function(event){
timer.timerID = window.setInterval(updateTime,1000)
});

resetButton.addEventListener("click", function(event){
window.clearInterval(timer.timerID);
timer.seconds = 0;
timerStart.innerHTML = "Stop Watch";
});

pauseButton.addEventListener("click", function(event){
window.clearInterval(timer.timerID);
});

function updateTime() {
  timer.seconds++;
  timerStart.innerHTML = "Time Elapse " + timer.seconds;
}
