//Create Javascript selectors that target each of the timer buttons.
var resetButton = document.getElementById("reset");
var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");
//Instantiate seconds and timerId variables for your timer. The latter will make more sense after reading up on setInterval().
var seconds = 0;
var timerId

//Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".
function updateTime() {
  seconds++;
  document.getElementById("timer").innerHTML = "Time elapsed: " + seconds;
};

//Replace "Stop Watch" in the HTML with the content of the seconds variable.
//Use setInterval() to increment the timer by 1 every second.
startButton.addEventListener("click", function (){
  timerId = setInterval(updateTime, 1000)
  //Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".
});

pauseButton.addEventListener("click", function(){
  //Stop -- but do not reset! -- the timer using clearInterval().
  clearInterval(timerId);
  });

resetButton.addEventListener("click", function(){
  //Stop the timer using clearInterval().
  clearInterval(timerId);
  //Reset the timer.
  seconds = 0;
  //Replace the time in your HTML with the original "Stop Watch" text.
  document.getElementById("timer").innerHTML = "Stop Watch";
});
