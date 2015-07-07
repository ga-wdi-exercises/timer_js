

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

// ======= elements
var timer = document.getElementById("timer");
var timerText = timer.innerHTML;
var seconds = 0;

// ======= event listeners
document.getElementById('start').addEventListener('click', function () {
	console.log("-- event:click");
	updateTimer("start");
}, false);

document.getElementById('pause').addEventListener('click', function () {
	console.log("-- event:click");
	updateTimer("pause");
}, false);

document.getElementById('reset').addEventListener('click', function () {
	console.log("-- event:click");
	updateTimer("reset");
}, false);

function updateTimer(whichUpdate) {
	console.log("-- updateTimer");
	console.log("   whichUpdate: " + whichUpdate);

	switch(whichUpdate) {
		case 'start':
			console.log("   start");
			activeTimer = setInterval(function(){
				seconds = seconds + 1;
				timer.innerHTML = seconds;
			}, 1000);
			break;
		case 'pause':
			console.log("   pause");
			clearInterval(activeTimer);
			break;
		case 'reset':
			console.log("   reset");
			clearInterval(activeTimer);
			timer.innerHTML = timerText;
			seconds = 0;
			break;
	}
}


//======= cat gif example
// wrapping site in object
// var cat = {
//   name: "Frisky 'Cornelius' McWhiskertons",
//   pastimes: "chasing red dots, judging silly humans, and sitting on keyboards",
//   start: function() {
//     var self = this;
//     document.getElementById("laser_cat").addEventListener("click", function() {
//       alert("My name is " + self.name + " and I like " + self.pastimes);
//     });
//   }
// }

// cat.start();



// updateTimer