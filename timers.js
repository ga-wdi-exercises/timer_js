reset.addEventListener("click", function(event))

start.addEventListener("click", updateTime)

pause.addEventListener("click", clearInterval(theTimer))

var updateTime = setInterval(function(){theTimer()}, 1000);
  function theTimer(){
    var startClock = new time();
    timerContent = startClock.toTimeString();
}
  timer.innerHTML = seconds;
  function startClock(){
    setInterval(updateTime, 1000)
  }
  var timerId = document.getElementById('timer')
  var seconds = 0
  var timerContent = timer.innerHTML;
}
var reset = document.getElementById("reset")
var start = document.getElementById("start")
var pause = document.getElementById("pause")
