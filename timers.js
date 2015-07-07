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



/*
object which is not working

var timer = {										

	seconds : 0 ,
	timerId : 0 ,

	ids : { 
		timer : document.getElementById( "timer" ) ,
		reset : document.getElementById( "reset" ) ,
		start : document.getElementById( "start" ) ,
		pause : document.getElementById( "pause" ) ,
	} ,

	updateTimer : function() {
		seconds++ ;
		timer.innerHTML = "Time elapsed: " + seconds ;
	} ,

	eventListeners : function () {

		start.addEventListener( "click", function() {
		console.log("start timer") ;
		timer.innerHTML = "Time elapsed: " + seconds ;
		timerId = setInterval( updateTimer, 1000 ) ;
		} ) ,

		pause.addEventListener( "click", function() {
		clearInterval( timerId ) ;
		} ) ,

		reset.addEventListener( "click", function() {
		clearInterval( timerId ) ;
		timer.innerHTML = "Stop watch" ;
		} )
	}

}
*/













