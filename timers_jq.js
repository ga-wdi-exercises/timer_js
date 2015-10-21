$(document).ready(function(){

	$("#start").on("click", startTimer);
	$("#reset").on("click", resetTimer);
	$("#pause").on("click", pauseTimer);

	var seconds = 0;
	var intervalID;

	function updateTime() {
		seconds++;
		$("#timer").text(seconds);
	}
	function startTimer() {
		updateTime();
		$("#timer").text(seconds);
		intervalID = setInterval(updateTime, 1000);
		return intervalID;
	}

	function pauseTimer() {
		$("timer").text(seconds);
		clearInterval(intervalID);
		return seconds;
	}

	function resetTimer() {
		seconds = 0;
		$("#timer").text("Stop Watch");
		clearInterval(intervalID);
	}
})