var resetButton = document.getElementById("reset")
resetButton.addEventListener("click", function() {
  console.log("clickclick");
});

var startButton = document.getElementById("start")
startButton.addEventListener("click", function () {
  seconds ++;
  var bigTimer = document.getElementById("timer");
  bigTimer.innerHTML = seconds;
});

var pauseButton = document.getElementById("pause")
pauseButton.addEventListener("click", function() {
  pauseButton.clearInterval(updateTime)
});
//this is not going well. I need to understand the big picture
//var timerId = setInterval(updateTime, 1000)
//var seconds = setInterval(updateTime, 1000)
