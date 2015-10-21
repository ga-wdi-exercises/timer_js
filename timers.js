// alert("This Works!");
var startButton = document.querySelector("#start");
var resetButton = document.querySelector("#reset");
var pauseButton = document.querySelector("#pause");

var startClickEvent = function(){
interval = setInterval(updateTime, 1000);
 };
var updateTime = function(){
  seconds++;
  timer.textContent = "Time Elapsed: " + seconds;
};
var seconds = 0;

startButton.addEventListener("click", startClickEvent);

// var pauseButton = document.querySelector("pause");
var timer = document.querySelector("#timer");
var interval;
var resetClickEvent = function(){
  clearInterval(interval);
};
resetButton.addEventListener("click", resetClickEvent);

// var seconds =
// var timerId =
