/*
object which is working
*/
var watch = {										

	seconds : 0 ,
	timerId : 0 ,

	ids : { 
		timer : document.getElementById( "timer" ) ,
		reset : document.getElementById( "reset" ) ,
		start : document.getElementById( "start" ) ,
		pause : document.getElementById( "pause" ) ,
	} ,

	updateTimer : function() {
		this.seconds++ ;
		timer.innerHTML = "Time elapsed: " + this.seconds ;
	} ,

	eventListeners : function () {
		var self = this;

		start.addEventListener( "click", function() {
			console.log("start timer") ;
			timer.innerHTML = "Time elapsed: " + self.seconds ;
			updateTimer = self.updateTimer.bind(self);
			timerId = setInterval( updateTimer, 1000 ) ;
		} ) ,

		pause.addEventListener( "click", function() {
			clearInterval( timerId ) ;
		} ) ,

		reset.addEventListener( "click", function() {
			clearInterval( timerId ) ;
			timer.innerHTML = "Stop watch" ;
			self.seconds = 0;
		} )
	}

}

watch.eventListeners();





// var seconds = 0;
// var timerId = 0;

// var timer = document.getElementById( "timer" ) ;
// var reset = document.getElementById( "reset" ) ;
// var start = document.getElementById( "start" ) ;
// var pause = document.getElementById( "pause" ) ;


// start.addEventListener( "click", function() {
// 	console.log("start timer") ;
// 	timer.innerHTML = "Time elapsed: " + seconds ;
// 	timerId = setInterval( updateTimer, 1000 ) ;
// })

// function updateTimer() {
// 	seconds++ ;
// 	timer.innerHTML = "Time elapsed: " + seconds ;
// } 


// pause.addEventListener( "click", function() {
// 	clearInterval( timerId ) ;
// } )


// reset.addEventListener( "click", function() {
// 	clearInterval( timerId ) ;
// 	timer.innerHTML = "Stop watch" ;
// })











