var seconds = 0;
var timerId;

var startButton = document.getElementById('start');
var resetButton = document.getElementById('reset');
var pauseButton = document.getElementById('pause');
var timerText = document.getElementById('timer');

startButton.addEventListener('click', function( event ) {
  updateTime();
});

resetButton.addEventListener('click', function( event ) {
  stopTimer(timerId);
  seconds = 0;
  timerText.innerHTML = 'Stop Watch';
});

pauseButton.addEventListener('click', function( event ) {
  stopTimer(timerId);
});

function updateTime() {
  //window or document.setIneterbal?
  timerId = window.setInterval(function(){
    seconds += 1;
    timerText.innerHTML = seconds;
  }, 1000);
}

function stopTimer(id) {
  clearInterval(id);
}
