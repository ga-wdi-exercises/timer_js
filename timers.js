// Add text information.
var timerText = document.getElementById("timer");

// Add button control variables
var timerReset = document.getElementById("reset");
var timerStart = document.getElementById("start");
var timerPause = document.getElementById("pause");

// Add event listeners to the variables.
timerText.addEventListener("click", changeText); // Remove click.
timerPause.addEventListener("click", pauseTimer);
timerReset.addEventListener("click", resetTimer);
timerStart.addEventListener("click", startTimer);

 // Add functions for the variables.
function changeText() {
	document.getElementById("timer").style.color = "red";
	console.log("Changes the text color to red.")
}

function resetTimer() {
	document.getElementById("reset").style.background = "red";
	console.log("Changes the text color to red.")
}

function startTimer() {
	document.getElementById("start").style.color = "red";
	console.log("Changes the background color to red.")
}

function pauseTimer() {
	document.getElementById("pause").style.color = "red";
	console.log("Changes the text color to red.")
}