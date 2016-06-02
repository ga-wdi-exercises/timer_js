var stopWatch = {

var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");
var resetButton = document.getElementById("reset");

var timer = null;
var currentSeconds = 0;


start.on('click', start);
pause.on('click', pause);
reset.on('click', reset);

function newTime() {
  var timeText =  document.html().replace(timer , "");
    timer.html(Number(timeText) ++
    timer.prepend(timer)
}


function start() {
    if(timerId === timerId){
      currentSeconds++
      timerId = setInterval(updateTime, 1000);
      return;
    }
timer.html("Time:" + currentSeconds);
  }

  function pause(){
    if(timerId != timerId){
      currentSeconds = timer.html();
      clearInterval( timerId );
      timerId = null;
      return;
    }

  }

  function reset(){
    if (timerId === timerId) {
      return pause();
      currentSeconds = 0;
      timer.html("Time Reset");
    };
  }
}

$(document).ready( function(){
  initTimer();
});
};
