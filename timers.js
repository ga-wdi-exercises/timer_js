var reset = document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");

var seconds = 0
var timerID;
var countStart = 0;
var countPause = 0;

start.addEventListener("click",function(){
  countStart ++;
    if (countStart === 1) {
        timerID = setInterval(updateTime, 1000);
        timer.innerHTML = "Time Elapsed: " + seconds;
        countPause = 0;
    } else {
    }
});

pause.addEventListener("click",function(){
  console.log("PAUSED");
  clearInterval(timerID);
  countPause ++;
  countStart = 0;
  if(countPause % 2 === 0) {
    timerID = setInterval(updateTime, 1000);
    };
});

reset.addEventListener("click",function(){
  clearInterval(timerID);
  seconds = 0;
  timer.innerHTML = "Stop Watch";
  countStart = 0;
  countPause = 0;
});

  function updateTime() {
    seconds ++;
    timer.innerHTML = "Time Elapsed: " + seconds
  }
