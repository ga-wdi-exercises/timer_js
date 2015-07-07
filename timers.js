var seconds = 0;
var timerId;
var timer = document.getElementById("timer");
var	start = document.getElementById("start");
var	pause = document.getElementById("pause");
var reset = document.getElementById("reset");

start.addEventListener("click", function() {
	timer.innerHTML = "Time elapsed: " + seconds;
	timerId = setInterval("updateTime()", 1000);
});

pause.addEventListener("click", function() {
	clearInterval(timerId);
});

reset.addEventListener("click", function () {
	seconds = 0;
	clearInterval(timerId);
	timer.innerHTML = "Stop Watch";
});

function updateTime() {
	seconds++;
	timer.innerHTML = "Time elapsed: " + seconds;
}

/* */