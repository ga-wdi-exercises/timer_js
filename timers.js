/******************************************
BONUS VERSION (unfinished)
******************************************/
//
// var timer = {
//   createTimer: [
//     stopWatch = document.getElementById("timer"),
//     reset = document.getElementById("reset"),
//     start = document.getElementById("start"),
//     pause = document.getElementById("pause"),
//     countSec = 0
//   ],
//   seconds: function () {
//     if (countSec < 2) {
//       stopWatch.innerHTML = "Time Elapsed: " + countSec + " second.";
//       countSec += 1;
//     } else {
//       stopWatch.innerHTML = "Time Elapsed: " + countSec + " seconds.";
//       countSec += 1;
//     }
//   },
//   start: function () {
//     start.addEventListener("click", function() {
//       countStart = setInterval(seconds, 1000);
//     } );
//   },
//   pause: function () {
//     pause.addEventListener("click", function() {
//       clearInterval(countStart);
//     } );
//   },
//   reset: function () {
//     reset.addEventListener("click", function() {
//       clearInterval(countStart);
//       countSec = 0;
//       stopWatch.innerHTML = "Stop Watch";
//     } );
//   }
// }

/******************************************
ORIGINAL
******************************************/


var stopWatch = document.getElementById("timer");
var reset = document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");

var timerId;
var seconds = 0;

var updateTime = function () {
  seconds += 1;
  if (seconds < 2) {
    stopWatch.innerHTML = "Time Elapsed: " + seconds + " second.";
  }
  else {
    stopWatch.innerHTML = "Time Elapsed: " + seconds + " seconds.";
  }
}

start.addEventListener("click", function() {
  countStart = setInterval(updateTime, 1000);
} );

pause.addEventListener("click", function() {
  clearInterval(countStart);
} );

reset.addEventListener("click", function() {
  clearInterval(countStart);
  seconds = 0;
  stopWatch.innerHTML = "Stop Watch";
} );
