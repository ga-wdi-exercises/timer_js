var resetButton = document.getElementById("reset")
var startButton = document.getElementById("start")
var pauseButton = document.getElementById("pause")

resetButton.addEventListener("click",resetButtonClick)
startButton.addEventListener("click",startButtonClick)
pauseButton.addEventListener("click",pauseButtonClick)

var seconds = 0
var timerId
var h1Tag = document.getElementById('timer');

function updateTime(){
  seconds = seconds+1
  h1Tag.textContent = seconds
}

function resetButtonClick(){
  startButton.addEventListener("click",startButtonClick)
  timerId = window.clearInterval(timerId)
  seconds = 0;
  h1Tag.textContent = "Stop Watch"
}

function startButtonClick(){
  startButton.removeEventListener("click",startButtonClick)
  timerId = window.setInterval(updateTime,1000)
  //add a remove event listener here to avoid adding multiple events of the stopwatch starting
}
function pauseButtonClick(){
  startButton.addEventListener("click",startButtonClick)
  timerId = window.clearInterval(timerId)
}
