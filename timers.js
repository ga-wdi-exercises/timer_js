var reset = document.querySelector("#reset");
var start = document.querySelector("#start");
var pause = document.querySelector("#pause");

start.addEventListener("click", startTimer);
reset.addEventListener("click", resetTimer);
pause.addEventListener("click", pauseTimer);

var seconds = 0;
var timerHeader = document.getElementById("timer");
var intervalID;

function updateTime() {
	seconds++;
	timerHeader.innerText = seconds;
}
function startTimer() {
	updateTime();
	timerHeader.innerText = seconds;
	intervalID = setInterval(updateTime, 1000);
	return intervalID;
}

function pauseTimer() {
	seconds = timerHeader.innerText;
	clearInterval(intervalID);
	return seconds;
}

function resetTimer() {
	seconds = 0;
	timerHeader.innerText = "Stop Watch";
	clearInterval(intervalID);
}