var reset = document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var watch = document.getElementById("timer");
var seconds = 0;
var newTimer;
var toggle = false;

reset.addEventListener("click", resetTimer);
start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);

function startTimer() {
  if (!toggle){
    watch.innerHTML = "Seconds that passed you by: " + seconds;
    newTimer = setInterval(unpauseTimer, 1000);
    toggle = true;
  }
}

function pauseTimer() {
  clearInterval(newTimer);
  toggle = false;

}

function resetTimer() {
  clearInterval(newTimer);
  seconds = 0;
  watch.innerHTML = "Stop Watch";
  toggle = false;

}

function unpauseTimer() {
  seconds += 1;
  watch.innerHTML = "Seconds that passed you by: " + seconds;
  toggle = true;
}
