//Variables seconds & timerID
var seconds = 0;
var timerID;

//Reset Button
var resetButton = document.querySelector("#reset");
var handleClickEventReset = function(){
  console.log("I was clicked! RESET");
};

//Start Button
var startButton = document.querySelector("#start");
var handleClickEventStart = function(){
  console.log("I was clicked! START");
  setInterval();
};

//Stop Button
var stopButton = document.querySelector("#pause");
var handleClickEventStop = function(){
  console.log("I was clicked! STOP");
  var timerIDSelector = document.querySelector("#timer");
  timerIDSelector.textContent = "Stop Watch " +  seconds;
};


resetButton.addEventListener("click", handleClickEventReset);
startButton.addEventListener("click", handleClickEventStart);
stopButton.addEventListener("click", handleClickEventStop);

var updateTime = function(){
  seconds++;
  var timerIDSelector = document.querySelector("#timer");
  timerIDSelector.textContent = "Stop Watch " +  seconds;
};
setInterval(function(){updateTime(); }, 1000);

// //ADAM CODE
// function startTimerApp() {
//   var seconds = 0;
//   var minutes = 0;
//   // other code here
//
// }
// startTimerApp();
// ## IIFE - immediate invoked function expression
//
// (function() {
//   var seconds = 0;
//   var minutes = 0;
// })();
