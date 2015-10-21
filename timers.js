// refactoring in jQuery
var timer = document.querySelector("#timer");
var startButton = document.querySelector("#start");
var resetButton = document.querySelector("#reset");
var pauseButton = document.querySelector("#pause");
var seconds = 0;
var interval;

var updateTime = function(){
  seconds++;
  timer.textContent = "Time Elapsed: " + seconds;
};
var startClickEvent = function(){
  interval = setInterval(updateTime, 1000);
 };
startButton.addEventListener("click", startClickEvent);

var pauseClickEvent = function(){
  clearInterval(interval);
};
pauseButton.addEventListener("click", pauseClickEvent);

var resetClickEvent = function(){
  clearInterval(interval);
  seconds = 0;
  timer.textContent = "Stop Watch";
};
resetButton.addEventListener("click", resetClickEvent);
