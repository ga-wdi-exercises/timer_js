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
    var self = this;
    this.getStartButton().addEventListener("click", function(){
      if (self.timerRunning == false){
        self.timerId = setInterval(self.counter, 1000);
        self.timerRunning = true;
      }
    });

    this.getPauseButton().addEventListener("click", function() {
      if (self.timerRunning == true){
        clearInterval(self.timerId);
        self.timerRunning = false;

      }
    });
    this.getResetButton().addEventListener("click", function() {
        self.seconds = 0;
        clearInterval(self.timerId);
        document.getElementById("timer").textContent = "Stop Watch";
        self.timerRunning = false;
    });
  },
  counter: function(){
    document.getElementById("timer").textContent = "Time Elapsed: " + timer.seconds;
    timer.seconds++;

  }
}
timer.placeListeners();
