/******************************************
BONUS VERSION WITH JQUERY
******************************************/

var timer = {
  init: function() {
    stopWatch = $("#timer");
    reset = $("#reset");
    start = $("#start");
    pause = $("#pause");
    seconds = 0;
    start.on("click", function () {
      timer.startTimer();
    });
    pause.on("click", function () {
      timer.pauseTimer();
    });
    reset.on("click", function () {
      timer.resetTimer();
    });
  },
  updateTime: function() {
    seconds += 1;
    if (seconds < 2) {
      stopWatch.html("Time Elapsed: " + seconds + " second.");
    }
    else {
      stopWatch.html("Time Elapsed: " + seconds + " seconds.");
    }
  },
  startTimer: function() {
    countStart = setInterval(this.updateTime, 1000);
  },
  pauseTimer: function() {
    clearInterval(countStart);
  },
  resetTimer: function() {
    clearInterval(countStart);
    seconds = 0;
    stopWatch.html("Stop Watch");
  }
}

timer.init()


/******************************************
ORIGINAL
******************************************/


// var stopWatch = document.getElementById("timer");
// var reset = document.getElementById("reset");
// var start = document.getElementById("start");
// var pause = document.getElementById("pause");
//
// // var timerId;
// var seconds = 0;
//
// var updateTime = function () {
//   seconds += 1;
//   if (seconds < 2) {
//     stopWatch.innerHTML = "Time Elapsed: " + seconds + " second.";
//   }
//   else {
//     stopWatch.innerHTML = "Time Elapsed: " + seconds + " seconds.";
//   }
// }
//
// start.addEventListener("click", function() {
//   // if (countStart !== setInterval(updateTime, 1000)) {
//     countStart = setInterval(updateTime, 1000);
//   // }
// } );
//
// pause.addEventListener("click", function() {
//   clearInterval(countStart);
// } );
//
// reset.addEventListener("click", function() {
//   clearInterval(countStart);
//   seconds = 0;
//   stopWatch.innerHTML = "Stop Watch";
// } );
