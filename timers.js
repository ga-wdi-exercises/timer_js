var timer = {

};

var reset = document.getElementById('reset');
var start = document.getElementById('start');
var pause = document.getElementById('pause');
var timer = document.getElementById('timer');

var seconds = 0;
var timerId;

var resetListener = reset.addEventListener('click', function(){});
var startListener = start.addEventListener('click', function(){timer.textContent='Time Elapsed: ' + seconds; setInterval(updateTime, 1000);});
var pauseListener = pause.addEventListener('click', function(){clearInterval();});
var timerListener = timer.addEventListener('click', function(){});

var updateTime = function(){
  seconds+=1;
  console.log(seconds);
  timer.textContent='Time Elapsed: ' + seconds;
  return seconds;
};


timerId = function(){
  setInterval(updateTime,1000);
};
