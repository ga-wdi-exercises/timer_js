var stopwatch = {
  seconds: 0,
  timerId: 0,

  jsSelector: {
    timer: document.getElementById('timer'),
    reset: document.getElementById('reset'),
    start: document.getElementById('start'),
    pause: document.getElementById('pause'),
  },

  updateTime: function updateTime() {
    var self = this;
    this.seconds++;   //not sure if 'this' or 'self' is correct
    this.jsSelector.timer.textContent = 'Time elapsed: ' + this.seconds; //pretty sure 'this' is correct and 'self' would be used outside this method...
  },

    self.jsSelector.start.addEventListener('click', function(){ //Getting "Uncaught SyntaxError: Unexpected token" error. Can't figure out why...
      console.log('start');
      self.jsSelector.timer.textContent = 'Time elapsed: ' + self.seconds;
      self.timerId = setInterval(self.updateTime)
  })

  clickHandlers: function() {
    self.jsSelector.reset.addEventListener('click', function(){
      console.log('reset');
      self.seconds = 0;
      clearInterval(self.timerId);
      self.jsSelector.timer.textContent = 'Stop Watch';
    });


  }
}

stopwatch.clickHandlers();
