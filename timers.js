/*
####Client Specs
* When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0", and 
the count should increment every second.
* When "Reset" is clicked, the text should return to "Stop Watch"
* When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing.

####Directions
Spend 10 minutes looking at [JavaScript Timers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Timers), 
then check out the specific documentation for `setInterval` and `clearInterval`.
*/

//NEW RESOURCES
/*
** WindowTimers.setInterval()
Calls a function or executes a code snippet repeatedly, 
with a fixed time delay between each call to that function. Returns an intervalID.
	intervalID is a unique interval ID you can pass to clearInterval().
	func is the function you want to be called repeatedly.
	code in the alternate syntax, is a string of code you want to be executed repeatedly (using this syntax is not recommended for the same reasons as using eval())
	delay is the number of milliseconds (thousandths of a second) that the setInterval() function should wait before each call to func. As with setTimeout, there is a minimum delay enforced.
	param1, param2, and so forth are additional parameters which are passed through to the function specified by func.

**WindowTimers.clearInterval()
Cancels repeated action which was set up using setInterval.
	window.clearInterval(intervalID)
	intervalID is the identifier of the repeated action you want to cancel. This ID is returned from setInterval().

//TO USE FROM CLASS TODAY
**CallBacks
**this.someProperty where this uses current object to to call a function or variable
*/

//My Attempt PSEUDO CODE

/*

//Set a variable (startHandle) equal to to the start button's id using document.getElementId("Start")
//Add event listener to that variable with functions triggered on click that change text in StopWatch
//and that start the windowtimmers.setInterval NOTE: THIS MAY BE ONE FUNCTION ULTIMATELY
//	startHandle = document.getElementById("Start")
	//var startHandle.addEventListener("click", function(){
		//insertStopWatchText();
		//startWindowTimer();
	//})
counter = 0; 
var startHandle = document.getElementById("start");
var stopWatchHandle = document.getElementById("timer"); 

startHandle.addEventListener("click", function(){
		window.setInterval(startWindowTimer, 1000); 
})

function startWindowTimer(){
	counter += 1; 
	console.log("each time this function runs");
	stopWatchHandle.innerHTML = "Time elapsed: " + counter;
}

//Add an event listener to the reset button that triggers a function to return text to stop watch
	//trigger a function that changes a global variable counter to one that avoids starting the other stuff
var resetHandle = document.getElementById("reset");

resetHandle.addEventListener("click", function(){
	stopWatchHandle.innerHTML = "Stop Watch";
})
//Add and event listener to pause button that triggers a fucntion to stop the incrementing
	//Use this in the function that is called on the  to stop the timer
	//but freeze the text: WindowTimers.clearInterval()
var pauseHandle = document.getElementById("pause")

pauseHandle.addEventListener("click", function(){
	window.clearInterval(startWindowTimer);
})

*/

//WITH PSEUDO CODE PROVIDED

//1. Create Javascript selectors that target each of the timer buttons.
var resetSelector = document.getElementById("reset");
var startSelector = document.getElementById("start");
var pauseSelector = document.getElementById("pause");

//2. Create click handlers (empty, for now) for each of the timer buttons.
resetSelector.addEventListener("click", function(){
	window.clearInterval(timerId);
	seconds = 0;
	document.getElementById("timer").innerHTML = "Stop Watch"; 
})

startSelector.addEventListener("click", function(){
	window.clearInterval(timerId); 
	timerId = window.setInterval(updateTime, 1000);
})

pauseSelector.addEventListener("click", function(){
	window.clearInterval(timerId);
})
//3. Instantiate `seconds` and `timerId` variables for your timer. The latter will make more sense after reading up on `setInterval()`.
var seconds = 0;
var timerId;
//4. Create an `updateTime()` function that increments the `seconds` counter and inserts that value into the `<h1>` element with `id="timer"`.
function updateTime(){
	seconds +=1;
	document.getElementById("timer").innerHTML = seconds;
}
//5. Inside your click handler for the start button...
// - Replace "Stop Watch" in the HTML with the content of the `seconds` variable.
// - Use `setInterval()` to increment the timer by 1 every second.
//6. Inside your click handler for the pause button...
//  - Stop -- but do not reset! -- the timer using `clearInterval()`.
//7. Once again, inside your click handler for the start button...
//  - Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".
//8. Inside your click handler for the reset button...
//  - Stop the timer using `clearInterval()`.
//  - Reset the timer.
//  - Replace the time in your HTML with the original "Stop Watch" text.

//myObject { 
//	resetSelector: document.getElementById("reset"),
//	startSelector: document.getElementById("start"),
//	pauseSelector: document.getElementById("pause"),
//}


