 var stopWatch = {
   seconds: 0,
   timerId: 0,

  buttons: {
    timer: document.getElementById('timer'),
    reset: document.getElementById('reset'),
    start: document.getElementById('start'),
    pause: document.getElementById('pause')
  },

  updateTime: function Time(){
    this.seconds += 1;
    this.buttons.timer.textContent =  this.seconds;
  },

  clickHandlers: function () {
    this.buttons.start.addEventListener("click", function() {
      this.buttons.timer.textContent = this.seconds
      this.timerId = setInterval(this.updateTime.bind(this), 1000)
    }.bind(this))

    // clearInterval(this.timerId);

    this.buttons.pause.addEventListener("click", function() {
      clearInterval(this.timerId)
    }.bind(this))

    this.buttons.reset.addEventListener("click", function() {
      clearInterval(this.timerId)
      this.buttons.timer.textContent = "Stop Watch"
    }.bind(this))

  }
}


stopWatch.clickHandlers();



//
//     this.reset.addEventListener('click',)
//     this.start.addEventListener('click')
//   }
//
//
// }
