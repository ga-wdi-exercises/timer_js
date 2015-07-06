// 1. Create Javascript selectors that target each of the timer buttons.
var startButton = document.getElementById("start")
var resetButton = document.getElementById("reset")
var pauseButton = document.getElementById("pause")
var timerText = document.getElementById("timer")

var seconds = 0
var timerStart
var countPause = 0
var countStart = 0


// 4. Create an `updateTime()` function that increments the `seconds` counter and inserts that value into the `<h1>` element with `id="timer"`.
function updateTime(){
  seconds++;
  timerText.innerHTML = "Time elapsed: " + seconds;
}
// Inside your click handler for the start button...
// Replace "Stop Watch" in the HTML with the content of the seconds variable.
// Use setInterval() to increment the timer by 1 every second.
startButton.addEventListener("click", function(){
  console.log("start");
  countStart++;
  countPause = 0;
  if (countStart === 1)
{
  timerStart = setInterval(updateTime, 1000);}
}
)

// Inside your click handler for the reset button...
// Stop the timer using clearInterval().
// Reset the timer.
// Replace the time in your HTML with the original "Stop Watch" text.
resetButton.addEventListener("click", function(){
  console.log("reset");
  clearInterval(timerStart);
  seconds = 0;
  timerText.innerHTML = "Stop Watch"
  countPause = 0
  countStart = 0;
})

// Inside your click handler for the pause button...
// Stop -- but do not reset! -- the timer using clearInterval().
// Once again, inside your click handler for the start button...
// Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".
pauseButton.addEventListener("click", function(){
  countPause ++;
  countStart = 0;
  console.log("pause");
  if (countPause % 2 != 0)
  {
  clearInterval(timerStart);}
  else {
    timerStart = setInterval(updateTime, 1000)}
  }
)
