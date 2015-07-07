var resetButton = document.querySelector("#reset");
var startButton = document.querySelector("#start");
var pauseButton = document.querySelector("#pause");
var timerMorph = document.querySelector("#timer"); //this id will change the stopwatch text

var seconds = 0;

resetButton.addEventListener("click", resetButtonChosen);
startButton.addEventListener("click", startButtonChosen);
pauseButton.addEventListener("click", pauseButtonChosen);

function resetButtonChosen() {
  console.log("Reset got clicked!");
  }
function startButtonChosen() {
    console.log("Start got clicked!");
  }
function pauseButtonChosen() {
    console.log("Pause got clicked!");
  }


// window.setInterval();
// window.clearInterval();
