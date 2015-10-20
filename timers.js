// THIS CODE WORKS BUT ITS NOT WELL WRITTEN!
var timer = {
  start:  document.getElementById('start'),
  reset:  document.getElementById('reset'),
  stop:   document.getElementById('start'),
  pause:  document.getElementById('pause'),
  seconds:  0,
  changeName: function(){
    this.start.textContent = "Stop";
  },
  changeBack: function (){
    this.start.textContent = "Start";
  },
  clickStart: function (){timer.start.addEventListener("click", function(){
          if (timer.seconds <= 0 || timer.start.textContent == "Start"){
            timerID = setInterval(function(){
            timer.start.setAttribute("id", timer.seconds);
            document.getElementById('timer').innerHTML = "Time Lapsed: " + timer.seconds + "s";
            timer.changeName();
            timer.seconds ++;
            },1000);
          }
          else if (timer.seconds > 0 || timer.start.textContent === "Stop"){
            var stop = document.querySelectorAll("button")[1].id;
            clearInterval(timerID);
            console.log("You logged" + timer.stop + "seconds");
            document.getElementById('timer').innerHTML = "You logged: " + timer.seconds + "s";
            timer.changeBack();
          }
  });
},

  resetClock: function() {
      timer.reset.addEventListener("click", function() {
        var stop = document.querySelectorAll("button")[1].id;
        stop = 0;
        clearInterval(timerID);
        console.log("You logged" + timer.stop + "seconds");
        timer.seconds = 0;
        document.getElementById('timer').innerHTML = "Stop Watch";
        timer.changeBack();
    });
},

  pauseClock: function() {
    pause.addEventListener("click", function() {
      var stop = document.querySelectorAll("button")[1].id;
      console.log("You are stopped at" + timer.stop + "seconds");
      clearInterval(timerID);
      timer.seconds = stop;
      document.getElementById('timer').innerHTML = "Time Lapsed: " + timer.seconds + "s";
      timer.changeBack();
    });
   }
};

timer.clickStart();
timer.pauseClock();
timer.resetClock();




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
