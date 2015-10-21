var timer = {
  seconds: 0,
  running: 0,
  updateTime: function(){
    if(timer.running === 0){
      function addSec(){
          timer.seconds++;
          document.getElementById('timer').textContent = "Time elapsed: " + timer.seconds + " seconds";
        }
      set = setInterval(addSec, 1000);
      timer.running = 1;
  }
  },
  pause: function(){
    window.clearInterval(set);
    timer.running = 0;
    document.getElementById('timer').textContent = "Time elapsed: 1";
  },
  reset: function(){
    window.clearInterval(set);
    timer.seconds = 0;
    timer.running = 0;
    document.getElementById('timer').textContent = "Stop Watch"
  },
  functionality: function(){
    document.getElementById('reset').addEventListener('click', this.reset);
    document.getElementById('start').addEventListener('click', this.updateTime);
    document.getElementById('pause').addEventListener('click', this.pause);
  }

}

timer.functionality();
