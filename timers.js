var resetButton = document.getElementById("reset");
var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");
var timerSpace = document.getElementById("timer");

var count = 0;
var countId;

startButton.addEventListener("click", function() {
    countId = setInterval(function (){
    count++;
    console.log(count);
    timerSpace.innerHTML = "Time elapsed: " + count;
    }, 1000);
})

resetButton.addEventListener("click", function() {
  clearInterval(countId);
  console.log(count);
  timerSpace.innerHTML = "Stopwatch";
  console.log("a click occurred on the reset button");
})

pauseButton.addEventListener("click", function() {
  clearInterval(countId);
  console.log("a click occurred on the pause button");
})
