var reset = document.querySelector('#reset');
var start = document.querySelector('#start');
var pause = document.querySelector('#pause');
var time = [0, 0, 0];
var timerID;
var updateTime = function(){
    time[0]++;
    if (time[0] == 60){
      time[0] = 0;
      time[1]++;
    }
    if (time[1] == 60){
      time[1] = 0;
      time[2]++;
    }
    for (var i =0; i<time.length; i++){

    }
    document.querySelector('#timer').textContent = "Time elapsed: " + time[2]+":"+time[1]+":"+time[0];
}
var startTimer = function(){
  timerID = setInterval(updateTime, 1000);
  start.removeEventListener("click", startTimer);
};

start.addEventListener("click", startTimer);
pause.addEventListener("click", function(){
  clearInterval(timerID);
  start.addEventListener("click", startTimer);
});
reset.addEventListener("click", function(){
  clearInterval(timerID);
  time = [0, 0, 0];
  document.querySelector('#timer').textContent = "Stop Watch";
  start.addEventListener("click", startTimer);
});
