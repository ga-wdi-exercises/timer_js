var timer = {
  display:function(){
    return document.getElementById('timer');
  },
  setup:function(){
    var startBtn = document.getElementById('start');
    var pauseBtn = document.getElementById('pause');
    var resetBtn = document.getElementById('reset');

    startBtn.addEventListener('click',function(){
      return timer.startTimer();
    });
    pauseBtn.addEventListener('click',function(){
      return timer.pauseTimer();
    });
    resetBtn.addEventListener('click',function(){
      return timer.resetTimer();
    });
  }(),
  seconds:0,
  started: false,
  //added this ^ property to prevent extra 'start' clicks from creating interval inside interval;
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
    var display = this.display();
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
    var display = this.display();
    display.textContent = "Time Elapsed: "+this.seconds;
  }
}
