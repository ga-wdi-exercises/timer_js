var start = document.querySelector("button#start");
var pause = document.querySelector("button#pause");
var reset = document.querySelector("button#reset");
var number = 0;

var updateTime = function(){
  var timer = document.getElementById('timer');
  timer.textContent = "blah"
  timer.textContent = "Time elapsed: " + number;
  number++;
}
var timerSet;
start.addEventListener("click", function(){
  var timer = document.getElementById('timer');
  timerSet = setInterval(updateTime, 1000);
});

pause.addEventListener("click", function(){
  console.log("stopped at " + number);
  var timerStop = document.getElementById('timer');
  timerStop.textContent = "Time stopped at: " + number;
  clearInterval(timerSet);
});

reset.addEventListener("click", function(){
  var timerReset = document.getElementById('timer');
  timerReset.textContent = "Stop Watch";
  clearInterval(timerSet);
  number = 0;
});
