var timer = {
  //second counter
  seconds: 0,
  //id for the setInterval command later
  timerId: 0,
  //boolean to make sure we know the state of the timer
  timerRunning:  false,
  //selects reset button
  getResetButton: function(){
    var button = document.getElementById("reset");
    return button;
  },
  //selects start button
  getStartButton: function (){
    var button = document.getElementById("start");
    return button;
  },
  //selects pause button
  getPauseButton: function(){
    var button = document.getElementById("pause");
    return button;
  },
  //places the listeners
  placeListeners: function() {
    this.getStartButton().addEventListener("click", this.startTimer);
    this.getPauseButton().addEventListener("click", this.pauseTimer);
    this.getResetButton().addEventListener("click", this.resetTimer);
  },
  //resets and stops the timer
  resetTimer: function() {
      timer.seconds = 0;
      clearInterval(timer.timerId);
      document.getElementById("timer").textContent = "Stop Watch";
      timer.timerRunning = false;
  },
  //pauses the timer
  pauseTimer: function() {
    if (timer.timerRunning == true){
      clearInterval(timer.timerId);
      timer.timerRunning = false;

    }
  },
  //starts the timer
  startTimer: function(){
    if (timer.timerRunning == false){
      timer.timerId = setInterval(timer.counter.bind(this), 1000);
      timer.timerRunning = true;

    }
  },
  //changes timer textContent and increments seconds
  counter: function(){
    document.getElementById("timer").textContent = "Time Elapsed: " + timer.seconds;
    timer.seconds++;

  }
}
//initiates the timer
timer.placeListeners();
