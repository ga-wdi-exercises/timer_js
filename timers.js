var timer = {
  "reset": document.getElementById("reset"),
  "start": document.getElementById("start"),
  "pause": document.getElementById("pause"),
  "watch": document.getElementById("timer"),
  "seconds":  0,
  "newTimer": null,
  "started": false,
  "run": function() {
    var self = this;
    self.reset.addEventListener("click", function() {
      clearInterval(self.newTimer);
      self.seconds = 0;
      self.watch.innerHTML = "Stop Watch";
      self.started = false;
    });
    self.start.addEventListener("click", function() {
      if (!self.started){
        self.watch.innerHTML = "Time elapsed: " + self.seconds;
        self.newTimer = setInterval(function() {
          self.seconds += 1;
          self.watch.innerHTML = "Time elapsed: " + self.seconds;
          }, 1000);
        self.started = true;
      }
    });
    self.pause.addEventListener("click", function() {
      clearInterval(self.newTimer);
      self.started = false;
    });
  }
}
timer.run();
