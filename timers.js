// Add text information.
// var timerText = document.getElementById("timer");

// // Add button control variables
// var timerReset = document.getElementById("reset");
// var timerStart = document.getElementById("start");
// var timerPause = document.getElementById("pause");

// Add event listeners to the variables.
// timerText.addEventListener("click", changeText); // Remove click.
// timerPause.addEventListener("click", pauseTimer);
// timerReset.addEventListener("click", resetTimer);
// timerStart.addEventListener("click", startTimer);

// Add functions for the variables.
// function changeText() {
// 	document.getElementById("timer")...;
// 	console.log("")
// }

// function resetTimer() {
// 	document.getElementById("reset")...;
// 	console.log("")
// }

// function startTimer() {
// 	document.getElementById("start")...;
// 	console.log("")
// }

// function pauseTimer() {
// 	document.getElementById("pause")...;
// 	console.log("")
// }


// REFACTORING!!

var timerText = document.getElementById("timer");
var timerReset = document.getElementById("reset");
var timerStart = document.getElementById("start");
var timerPause = document.getElementById("pause");

var timerId;
var seconds = 0;

function timerTitle() { // I had help with this part.
	seconds++;
	timer.innerHTML = "Time elapsed: " + seconds;
} 

// Take the variables above and addEventListener to create a function.
timerStart.addEventListener("click", function() {
	console.log("Start the timer.");
	timer.innerHTML = "Time elapsed: " + seconds; // Change the text to "Time elapsed".
	timerId = setInterval(timerTitle, 1000); // 1000 mil = 1 sec
})

timerPause.addEventListener("click", function() {
	clearInterval(timerId);
})

timerReset.addEventListener("click", function() {
	clearInterval(timerId);
	timer.innerHTML = "Stop watch"; // Change back to "Stop watch".
})

// Create Javascript selectors that target each of the timer buttons.
// var timer = { // Create an unordered list of objects.
// 	// timerTitle: document.getElementById("timer"),
// 	// timerReset: document.getElementById("reset"),
// 	// timerStart: document.getElementById("start"),
// 	// timerPause: document.getElementById("pause")

// 	// Create click handlers (empty, for now) for each of the timer buttons.
// 	timerPause.addEventListener("click", resetTimer);
// 	timerStart.addEventListener("click", startTimer);
// 	timerPause.addEventListener("click", pauseTimer);

// 	// Instantiate seconds and timerId variables for your timer. 
// 	// The latter will make more sense after reading up on setInterval().
// 	var timerId;
// 	var seconds = 0;

// 	function timerTitle() {
// 		seconds++;
// 		timer.innerHTML = "Time elapsed: " + seconds;
// 	} 

// 	timerStart.addEventListener("click", function() {
// 		console.log("Start the timer.");
// 		timer.innerHTML = "Time elapsed: " + seconds; // Change the text to "Time elapsed".
// 		timerId = setInterval(timerTitle, 1000); // 1000 mil = 1 sec
// 	})

// 	timerPause.addEventListener( "click", function() {
// 		clearInterval(timerId);
// 	})

// 	timerReset.addEventListener( "click", function() {
// 		clearInterval(timerId);
// 		timer.innerHTML = "Stop watch"; // Change back to "Stop watch".
// 	})

// }



