// Get All DOM Elements
var reset = document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var timer = document.getElementById("timer");

// Initialize Timer at 0
var seconds = 0;

// Initialize timerID
var timerID;

// Update Time Function
var updateTime = function () {
  seconds++;
  timer.textContent = seconds;
}

//Reset Button Listener
reset.addEventListener("click", function() {
  // Pause timer and reset seconds to 0
  clearInterval(timerID);
  seconds = 0;
  // Replace timer text with "Stop Watch"
  timer.textContent = "Stop Watch";
});

// Start Button Listener
start.addEventListener("click", function(){
  // Set Interval at which to run updateTime Function
  timerID = setInterval(updateTime, 1000);
  // Replace "Stop Watch" with timer
  timer.textContent = seconds;
});

// Pause Button Listener
pause.addEventListener("click", function(){
  clearInterval(timerID);
});
