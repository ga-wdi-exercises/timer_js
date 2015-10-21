var startButton = document.getElementById('start');
var resetButton = document.getElementById('reset');
var pauseButton = document.getElementById('pause');
var seconds = 0;
var timerId;

startButton.addEventListener('click', function(e) {
  console.log(timerId);
  if(!timerId);
  timerId = setInterval(updateTime, 1000);
});

pauseButton.addEventListener('click', function(e) {
  console.log('hate you');
  clearInterval(timerId);
  timerId = 0;
});

resetButton.addEventListener('click', function(e) {
  clearInterval(timerId);
  seconds = 0;
  timerId = 0;
  document.getElementById('timer').innerHTML = timerId;
});



function updateTime(){
  seconds++;
  document.getElementById('timer').innerHTML = seconds;
}
