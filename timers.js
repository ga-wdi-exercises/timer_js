
var timer = {
  seconds: 0,
  timerId: 0,
  timerRunning:  false,
  getResetButton: function(){
    var button = document.getElementById("reset");
    return button;
  },
  getStartButton: function (){
    var button = document.getElementById("start");
    return button;
  },
  getPauseButton: function(){
    var button = document.getElementById("pause");
    return button;
  },
  placeListeners: function() {
    this.getStartButton().addEventListener("click", this.startTimer);
    this.getPauseButton().addEventListener("click", this.pauseTimer);
    this.getResetButton().addEventListener("click", this.resetTimer);
    //var self = this;


  },
  resetTimer: function() {
      timer.seconds = 0;
      clearInterval(timer.timerId);
      document.getElementById("timer").textContent = "Stop Watch";
      timer.timerRunning = false;

  },
  pauseTimer: function() {
    if (timer.timerRunning == true){
      clearInterval(timer.timerId);
      timer.timerRunning = false;

    }
  },
  startTimer: function(){
    if (timer.timerRunning == false){
      timer.timerId = setInterval(timer.counter, 1000);
      timer.timerRunning = true;

    }
  },
  counter: function(){
    document.getElementById("timer").textContent = "Time Elapsed: " + timer.seconds;
    timer.seconds++;

  }
}
timer.placeListeners();
