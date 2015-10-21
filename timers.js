var reset = document.getElementById('reset');
var start = document.getElementById('start');
var pause = document.getElementById('pause');
var timer = document.getElementById('timer');

var seconds = 0;
var intervalTimer;

var updateTimer = function(){
 seconds++;
 timer.innerHTML = seconds;
}
var startTimer = function(){
 timer.innerHTML = seconds;
 intervalTimer = setInterval(updateTimer, 1000);
 start.removeEventListener("click", startTimer);
}

start.addEventListener("click", startTimer);


pause.addEventListener("click", function(){
 clearInterval(intervalTimer);
 start.addEventListener("click", startTimer)
});

reset.addEventListener("click", function(){
 clearInterval(intervalTimer);
 seconds = 0;
 timer.textContent = 'Stop Watch';
 start.addEventListener("click", startTimer);
});
