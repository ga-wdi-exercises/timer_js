var timer =  {
  seconds: 0,
  timerId: 0,

  els: {
    timer: document.getElementById("timer"),
    reset: document.getElementById("reset"),
    start: document.getElementById("start"),
    pause: document.getElementById("pause"),
  },

updateTime: function() {
  this.seconds++;
  this.els.timer.textContent = 'Time elapsed: ' + this.seconds;
},


};
