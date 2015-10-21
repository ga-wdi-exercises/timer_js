
var reset = document.getElementById('reset');
var start = document.getElementById('start');
var pause = document.getElementById('pause');
var timer = document.getElementById('timer');

var seconds = 0;
var timerId;

var resetListener = reset.addEventListener('click', resetButton());

var startListener = start.addEventListener('click',  startButton());

var pauseListener = pause.addEventListener('click', function(){pauseButton();});

var updateTime = function(){
  seconds++;
  console.log(seconds);
  timer.textContent='Time Elapsed: ' + seconds;
};

var startButton = function() {
  if (seconds === 0) {
    document.getElementById("timer").textContent = 0;
  }
  clearInterval(timerId);
  timerId = setInterval(updateTime, 1000);
};

var pauseButton = function() {
  clearInterval(timerId);
};

var resetButton = function() {
  clearInterval(timerId);
  seconds = 0;
  document.getElementById('timer').innerHTML = "Stop Watch";
};
