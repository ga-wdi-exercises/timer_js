var timerGlobal = {
  seconds: 0,
  timerId: 0,
  tracking: 0,

  timer: document.querySelector("#timer"),
  reset: document.querySelector("#reset"),
  start: document.querySelector("#start"),
  pause: document.querySelector("#pause"),

  updateTime: function updateTime() {
    timerGlobal.tracking = 0;
    timerGlobal.seconds++;
    console.log(timerGlobal.seconds);
    timerGlobal.timer.textContent = "Time passed: " + timerGlobal.seconds;
    timerGlobal.tracking = 1;
  },
  resetEvent: function() {
    clearInterval(timerGlobal.timerId);
    timerGlobal.seconds = 0;
    timerGlobal.timer.textContent = "Stop Watch";
    //for testing
    console.log("reset");
    document.body.style.backgroundColor = "yellow";
    timerGlobal.tracking = 0;
  },
  startEvent: function() {
    if (timerGlobal.tracking === 0) {
      timerGlobal.timerId = setInterval(timerGlobal.updateTime, 1000);
    } else {
    }
    //for testing
    console.log("start");
    document.body.style.backgroundColor = "red";
  },
  pauseEvent: function() {
    clearInterval(timerGlobal.timerId);
    //for testing
    console.log("pause");
    document.body.style.backgroundColor = "white";
    timerGlobal.tracking = 0;
  },

  listenSet: function() {
    updateListener = this.timer.addEventListener("click", this.updateTime);
    resetListener = this.reset.addEventListener("click", this.resetEvent);
    startListener = this.start.addEventListener("click", this.startEvent);
    pauseListener = this.pause.addEventListener("click", this.pauseEvent);
  },
};

timerGlobal.listenSet();



// I started using timerGlobal.xxx in a lot of places where I think I should
// have been using this.xxx. But this.xxx just isn't working for whatever reason
// in a few places. How to avoid? Any good reading? Just review the lesson plan?
// I feel like it's not clicking like it should.

//also i know the boolean logic is slightly faulty (if start is hit again before
//the 1000ms elapse, then more events trigger)
