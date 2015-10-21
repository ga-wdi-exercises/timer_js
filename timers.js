var startID = document.querySelector("#start");
var pauseID = document.querySelector("#pause");
var resetID = document.querySelector("#reset");
var timerID = document.querySelector("#timer");
var seconds = 0;
var click = 0;

var updateTime = function () {
  seconds++;
  timerID.textContent = "Timer:" + seconds;
};



function start() {
 test = setInterval(updateTime, 1000);
  startID.removeEventListener("click", start);
}

startID.addEventListener("click", start);
  // click++;
  // if (click < 2) {
  //   start = setInterval(updateTime, 1000);
  // }


//   // startID.removeEventListener("click", updateTime);
// });


var pause;
pauseID.addEventListener("click", function(){
  clearInterval(test);
  click = 0;
  startID.addEventListener("click", start);
});

var reset;
resetID.addEventListener("click", function(){
  clearInterval(test);
  timerID.textContent = "Stop Watch";
  seconds = 0;
  startID.addEventListener("click", start);
});






















// var updateTime = function () {
//   seconds++;
//   timerID.textContent = "Timer:" + seconds;
// };
//
// function startTime(){
//   // startID.addEventListener("click", startTime);
//   // start = setInterval(updateTime, 1000);
//   // startID.removeEventListener("click", startTime);
// }
//
// var start;
//
// var pause;
// pauseID.addEventListener("click", function(){
//   clearInterval(start);
//   startID.addEventListener("click", startTime);
// });
//
// var reset;
// resetID.addEventListener("click", function(){
//   clearInterval(start);
//   timerID.textContent = "Stop Clock";
//   seconds = 0;
// });
