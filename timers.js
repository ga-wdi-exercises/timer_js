var timer = {
  seconds: 0,
  timerId: 0,
  hasStarted: false,

  els: {
    timer: $("#timer"),
    reset: $("#reset"),
    start: $("#start"),
    pause: $("#pause"),
  },

  updateTime: function updateTime(){
    this.seconds++;
    this.els.timer.text('Time elapsed: ' + this.seconds);
  },

  setupListeners: function () {
    this.els.start.on('click', function() {
      console.log('start');
      this.els.timer.text('Time elapsed: ' + this.seconds);
      if (this.hasStarted === false){
        this.timerId = setInterval(this.updateTime.bind(this), 1000);
        this.hasStarted = true;
      }
    }.bind(this));

    this.els.pause.on('click', function() {
      clearInterval(this.timerId);
      this.hasStarted = false;
    }.bind(this));

    this.els.reset.on('click', function() {
      this.seconds = 0;
      console.log('reset ' + this.seconds);
      clearInterval(this.timerId);
      this.hasStarted = false;
      this.els.timer.text('Stop Watch');
    }.bind(this));
  }
}

timer.setupListeners();
