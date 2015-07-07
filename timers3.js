

// ======= digital stopwatch ======= 

// When "Start" is clicked 
//   the text "Stop Watch" should be replaced by "Time elapsed: 0"
//   count should increment every second.

// When "Reset" is clicked
//   the text should return to "Stop Watch"

// When "Pause" is clicked
//   the text should say "Time elapsed: 1"
//   stop incrementing.

// use setInterval / clearInterval keywords

var timerApp = {

	// ======= elements
	timer: document.getElementById("timer"),
	start: document.getElementById("start"),
	pause: document.getElementById("pause"),
	reset: document.getElementById("reset"),
	timerText: this.timer.innerHTML,
	activeTimer: 0,
	seconds: 0,

	loadListeners: function() {
		console.log("loadListeners");
		console.log("this: " + this.timerText);
		var self = this;
		this.start.addEventListener("click", this.startTimer, false);
		this.pause.addEventListener("click", this.pauseTimer, false);
		this.reset.addEventListener("click", this.resetTimer, false);
	},

    updateTimer: function(whichUpdate) {
    	console.log("updateTimer");
		switch(whichUpdate) {
			case 'start':
				console.log("start");
				self.activeTimer = setInterval(function(){
					self.seconds = self.seconds + 1;
					self.timer.innerHTML = self.seconds;
				}, 1000);
				break;
			case 'pause':
				console.log("pause");
				clearInterval(self.activeTimer);
				break;
			case 'reset':
				console.log("reset");
				clearInterval(self.activeTimer);
				self.timer.innerHTML = self.timerText;
				self.seconds = 0;
				break;
		}
	},
    startTimer: function() {
    	console.log("startTimer");
    	console.log("this: " + this);
        self.updateTimer("start");
    },
    pauseTimer: function() {
    	console.log("pauseTimer");
        self.updateTimer("pause");
    },
    resetTimer: function() {
    	console.log("resetTimer");
        self.updateTimer("reset");
	}
}

timerApp.loadListeners();

