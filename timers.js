
/**
Global vars
*/
var seconds = 0;
var timerID;
var resetButton = document.getElementById("reset");
var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");

/**
Initialize event listeners for clicks on buttons
*/
resetButton.addEventListener("click", resetFunction);
startButton.addEventListener("click", startFunction);
pauseButton.addEventListener("click", pauseFunction);

/**
Time to define these functions yo
Increments seconds counter and inserts value in <h1> element with id="timer"
*/
function updateTime(){
  seconds++;
  document.getElementById("timer").innerHTML = "Time elapsed: " + seconds;
  console.log("updated time");
}


/**
Reset function
*/
function resetFunction(){
  document.getElementById("timer").innerHTML = "Stop Watch";
  clearInterval(timerID);
  seconds = 0;
  console.log("reset");
}

/**
Start function
*/
function startFunction(){
  document.getElementById("timer").innerHTML = "Time elapsed: "+ seconds;
  //setInterval(updateTime, 1000);
  timerID = setInterval(updateTime, 1000);
  console.log("start");
}

/**
Pause function
*/
function pauseFunction(){
  document.getElementById("timer").innerHTML = "Time elapsed: " + seconds;
  clearInterval(timerID);
  console.log("pause");
}
