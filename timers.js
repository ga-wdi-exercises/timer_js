// THIS CODE WORKS BUT ITS NOT WELL WRITTEN!


var start = document.getElementById('start');
var reset = document.getElementById('reset');
var stop = document.getElementById('start');
var pause = document.getElementById('pause');
var seconds = 0;
var timerCount;

function changeName(){
  start.textContent = "Stop";
}

function changeBack(){
  start.textContent = "Start";
}

var clickStart = start.addEventListener("click", function(){
        if (seconds <= 0 || start.textContent == "Start"){
          timerID = setInterval(function(){
          document.getElementById('timer').innerHTML = "Time Lapsed: " + seconds + "s";
          changeName();
          start.setAttribute("id", seconds);
          seconds ++;
          },1000);
        }
        else if (seconds > 0 || start.textContent === "Stop"){
        var stop = document.querySelectorAll("button")[1].id;
        clearInterval(timerID);
        console.log("You logged" + stop + "seconds");
        document.getElementById('timer').innerHTML = "You logged: " + seconds + "s";
        changeBack();
      }
});

var reset = reset.addEventListener("click", function() {
  var stop = document.querySelectorAll("button")[1].id;
  clearInterval(timerID);
  console.log("You logged" + stop + "seconds");
  seconds = 0;
  document.getElementById('timer').innerHTML = "Stop Watch";
  changeBack();
});

var pause = pause.addEventListener("click", function() {
  var stop = document.querySelectorAll("button")[1].id;
  console.log("You are stopped at" + stop + "seconds");
  clearInterval(timerID);
  seconds = stop;
  document.getElementById('timer').innerHTML = "Time Lapsed: " + seconds + "s";
  changeBack();
});
/*
var timer = {
  start: document.getElementById('start'),

  pause: document.getElementById('pause'),

  reset: document.getElementById('reset'),

  startTimer: function (){
    var seconds = 0;
    var totaltime = [];
    var timerCount = setInterval(function(){
      start.textContent = "Stop";
      document.getElementById('timer').textContent = "Time Lapsed: " + seconds + "s";

      seconds ++;
    }, 1000);
  },
  pauseTimer: function (){
    clearInterval(clickStart);
  }
};
var clickStart = start.addEventListener("click", timer.startTimer);
*/
