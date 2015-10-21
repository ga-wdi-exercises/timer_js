var timerDisplay = document.querySelector("h1#timer");
//Button elements selected
var start = document.querySelector("#start")
var pause = document.querySelector("#pause")
var reset = document.querySelector("#reset")
//Events for clicking the buttons
start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);
//initialized values for the counter[seconds] and timer[timerId]
var seconds = 0;
var timerId = null;
//Used for ignoring start clicks
var allowStart = 1;
//function to increase seconds every second
function updateTime(){
  seconds++;
  timerDisplay.innerHTML = seconds;
}
function startTimer(){
  if(allowStart){
    timerDisplay.innerHTML = seconds;
    //every 1000ms, update timerDisplay with seconds
    timerId = setInterval(updateTime, 1000);
    allowStart = 0;
  }
}
function pauseTimer(){
  allowStart = 1;
  clearInterval(timerId);
}
function resetTimer(){
  allowStart = 1;
  //clearInterval to stop the timer increments
  clearInterval(timerId);
  seconds = 0;
  timerDisplay.innerHTML = "Stop Watch";
}
//*****************************
//Object literal Implementation
//*****************************
//Not yet finished

/*
var timer = {

}
*/
