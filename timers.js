function makeTimer (timerDiv) {

  return {
    els: {
      reset: timerDiv.find(".reset"),
      start: timerDiv.find(".start"),
      pause: timerDiv.find(".pause"),
      timer: timerDiv.find(".timer")
    },

    seconds: 0,
    timerId: null,

    init: function () {
      this.els.start.on("click", this.start.bind(this) );
      this.els.pause.on("click", this.pause.bind(this) );
      this.els.reset.on("click", this.reset.bind(this) );
    },

    start: function (){
      this.els.timer.text(this.seconds);
      this.timerId = setInterval(this.updateTime.bind(this), 1000);
    },

    pause: function (){
      clearInterval(this.timerId)
    },

    reset: function (){
      clearInterval(this.timerId)
      this.seconds = 0;
      this.els.timer.text("StopWatch");
    },

    updateTime: function () {
      this.seconds++;
      this.els.timer.text(this.seconds);
    }
  };
}

$(document).ready(function() {
  timerObj1 = makeTimer($('#timer1'));
  timerObj2 = makeTimer($('#timer2'));
  timerObj1.init();
  timerObj2.init();
});
