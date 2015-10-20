var timer = {
  things: {
    display:document.getElementById('timer'),
    startBtn:document.getElementById('start'),
    pauseBtn:document.getElementById('pause'),
    resetBtn:document.getElementById('reset')
  },
  setup:function(){
    this.things.startBtn.addEventListener('click',function(){
      return this.startTimer();
    }.bind(this));
    this.things.pauseBtn.addEventListener('click',function(){
      return this.pauseTimer();
    }.bind(this));
    this.things.resetBtn.addEventListener('click',function(){
      return this.resetTimer();
    }.bind(this));
  },
  seconds:0,
  started: false,
  //added this ^ property to prevent extra 'start' clicks from creating multiple intervals;
  startTimer: function(){
    if (this.started === false){
      this.updateTimer();
      this.started = true;
    }
  },
  updateTimer: function(){
    this.incrementTimer();
    tick = setInterval(this.incrementTimer.bind(this),1000);
  },
  incrementTimer: function(){
    var display = this.things.display;
    display.textContent = "Time Elapsed: "+this.seconds;
    this.seconds++;
  },
  pauseTimer: function(){
    if (this.started === true){
      clearInterval(tick);
      this.started = false;
    }
  },
  resetTimer: function(){
    this.seconds = 0;
    var display = this.things.display;
    display.textContent = "Time Elapsed: "+this.seconds;
  }
}
timer.setup();
