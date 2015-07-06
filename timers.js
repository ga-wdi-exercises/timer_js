var buttons = document.getElementById("allButtons");

buttons.addEventListener("click", buttonClick);
var stopwatchInterval;
function buttonClick(){
  if (event.target.id == "start"){
    stopwatchInterval = setInterval(increaseStopwatch, 1000);
  } else if (event.target.id == "pause"){
    clearInterval(stopwatchInterval);
  }
}

var stopwatchValue = 0;
function increaseStopwatch(){
  stopwatchValue ++;
  return document.getElementById("timer").innerHTML = "Time elapsed: " + stopwatchValue;
}
