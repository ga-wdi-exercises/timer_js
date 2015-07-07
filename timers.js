

// ======= digital stopwatch ======= 

// use recently slacked link

// When "Start" is clicked 
//   the text "Stop Watch" should be replaced by "Time elapsed: 0"
//   count should increment every second.

// When "Reset" is clicked
//   the text should return to "Stop Watch"

// When "Pause" is clicked
//   the text should say "Time elapsed: 1"
//   stop incrementing.

// use setInterval / clearInterval keywords

var button = document.body;

// var button = document.querySelector("button")
// button.onclick = handleEvent;			


// ======= elements
var timer = document.getElementById("timer");
var controls = document.getElementById("controls");
var reset = document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");

// document.addEventListener("click", updateTimer)

var timerApp = {
	init: function() {
		console.log("-- init");
		document.getElementById("start").addEventListener("click", function() {
			console.log("start_anon_func");;
		});
	},
	updateTimer: function(eventName, whichUpdate) {
		console.log("-- updateTimer");
		// defines a new property key of app object
		// sets key value as the passed function
		timerApp[eventName] = whichUpdate;		
	},
	callUpdate: function(eventName) {
		console.log("-- callUpdate");
		timerApp[eventName](eventName);					// invokes the recently-defined function
	},
}
timerApp.updateTimer("start", startTimer);
timerApp.updateTimer("stop", stopTimer);
timerApp.updateTimer("reset", resetTimer);

timerApp.callUpdate("start");
timerApp.callUpdate("stop");
timerApp.callUpdate("reset");

function startTimer(eventName) {
	console.log("-- startTimer");
	console.log("eventName: " + eventName);
}

timerApp.init();


// for (i = 0; i < annotateArray.length; i++) {
//     //To Remember the state of value "i"
//     (function (i) {
//         // Custom Event Listener for fallback for IE
//         util.addEvent(annotateArray[i], "click", function() {animateFunction(i)}, true);
//     }(i));
// }


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