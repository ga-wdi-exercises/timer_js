var resetButton = document.getElementById("reset")
var startButton = document.getElementById("start")
var pauseButton = document.getElementById("pause")

resetButton.addEventListener("click",resetButtonClick)
startButton.addEventListener("click",startButtonClick)
pauseButton.addEventListener("click",pauseButtonClick)

var seconds0 = 0
var seconds1 = 0
var minutes =0
var timerId
var h1Tag = document.getElementById('timer');

function updateTime(){
  seconds0 = seconds0+1
  if(seconds0>9){
    seconds1 += 1
    seconds0 =00
    if(seconds1>5){
      minutes+=1
      seconds0=0
      seconds1=0
    }
  }
  h1Tag.textContent = +minutes+ ":" + seconds1+seconds0
}

function resetButtonClick(){
  startButton.addEventListener("click",startButtonClick)
  timerId = window.clearInterval(timerId)
  seconds0 = 0;
  seconds1 = 0;
  minutes =0;
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
