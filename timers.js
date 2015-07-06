//Target Buttons and Timer
var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");
var pauseButton = document.getElementById("pause");
var timer = document.getElementById("timer");
//Add event handlers
startButton.addEventListener("click", start);
resetButton.addEventListener("click", reset)
pauseButton.addEventListener("click", pause);
//Initiate seconds and timerID variables
var seconds = 0;
var timerID;

//Increment seconds by 1 and update timer heading accordingly
function updateTime(){
  seconds += 1;
  timer.innerHTML = ("Time elapsed: " + seconds);
}
//Start timer and call updateTime() every second
function start(){
  timerID = window.setInterval(updateTime, 1000)
}
//Stops timerID
function pause(){
  clearInterval(timerID);
}
//Stops timerID and sets seconds to 0
function reset(){
  clearInterval(timerID);
  seconds = 0;
  timer.innerHTML = ("Stop Watch");
}
