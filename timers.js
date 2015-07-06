var reset = document.getElementById("reset");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var timer = document.getElementById("timer");
var stopwatch = window.setInterval(newWatch, 500);

function newWatch() {
  timer.innerHTML = "Time elapsed: 0";
}
