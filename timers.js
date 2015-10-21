


  var start = document.querySelector("#start")
  var stop = document.querySelector("#stop")
  var reset = document.querySelector("#reset")
  var seconds = 0;
  var timerId = 0;

//Start Timer!!!
  var updateTime = function() {
    var timer = document.getElementById("timer");
    timer.textContent = "time elapsed" + seconds;
    console.log(seconds);
    seconds++;
  }

  var timerSet;
  var startTimer = function() {
    timerSet = setInterval(updateTime, 1000);
  }

  start.addEventListener("click", startTimer)

//Stop Timer
var stopTimer = function() {
    clearInterval()
}
  stop.addEventListener("click", stopTimer)
