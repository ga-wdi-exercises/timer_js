var timer = {
  seconds: 1,
  timerID: null,
  elements: {
    start: document.getElementById("start"),
    reset: document.getElementById("reset"),
    pause: document.getElementById("pause"),
    watch: document.getElementById("timer")
  },
  listen: function() { // these really execute the code

        this.elements.start.addEventListener("click", this.functions.handleStart);
        this.elements.reset.addEventListener("click", this.functions.handleReset);
        this.elements.pause.addEventListener("click", this.functions.handlePause);

      },
  functions: { // how do you use this in the sction below.
    handleStart: function () {
              if (!timer.timerID) {
                timer.timerID = setInterval(timer.functions.updateTime, 1000);
                }
              },
    handleReset: function () {
          timer.timerID = clearInterval(timer.timerID);
          timer.seconds = 0;
          timer.elements.watch.innerHTML = "Stop Watch";
        },
    handlePause: function () {
           timer.timerID = clearInterval(timer.timerID);
         },
    updateTime: function () {
          timer.elements.watch.innerHTML = "Time elapsed: " + timer.seconds;
          timer.seconds += 1;
        }
    }
};
timer.listen();
