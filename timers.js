var startID = document.querySelector("#start");
var pauseID = document.querySelector("#pause");
var resetID = document.querySelector("#reset");
var timerID = document.querySelector("#timer");
var seconds = 0;


var updateTime = function () {
  seconds++;
  timerID.textContent = "Timer:" + seconds;
};

var start;
startID.addEventListener("click", function(){
  start = setInterval(updateTime, 1000);
});


var pause;
pauseID.addEventListener("click", function(){
  clearInterval(start);
});

var reset;
resetID.addEventListener("click", function(){
  clearInterval(start);
  timerID.textContent = "Stop Clock";
  seconds = 0;
});
