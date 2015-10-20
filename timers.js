var timer = {
  start:  document.getElementById('start'),
  reset:  document.getElementById('reset'),
  stop:   document.getElementById('start'),
  pause:  document.getElementById('pause'),
  timerElement:  document.getElementById('timer'),
  seconds: 0,
  timerID: 0,

  changeName: function(){
    this.start.textContent = "Stop";
  },
  changeBack: function (){
    this.start.textContent = "Start";
  },
  clickStart: function (){
    this.start.addEventListener("click", function(){
          if (timer.start.textContent === "Start"){
            timer.timerID = setInterval(function(){
              timer.seconds ++;
              timer.timerElement.innerHTML = "Time Lapsed: " + timer.seconds + "s";
            },1000);
            timer.changeName();
          }
          else if (timer.start.textContent === "Stop"){
            clearInterval(timer.timerID);
            timer.timerElement.innerHTML = "You logged: " + timer.seconds + "s";
            timer.changeBack();
          }
    });
  },

  resetClock: function() {
      this.reset.addEventListener("click", function() {
        clearInterval(timer.timerID);
        timer.seconds = 0;
        timer.timerID = 0;
        timer.timerElement.innerHTML = "Stop Watch";
        timer.changeBack();
    });
  },

  pauseClock: function() {
    this.pause.addEventListener("click", function() {
      clearInterval(timer.timerID);
      timer.timerElement.innerHTML = "Time Lapsed: " + timer.seconds + "s";
      timer.changeBack();
    });
  }
};

timer.clickStart();
timer.pauseClock();
timer.resetClock();
/*
var start =  document.getElementById('start');
var reset =  document.getElementById('reset');
var stop =   document.getElementById('start');
var pause =  document.getElementById('pause');
var timerSeconds =  document.getElementById('timer');
var seconds = 0;
var minutes = 0;
var timerID = 0;

function startTiming(clicking){
    timeID = setInterval(clicking, 1000);
}
function clicking {
  changeName ();
  timerSeconds.innerHTML = "Time Lapsed: " + seconds + "s";
  start.setAttribute("id", timerID);
  seconds++;
}
function clearTiming(){
  clearInterval(timeID);
}
function changeName(){
  start.textContent = "Stop";
}
function changeBack(){
  start.textContent = "Start";
}
function clickStart(){
    start.addEventListener("click", function(){
      if(seconds <= 0 || start.textContent === "Start"){
      changeName ();
      timerSeconds.innerHTML = "Time Lapsed: " + seconds + "s";
      start.setAttribute("id", timerID);
      seconds++;
    }
      else if(seconds > 1 || start.textContent === "Stop"){
      clearTiming();
      changeBack();
      var stop = document.querySelectorAll("button")[1].id;
      timerSeconds.innerHTML = "You logged: " + parseInt(stop) + "s";
    }
  });
}
startTiming(clickStart);
*/
