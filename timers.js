//Variables seconds & timerID
var seconds = 0;
var timerID;
var stopWatch;

function updateTime(){
  seconds++;
  var timerIDSelector = document.querySelector("#timer");
  timerIDSelector.textContent = "Stop Watch " +  seconds;
}
function stopTime(){
  clearInterval(stopWatch);
}



//Reset Button
var resetButton = document.querySelector("#reset");
var handleClickEventReset = function(){
  console.log("I was clicked! RESET");
  seconds = 0;
  var timerIDSelector = document.querySelector("#timer");
  timerIDSelector.textContent = "Stop Watch " +  seconds;
};

//Start Button
var startButton = document.querySelector("#start");
var handleClickEventStart = function(){
  console.log("I was clicked! START");
  stopWatch = setInterval(updateTime, 1000);
};

//Stop Button
var stopButton = document.querySelector("#pause");
var handleClickEventStop = function(){
  console.log("I was clicked! STOP");
  stopTime();
  var timerIDSelector = document.querySelector("#timer");
  timerIDSelector.textContent = "Stop Watch " +  seconds;
};


resetButton.addEventListener("click", handleClickEventReset);
startButton.addEventListener("click", handleClickEventStart);
stopButton.addEventListener("click", handleClickEventStop);




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
