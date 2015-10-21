var resetButton = document.getElementById("reset");
var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");

// does document.getElementById("timer").innerHTML = "Time elapsed: "; go in the var seconds? or in var updateTime?
  var seconds

  var timerId



resetButton.addEventListener("click", )
startButton.addEventListener("click", startTiming)
pauseButton.addEventListener("click", stopTiming)




var time;
var timingFunction;

var startTiming = function(){
  timingFunction = setInterval(updateTime, 1000);
}

var updateTime = function(){
  time = time + 1;
  display.value = time;
  document.getElementById("timer").innerHTML = "Time elapsed: ";
}

var stopTiming = function(){
  clearInterval(timingFunction);
}

var resetTiming = function(){

}
