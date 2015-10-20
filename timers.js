var timer = {
  start:  document.getElementById('start'),
  reset:  document.getElementById('reset'),
  stop:   document.getElementById('start'),
  pause:  document.getElementById('pause'),
  timerElement:  document.getElementById('timer'),
  seconds: 0,
  timerID: 0,

  changeName: function(){
    this.start.textContent = "Stop";
  },
  changeBack: function (){
    this.start.textContent = "Start";
  },
  clickStart: function (){
    this.start.addEventListener("click", function(){
          if (timer.start.textContent === "Start"){
            timer.timerID = setInterval(function(){
              timer.seconds ++;
              timer.timerElement.innerHTML = "Time Lapsed: " + timer.seconds + "s";
            },1000);
            timer.changeName();
          }
          else if (timer.start.textContent === "Stop"){
            clearInterval(timer.timerID);
            timer.timerElement.innerHTML = "You logged: " + timer.seconds + "s";
            timer.changeBack();
          }
    });
  },

  resetClock: function() {
      this.reset.addEventListener("click", function() {
        clearInterval(timer.timerID);
        timer.seconds = 0;
        timer.timerID = 0;
        timer.timerElement.innerHTML = "Stop Watch";
        timer.changeBack();
    });
  },

  pauseClock: function() {
    this.pause.addEventListener("click", function() {
      clearInterval(timer.timerID);
      timer.timerElement.innerHTML = "Time Lapsed: " + timer.seconds + "s";
      timer.changeBack();
    });
  }
};

timer.clickStart();
timer.pauseClock();
timer.resetClock();
