
var seconds = 0;
var timerId = 0;

var timer = document.getElementById( "timer" ) ;
var reset = document.getElementById( "reset" ) ;
var start = document.getElementById( "start" ) ;
var pause = document.getElementById( "pause" ) ;


start.addEventListener( "click", function() {
	console.log("start timer") ;
	timer.innerHTML = "Time elapsed: " + seconds ;
	timerId = setInterval( updateTimer, 1000 ) ;
})

function updateTimer() {
	seconds++ ;
	timer.innerHTML = "Time elapsed: " + seconds ;
} 


pause.addEventListener( "click", function() {
	clearInterval( timerId ) ;
} )


reset.addEventListener( "click", function() {
	clearInterval( timerId ) ;
	timer.innerHTML = "Stop watch" ;
})











