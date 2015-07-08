var timer = {
	seconds: 0,
	timerId: 0,
	elements: {
		timer: document.getElementById("timer"),
		start: document.getElementById("start"),
		pause: document.getElementById("pause"),
		reset: document.getElementById("reset"),
	},
		listeners: function() {

		this.elements.start.addEventListener("click", function() {
			this.elements.timer.innerHTML = "Time elapsed: " + this.seconds;
			this.timerId = setInterval(this.updateTime.bind(this), 1000);
		}.bind(this)),

		this.elements.pause.addEventListener("click", function() {
			clearInterval(this.timerId);
		}.bind(this))

		this.elements.reset.addEventListener("click", function() {
			this.seconds = 0;
			clearInterval(this.timerId);
			this.elements.timer.innerHTML = "Stop Watch";
		}.bind(this));
	},

	updateTime: function updateTime() {
		this.seconds++;
		this.elements.timer.innerHTML = "Time elapsed: " + this.seconds;
	},
}

timer.listeners(); 