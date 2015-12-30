var timer =  {
  seconds: 0,
  timerId: 0,

  els: {
    timer: document.getElementById("timer"),
    reset: document.getElementById("reset"),
    start: document.getElementById("start"),
    pause: document.getElementById("pause"),
  },

updateTime: function updateTimer() {
  this.seconds++;
  this.els.timer.textContent = 'Time elapsed: ' + this.seconds;
},

setupListeners: function () {
  this.els.start.addEventListener('click', function() {

    this.els.timer.textContent = 'Time Elapsed: ' + this.seconds;
    this.timerId = setInterval(this.updateTime.bind(this), 1000);
  }.bind(this));

  this.els.pause.addEventListener('click', function () {
    clearInterval(this.timerId);
  }.bind(this));

  this.els.reset.addEventListener('click', function() {

    this.seconds = 0;
    clearInterval(this.timerId);
    this.els.timer.textContent = 'Stop Watch';
  }.bind(this));
}
};

timer.setupListeners();
