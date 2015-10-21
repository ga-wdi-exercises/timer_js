var timer = {
  reset: document.querySelector("#reset"),
  start: document.querySelector("#start"),
  pause: document.querySelector("#pause"),
  seconds: 0,
  timerHeader: document.getElementById("timer"),
  intervalID: true,
  updateTime: function() {
    timer.seconds++;
    timer.timerHeader.innerText = timer.seconds;
  },
  startTimer: function() {
    timer.start.addEventListener("click", function() {
      timer.updateTime();
      timer.timerHeader.innerText = timer.seconds;
      timer.intervalID = setInterval(timer.updateTime, 1000);
      return timer.intervalID;
    })
  },
  pauseTimer: function() {
    timer.pause.addEventListener("click", function() {
      timer.seconds = timer.timerHeader.innerText;
      clearInterval(timer.intervalID);
      return timer.seconds;
    })
  },
  resetTimer: function() {
    reset.addEventListener("click", function() {
      timer.seconds = 0;
      timer.timerHeader.innerText = "Stop Watch";
      clearInterval(timer.intervalID);
    })
  }
}

timer.startTimer();
timer.pauseTimer();
timer.resetTimer();
