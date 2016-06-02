var timer = { // Associative arrqy defining the timer.
  seconds: 0, // Initialiae the timer
  timerId: 0,

  els: { // Link the buttons and the overall document to their associated js functions
    timer: document.getElementById("timer"),
    reset: document.getElementById("reset"),
    start: document.getElementById("start"),
    pause: document.getElementById("pause"),
  },

  updateTime: function updateTime(){ // Update the timer by one second and
                                     // change the display. Does NOT monitor
                                     // the passage of time.
    this.seconds++;
    this.els.timer.textContent = 'Time elapsed: ' + this.seconds;
  },

  setupListeners: function () { // Definer all of the listeners

    this.els.start.addEventListener('click', function() {
    // Listen for a click of the start button
    // It's really a start or a restart
      console.log('start');

      // Display the current value of the timer.
      this.els.timer.textContent = 'Time elapsed: ' + this.seconds;

      // Start updating the timer every 1000 milliseconds (every second)
      this.timerId = setInterval(this.updateTime.bind(this), 1000);
    }.bind(this));

    this.els.pause.addEventListener('click', function() {
      // Listen for the pause button.

      // Stop updating the timer
      clearInterval(this.timerId);
    }.bind(this));

    this.els.reset.addEventListener('click', function() {
      // Listen for the reset button
      console.log('reset');

      // Set the value of the timer back to zero
      this.seconds = 0;

      // Stop updating the timer
      clearInterval(this.timerId);
      this.els.timer.textContent = 'Stop Watch';
    }.bind(this));
  }
}

timer.setupListeners();
