// create JS selectors that target each of timer buttons

var resetButton = document.getElementById("reset");
var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");
var timer = document.getElementById("timer");

// create click handler for each of the timer buttons
resetButton.addEventListener("click", resetTheTimer)
startButton.addEventListener("click", startTheTimer)
pauseButton.addEventListener("click", pauseTheTimer)

// instantiate 'seconds' and 'timerId' variables
var timerId;
var seconds = 0;

// create 'updateTime()'function that increments the 'seconds'
// insert that value to the <h1> with 'id="timer"'
function updateTime(){
  seconds++;
  timer.innerHTML = seconds;
}

//use setInterval() to increment the timer by 1 seconds
function startTheTimer(){
  timerId = setInterval(updateTime, 1000);
}

// use cleanrInterval() to stop
function pauseTheTimer(){
  clearInterval(timerId);
}

// use clearInterval() to reset
// replace the time with "Stop Watch" text
function resetTheTimer(){
  clearInterval(timerId);
  seconds = 0;
  timer.innerHTML = ("Stop Watch");
}
