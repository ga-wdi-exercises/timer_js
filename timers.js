var buttons = document.getElementById("allButtons");

buttons.addEventListener("click", buttonClick);

function buttonClick(){
  if (event.target.id == "start"){
    var stopwatchInterval = window.setInterval(increaseStopwatch, 1000);
  }
}

var stopwatchValue = 0;
function increaseStopwatch(){
  stopwatchValue ++;
  return document.getElementById("timer").innerHTML = "Time elapsed: " + stopwatchValue;
}
