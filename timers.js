//Create Javascript selectors that target each of the timer buttons.
var reset = document.getElementById("reset")
var start = document.getElementById("start")
var pause = document.getElementById("pause")

//global variable for Timer
var timer = document.getElementById("timer")

//Click handler for reset button
reset.addEventListener('click',function(){
  timer.innerHTML = "Stop Watch"
  clearInterval(timerId)
  seconds = 0;
})

//Click handler for start button
//Replaces "Stop Watch" in the HTML with the content of the second variable
//setInterval increments the timer by 1 every second
start.addEventListener('click',function(){
  timer.innerHTML = "Time elapsed: " + seconds
  timerId = setInterval(updateTime, 1000)
})

//Click handler for pause button
pause.addEventListener('click',function(){
  timer.innerHTML = "Time elapsed: 1"
  clearInterval(timerId)
})

//Second and timerId variables for the timer
var seconds = 0
var timerId;

//updateTime() function - increments the seconds counter and inserts that value into the <h1> element with id="timer".
function updateTime(){
  seconds++;
  timer.innerHTML = seconds
}
