var seconds;
var timerId;
var timer = '#timer';
var count = 0


function updateTime(){
  seconds = setInterval(function(){
    $(timer).text(count);
    count++;


  }, 1000);
}

function pauseTime(){
  clearInterval(seconds);
}

function resetTime(){
  pauseTime();
  count = 0;
  $(timer).text(count);
}




$('#start').on('click', updateTime);

$('#pause').on('click', pauseTime);

$('#reset').on('click', resetTime);
