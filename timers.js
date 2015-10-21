// Step 1.
var resetButton = document.querySelector("#reset");
var startButton = document.querySelector("#start") ;
var pauseButton = document.querySelector("#pause");

// Step 2. & Step 5,6,7

resetButton.addEventListener("click");

startButton.addEventListener("click", function() {
	watchTimer = setInterval(updateTime, 1000);
});

pauseButton.addEventListener("click", function() {
	watchTimer = clearInterval(updateTime, 10000);
});

// Step 3.

var seconds;
var timerId;


// Step 4.

var updateTime = function() {
	for (seconds = 0; seconds < 1; seconds ++) {
		seconds = setInterval(seconds, 100);
		 document.getElementById('timer').textContent = "Time Elapsed: " + seconds ;
	}
};
