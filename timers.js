// Create Javascript selectors that target each of the timer buttons.
var resetButton = document.getElementById("reset")
var startButton = document.getElementById("start")
var pauseButton = document.getElementById("pause")

// Instantiate seconds and timerId variables for your timer.
var seconds = 0;
var timerId;
var started = false;

// Create click handlers for each of the timer buttons.
reset.addEventListener("click", resetTimer);
start.addEventListener("click", startTimer);
pause.addEventListener("click", stopTimer);

// Create Functions to resetTimer, startTimer and stopTimer.
function resetTimer(){
  window.clearInterval(timerId); // Stop the timer using clearInterval().
  seconds = 0; // Resets timer to 0 seconds.
  document.getElementById("timer").innerHTML= "Stop Watch"; // Shows Reset value as "Stop Watch".
  started = false; // Allows timer to start again.
}

function startTimer(){
  if (!started){
  timerId = setInterval("updateTime()", 1000); // Use setInterval() to increment the timer by 1 every second.
  started = true; // Tells timer not to speed up if clicked again.
  // Replace "Stop Watch" in the HTML with the content of the seconds variable.
  // Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".
  }
}

function stopTimer(){
  window.clearInterval(timerId); // Stop -- but do not reset! -- the timer using clearInterval().
}

// Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".
function updateTime(){
	seconds++;
	document.getElementById("timer").innerHTML = seconds;
}
