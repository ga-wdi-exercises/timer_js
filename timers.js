console.log("script linked!");

var reset = document.getElementById("reset")
var start = document.getElementById("start")
var pause = document.getElementById("pause")

var second = 0
var timerId;

  reset.addEventListener("click",function(){
    timer.innerHTML = second;
    timerId = clearInterval()
  })
  start.addEventListener("click",function(){
    timer.innerHTML = second;
    timerId = setInterval(updateTime, 1000)
    console.log("you clicked start")
  })
  pause.addEventListener("click",function(){
    clearInterval(timerId)
  })

function updateTime(){
  second++;
timer.innerHTML = second;
}

var timer = document.getElementById("timer")
document.timerId
