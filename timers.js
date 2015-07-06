var resetButton = document.getElementById("reset");
var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");
//Instantiate seconds and timerId variables for your timer. The latter will make more sense after reading up on setInterval().
var seconds = 0;
var timerId;
var counter = 0;

//Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".
function updateTime() {
  seconds++;
  document.getElementById("timer").innerHTML = "Time elapsed: " + seconds;
};

startButton.addEventListener("click", function (){
  //Use setInterval() to increment the timer by 1 every second.
  //Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".
  counter++;
  if (counter === 1){
  timerId = setInterval(updateTime, 1000)
  }
});

pauseButton.addEventListener("click", function(){
  //Stop -- but do not reset! -- the timer using clearInterval().
  clearInterval(timerId);
  counter = 0;
  });

resetButton.addEventListener("click", function(){
  //Stop the timer using clearInterval().
  clearInterval(timerId);
  //Reset the timer.
  seconds = 0;
  counter = 0;
  //Replace the time in your HTML with the original "Stop Watch" text.
  document.getElementById("timer").innerHTML = "Stop Watch";
});
