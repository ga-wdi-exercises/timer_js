// Create Javascript selectors that target each of the timer buttons.
var timer = document.getElementById("timer");
var reset = document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");

// Instantiate seconds and timerId variables for your timer. The latter will make more sense after reading up on setInterval().
var seconds = 0;
var timerId;

// Create click handlers for each of the timer buttons.

// Inside your click handler for the reset button...Stop the timer using clearInterval(). Reset the timer. Replace the time in your HTML with the original "Stop Watch" text.
reset.addEventListener("click", function(){
    clearInterval(timerId);
    seconds = 0;
    timer.textContent = "Stop Watch";
});

// Inside your click handler for the start button...Replace "Stop Watch" in the HTML with the content of the seconds variable. Use setInterval() to increment the timer by 1 every second.
start.addEventListener("click", function() {
    timerId = setInterval(updateTime, 1000)
});

// Inside your click handler for the pause button...Stop -- but do not reset! -- the timer using clearInterval().
pause.addEventListener("click", function(){
    clearInterval(timerId);
    console.log("I worked");
});

// Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".
function updateTime() {
    seconds++;
    timer.textContent ="Time elapsed: " + seconds;
}
