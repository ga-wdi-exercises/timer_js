var timer = {
  reset : document.querySelector('#reset'),
  start : document.querySelector('#start'),
  pause : document.querySelector('#pause'),
  time : [0, 0, 0],
  timerID: null,
  updateTime : function(time){
    var time = timer.time;
      time[0]++;
      if (time[0] == 60){
        time[0] = 0;
        time[1]++;
      }
      if (time[1] == 60){
        time[1] = 0;
        time[2]++;
      }
      for (var i =0; i<time.length; i++){

      }
      document.querySelector('#timer').textContent = "Time elapsed: " + time[2]+":"+time[1]+":"+time[0];
  },
  timerOperations: function(){
    var self = this;
    var startTimer = function(){
      self.timerID = setInterval(self.updateTime, 1000);
      self.start.removeEventListener("click", startTimer);
    }

    self.start.addEventListener("click", startTimer);

    self.pause.addEventListener("click", function(){
      clearInterval(self.timerID);
      self.start.addEventListener("click", startTimer);
    });

    reset.addEventListener("click", function(){
      clearInterval(self.timerID);
      self.time = [0, 0, 0];
      document.querySelector('#timer').textContent = "Stop Watch";
      start.addEventListener("click", startTimer);
    });
  }
}

timer.timerOperations();
