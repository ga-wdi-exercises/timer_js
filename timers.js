var seconds = 0;
var timerId;
var start = document.querySelector('#start');
var reset = document.querySelector("#reset");
var pause = document.querySelector("#pause");

start.addEventListener("click", function() {
    console.log("Start button is clicked");
    startTimer = setInterval(timerStart, 1500);
});

var timerStart = function () {
    timerId = document.getElementById("timer").textContent = ("Time Elapsed:" + seconds + "s");
     console.log("Start time is clicked: " + seconds);
     updateTime();
 }

reset.addEventListener("click", function() {
    console.log("Reset button is clicked");
    timerId = document.getElementById("timer").textContent = ("Stop Watch");
    seconds = 0;
  });

pause.addEventListener("click", function() {
    console.log("Pause button is clicked")
    clearInterval(startTimer);
  });

var updateTime = function() {
  timerId = document.getElementById('timer').textContent = ("Time elapsed: " + seconds + "s");
  seconds++;
 }
