var seconds = 0

var timerId;

var startButton = document.getElementById("start")
var resetButton = document.getElementById("reset")
var pauseButton = document.getElementById("pause")
function updateTime(){
seconds++
document.getElementById("timer").innerHTML=seconds
}
startButton.addEventListener("click", function(){
  updateTime()
  timerId = setInterval(updateTime,1000)
})
resetButton.addEventListener("click", function(){
  clearInterval()
})
pauseButton.addEventListener("click", function(){
  clearInterval(timerId)
})
