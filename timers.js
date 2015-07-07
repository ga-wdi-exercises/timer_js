// Create Javascript selectors that target each of the timer buttons.

var reset = document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
// Create click handlers (empty, for now) for each of the timer buttons.
//Reset event handler
reset.addEventListener("click", resetTimer)
//Start event handler
start.addEventListener("click", startTimer)
//Pause event handler
pause.addEventListener("click", pauseTimer)
/*Instantiate seconds and timerId variables for your timer.
The latter will make more sense after reading up on setInterval().*/
  var seconds = 0;
  var timerId;
function count(){
      seconds ++;
      document.getElementById("timer").innerHTML = seconds;
      console.log(seconds);
}
//Inside your click handler for the start button...
//Replace "Stop Watch" in the HTML with the content of the seconds variable.
//Use setInterval() to increment the timer by 1 every second.
var keepInterval = 0
function startTimer(){
  keepInterval ++;
if (keepInterval === 1)
timerId = setInterval(count, 1000);}
//Inside your click handler for the pause button...
//Stop -- but do not reset! -- the timer using clearInterval().
function pauseTimer(){
  clearInterval(timerId)
  keepInterval = 0;
}
//Inside your click handler for the reset button...
//Stop the timer using clearInterval().
//Reset the timer.
//Replace the time in your HTML with the original "Stop Watch" text.
function resetTimer(){
  clearInterval(timerId);
  seconds = 0;
  document.getElementById("timer").innerHTML = "Stop Watch";
  keepInterval = 0
}
