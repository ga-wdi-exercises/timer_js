var start = document.getElementById("start")
var pause = document.getElementById("pause")
var reset = document.getElementById("reset")
var seconds= 0

start.addEventListener("click", function(){
  var timer= setInterval(function (){seconds++;
  document.getElementById("timer").innerHTML = "Time Elapsed: " + seconds;}, 1000)
  pause.addEventListener("click", function(){
  clearInterval(timer)
  reset.addEventListener("click", function(){
  clearInterval(timer)
  seconds = 0
  document.getElementById("timer").innerHTML = "Stop Watch"
    })
  })
})
