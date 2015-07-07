var reset = document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var seconds = 0;
var timerId;
var timer = document.getElementById('timer');

start.addEventListener("click", function (){
  console.log("Start")
  timer.innerHTML = seconds
  timerId = window.setInterval(updateTime, 1000);
  // pause.timer starts back up
})

pause.addEventListener("click", function (){
  console.log("Pause")
  window.clearInterval(timerId)
})

reset.addEventListener("click", function (){
  console.log("Reset")
  window.clearInterval(timerId)
  seconds = 0;
  timer.innerHTML = "StopWatch"
})

function updateTime() {
  seconds++
  timer.innerHTML = seconds
}
