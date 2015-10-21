var timer = {
    seconds: 0,
    timerId: 0,

    elements: {
         timer: document.getElementById("timer"),
         reset: document.getElementById("reset"),
         start: document.getElementById("start"),
         pause: document.getElementById("pause"),
    },

    updateTime: function updateTime(){
      this.seconds++;
      this.elements.timer.textContent = 'Time elapsed: ' + this.seconds;
      },
      setupListeners: function () {
        this.elements.start.addEventListener('click', function() {
          console.log('start');
          this.elements.timer.textContent = 'Time elapsed: ' + this.seconds;
          this.timerId = setInterval(this.updateTime.bind(this), 1000);
        }.bind(this));

        this.elements.pause.addEventListener('click', function() {
          clearInterval(this.timerId);
        }.bind(this));

        this.elements.reset.addEventListener('click', function() {
          console.log('reset');
          this.seconds = 0;
          clearInterval(this.timerId);
          this.elements.timer.textContent = 'Stop Watch';
        }.bind(this));
}
}

timer.setupListeners();
