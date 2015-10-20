var stopWatch = {

  // Get All DOM Elements
  resetButton: document.getElementById("reset"),
  startButton: document.getElementById("start"),
  pauseButton: document.getElementById("pause"),
  timer: document.getElementById("timer"),

  //Initialize Timer at 0
  seconds: 0,

  //Initialize timerID
  timerID: null,

  // Update Time Function
  updateTime: function () {
    stopWatch.seconds++;
    stopWatch.timer.textContent = "Time elapsed: " + stopWatch.seconds + " seconds";
  },

  listen: function() {
    // Start Button Listener
    stopWatch.startButton.addEventListener("click", function(){
      if (!stopWatch.timerID) {
        // Set Interval at which to run updateTime Function
        stopWatch.timerID = setInterval(stopWatch.updateTime, 1000);
        // Replace "Stop Watch" with timer
        stopWatch.timer.textContent = "Time elapsed: " + stopWatch.seconds + " seconds";
      }
    });

    // Pause Button Listener
    stopWatch.pauseButton.addEventListener("click", function(){
      clearInterval(stopWatch.timerID);
      stopWatch.timerID = null;
    });

    //Reset Button Listener
    stopWatch.resetButton.addEventListener("click", function() {
      // Pause timer and reset seconds to 0
      clearInterval(stopWatch.timerID);
      stopWatch.timerID = null;
      stopWatch.seconds = 0;
      // Replace timer text with "Stop Watch"
      stopWatch.timer.textContent = "Stop Watch";
    });
  }
}

stopWatch.listen();
