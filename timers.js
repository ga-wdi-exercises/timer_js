var timeDisplay = document.getElementById('timer');
var startBtn = document.getElementById('start');
var pauseBtn = document.getElementById('pause');
var resetBtn = document.getElementById('reset');

var timer = {
  // setup:function(){
  //   timeDisplay = document.getElementById('timer');
  //   var startBtn = document.getElementById('start');
  //   var pauseBtn = document.getElementById('pause');
  //   var resetBtn = document.getElementById('reset');
  //   startBtn.addEventListener('click',function(){
  //     return this.startTimer();
  //   }.bind(this));
  //   pauseBtn.addEventListener('click',function(){
  //     return this.pauseTimer();
  //   }.bind(this));
  //   resetBtn.addEventListener('click',function(){
  //     return this.resetTimer();
  //   }.bind(this));
  // },
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
    timeDisplay.textContent = "Time Elapsed: "+this.seconds;
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
    timeDisplay.textContent = "Time Elapsed: "+this.seconds;
  }
}

startBtn.addEventListener('click',function(){
  return timer.startTimer();
});
pauseBtn.addEventListener('click',function(){
  return timer.pauseTimer();
});
resetBtn.addEventListener('click',function(){
  return timer.resetTimer();
});
