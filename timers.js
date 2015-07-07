// [reset, start, pause] btn selected
var reset = document.getElementById('reset');
var start = document.getElementById('start');
var pause = document.getElementById('pause');

// timer set to 0 which is where it begins/ resets to.
var seconds = 0;

// will call this function ever second and carry out code within.
var timerID = setInterval(updateTime, 1000);

// reset the timer when the reset btn is clicked
reset.addEventListener('click', resetTimer)
function resetTimer() {
  document.getElementById('timer').innerHTML = "Stop Watch"
}

// start the timer when start btn is clicked
start.addEventListener('click', startTimer)
function startTimer() {

}

// pause the timer when pause btn is clicked
pause.addEventListener('click', pauseTimer)
function pauseTimer() {

}

// Update the timer
function updateTime() {

}
