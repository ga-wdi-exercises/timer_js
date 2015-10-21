console.log("Smartwatch Timer Initiated")

var start = document.querySelector(".start")
var stop = document.querySelector(".stop")
var reset = document.querySelector(".reset")
var timer = document.getElementById("smartWatch")

var intervalId;

var timerOn = false

var ticker = 0


var startTimer = function(){
	console.log("Timer is Working");
	ticker++
	smartWatch.textContent = 'Time: ' + ticker;
}


start.addEventListener("click", function(){
	if (!intervalId)
	intervalId = window.setInterval(startTimer, 1000)
}.bind(this));

stop.addEventListener("click", function(){		
		console.log("Your timer is stopped. To continue, click Start Again...")
		clearInterval(intervalId);
		intervalId = 0
}.bind(this));

reset.addEventListener("click", function(){		
		console.log("Your timer has been reset. To restart, click Start Again...")
		ticker = 0;
	 	clearInterval(intervalId);
	 	smartWatch.textContent = "Timer has been reseted. Click Start Again to restart";
}.bind(this));


start.addEventListener()