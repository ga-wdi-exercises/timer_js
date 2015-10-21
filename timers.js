var resetButton = document.querySelector("#reset");
var startButton = document.querySelector("#start");
var pauseButton = document.querySelector("#pause");
var timerH1 = document.querySelector("#timer");
var seconds = 0;
var timerId = null;

var updateTime = function(){
  seconds++;
  timerH1.textContent = "Time elapsed: " + seconds;
};

var startListener = startButton.addEventListener("click", function () {
  if (timerId===null) {
    timerId = setInterval(updateTime, 1000);
  }
});

var pauseClickHandler = function(){
  clearInterval(timerId);
  timerId = null;
};
pauseButton.addEventListener("click", pauseClickHandler);

var resetClickHandler = function(){
  seconds = 0;
  clearInterval(timerId);
  timerH1.textContent = "Stop Watch";
  timerId = null;
};
resetButton.addEventListener("click", resetClickHandler);

// var timer = {
//   resetButton : document.querySelector("#reset"),
//   startButton : document.querySelector("#start"),
//   pauseButton : document.querySelector("#pause"),
//   timerH1 : document.querySelector("#timer"),
//   seconds : 0,
//   timerId : null,
//
//   updateTime : function(){
//     this.seconds++;
//     this.timerH1.textContent = "Time elapsed: " + this.seconds;
//   },
//
//   startListener : function() {
//     this.startButton.addEventListener("click", function () {
//       if (timerId===null) {
//         this.timerId = setInterval(this.updateTime.bind(this), 1000);
//       }
//     });
//   }.bind(this),
//   pauseListener : function() {
//     this.pauseButton.addEventListener("click", function () {
//       var pauseClickHandler = function(){
//         clearInterval(this.timerId);
//         this.timerId = null;
//       };
//     });
//   }.bind(this),
//   resetListener : function () {
//     this.resetButton.addEventListener("click", function () {
//       var resetClickHandler = function(){
//         this.seconds = 0;
//         clearInterval(this.timerId);
//         this.timerH1.textContent = "Stop Watch";
//         this.timerId = null;
//       };
//     });
//   }.bind(this),
// };
//
// timer.startListener();
// timer.pauseListener();
// timer.resetListener();
