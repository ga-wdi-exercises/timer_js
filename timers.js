var stopWatch = {
  time: 0,
  timerId: null,
  elements: {
    start: document.getElementById('start'),
    pause: document.getElementById('pause'),
    reset: document.getElementById('reset'),
    timer: document.getElementsByTagName('h1')[0]
  },
  options: function(){
      this.elements.start.addEventListener("click", function(){
        if(!this.timerId) {
          this.timerId = setInterval(function() {
            this.elements.timer.innerHTML = "Time Lapsed:" + this.time;
            this.time++;
          }.bind(this), 1000);
        }
      }.bind(this))

      this.elements.pause.addEventListener("click", function(){
        this.timerId = clearInterval(this.timerId);
      }.bind(this))

      this.elements.reset.addEventListener("click", function(){
        this.elements.timer.innerHTML = "Stop Watch";
        this.time = 0;
        this.timerId = clearInterval(this.timerId);
      }.bind(this))
    }
  }
  stopWatch.options()
