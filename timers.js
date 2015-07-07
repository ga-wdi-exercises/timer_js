var editTimer = document.getElementById("timer");
var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");
var pauseButton = document.getElementById("pause");
var startSetInterval;
var startingStopWatchNumber = 0;
startingStopWatchNumber.toFixed(2);
var pauseClicks = 1;
startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", stopTimer);
pauseButton.addEventListener("click", pauseTimer);
function startTimer() {
  if(startingStopWatchNumber !== 0) {
    clearInterval(timerId);
    timerId = setInterval(timerIncreaseByOne, 100);
    pauseClicks = 1;
  }
  else{
    pauseClicks = 1;
    timerId = setInterval(timerIncreaseByOne, 100);
  }
};
function timerIncreaseByOne(){
  var newNumber = startingStopWatchNumber = startingStopWatchNumber + 0.1;
  var twoDigitNumber = newNumber.toFixed(1);
  editTimer.innerHTML = twoDigitNumber + " Seconds";

}
function stopTimer() {
  if(startingStopWatchNumber === 0) {
    console.log("user tried to reset watch prior to start");
  }
  else{
    startButton.removeEventListener("click", startTimer);
    clearInterval(timerId);
    editTimer.innerHTML = "Stop Watch";
    startButton.addEventListener("click", startTimer);
    startingStopWatchNumber = 0;
  }
}
function pauseTimer() {
  pauseClicks++;
  if(startingStopWatchNumber === 0) {
    console.log("user tried to start watch with pause");
  }
  else if(pauseClicks % 2 === 0){
    startButton.removeEventListener("click", startTimer);
    clearInterval(timerId);
    startButton.addEventListener("click", startTimer);
  }
  else {
    timerId = setInterval(timerIncreaseByOne, 100);
  }
}
