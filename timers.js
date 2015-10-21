var completeTimer = {

  els: {
  reset : document.getElementById('reset'),
  start : document.getElementById('start'),
  pause : document.getElementById('pause'),
  timer : document.getElementById('timer'),
},

  seconds : 0,
  songtimer: 0,




  updateTimer : function updateTimer(){
    this.seconds++;
    this.els.timer.textContent = this.seconds;
  },

  isRunning : function (){
    this.running = !this.running;
  },

  startTimer : function(){
      var running = true

      if (running){
      this.els.start.addEventListener("click", function(){
      this.els.timer.textContent = this.seconds;
      this.isRunning();
      this.songTimer = setInterval(this.updateTimer.bind(this), 1000)
    }.bind(this))
  };

      this.els.pause.addEventListener("click", function(){
      clearInterval(this.songTimer)
      this.isRunning();
    }.bind(this));

      this.els.reset.addEventListener("click", function(){
      clearInterval(this.songTimer)
      this.isRunning();
      this.seconds = 0
      this.els.timer.textContent = 'Stop Watch'
    }.bind(this));
  }
}

completeTimer.startTimer();
