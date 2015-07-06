var timer = {
  stopwatchInterval: 0,
  stopwatchValue: 0,

  buttons: {
    timer: document.getElementById("timer"),
    start: document.getElementById("start"),
    pause: document.getElementById("pause"),
    reset: document.getElementById("reset")
  },

  increaseStopwatch: function increaseStopwatch(){
    this.stopwatchValue++;
    this.buttons.timer.innerHTML = "Time elapsed: " + this.stopwatchValue;
  },

  startListeners: function startListeners(){
    this.buttons.start.addEventListener("click", function(){
      this.stopwatchInterval = setInterval(this.increaseStopwatch.bind(this), 1000);
    }.bind(this));
  }
}

timer.startListeners();




/*
This section works but wanted to try the bonus using one object timer{}
var buttons = document.getElementById("allButtons");

buttons.addEventListener("click", buttonClick);
var stopwatchInterval;
var startCount = 0;
function buttonClick(){
  if (event.target.id == "start"){
    if (startCount === 0){
          stopwatchInterval = setInterval(increaseStopwatch, 1000);
    }
  } else if (event.target.id == "pause"){
    clearInterval(stopwatchInterval);
    startCount = 0;
  } else if (event.target.id == "reset"){
    clearInterval(stopwatchInterval);
    stopwatchValue = 0;
    startCount = 0;
    document.getElementById("timer").innerHTML = "Stop Watch";
  }
}

var stopwatchValue = 0;
function increaseStopwatch(){
  stopwatchValue ++;
  return document.getElementById("timer").innerHTML = "Time elapsed: " + stopwatchValue;
}*/
