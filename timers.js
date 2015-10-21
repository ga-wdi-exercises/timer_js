var timer = {
  seconds: 0,
  timerId: 0,

  reset: document.querySelector("#reset"),
  start: document.querySelector("#start"),
  pause: document.querySelector("#pause"),

  // increment seconds
  // insert into h1 element w/ id=timer
  updateTime: function updateTime() {
    timer.seconds ++;
    console.log(timer.seconds);
  },
  resetEvent: function() {
    document.body.style.backgroundColor = "yellow";
  },
  startEvent: function() {
    document.body.style.backgroundColor = "red";
  },
  pauseEvent: function() {
    document.body.style.backgroundColor = "white";
  },

  listenSet: function() {
    updateListener = this.reset.addEventListener("click", this.updateTime);
    resetListener = this.reset.addEventListener("click", this.resetEvent);
    startListener = this.start.addEventListener("click", this.startEvent);
    pauseListener = this.pause.addEventListener("click", this.pauseEvent);
  },
};

timer.listenSet();
// console.log(timer.seconds);
