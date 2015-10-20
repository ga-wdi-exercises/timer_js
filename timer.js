function startTimerApp () {
  var start = document.querySelector("button#start");
  var pause = document.querySelector("button#pause");
  var reset = document.querySelector("button#reset");
  var time = 0;

  var updateTime = function(){
    var timer = document.getElementById('timer');
    timer.textContent = "Time elapsed: " + time;
    time++;
  }

  var timerSet;
  var startTime = function () {
    timerSet = setInterval(updateTime, 1000);
    start.removeEventListener("click",startTime);
  }

  start.addEventListener("click", startTime);

  // start.addEventListener("click", function(){
  //   var timer = document.getElementById('timer');
  //   timerSet = setInterval(updateTime, 1000);
  //     start.removeEventListener("click", timerSet)
  // });

  pause.addEventListener("click", function(){
    console.log("stopped at " + time);
    var timerStop = document.getElementById('timer');
    timerStop.textContent = "Time stopped at: " + time;
    clearInterval(timerSet);
    // start.addEventListener("click",startTime);
  });

  reset.addEventListener("click", function(){
    var timerReset = document.getElementById('timer');
    timerReset.textContent = "Stop Watch";
    clearInterval(timerSet);
    time = 0;
  });

};

startTimerApp();
