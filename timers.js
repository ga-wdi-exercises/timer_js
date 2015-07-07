var timer = document.getElementById("timer")
var reset = document.getElementById("reset")
var start = document.getElementById("start")
var pause = document.getElementById("pause")

reset.addEventListener("click", function(){
  seconds = 0;
  countstart = 0
  timer.innerHTML = "Stop Watch";
})

start.addEventListener("click", function(){
  countstart++
  if(countstart == 1){
    timerId = setInterval(updateTime, 1000);
  }
})

pause.addEventListener("click", function(){
  clearInterval(timerId);
  countstart = 0
})

var seconds = 0;
var timerId;
var countstart = 0

function updateTime(){
  seconds++;
  timer.innerHTML = seconds;
}
