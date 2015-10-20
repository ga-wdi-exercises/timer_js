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
  start.addEventListener("click", function(){
    var timer = document.getElementById('timer');
    timerSet = setInterval(updateTime, 1000);

      start.addEventListener("click", function(timerSet){
        timerSet.preventDefault();
      })
  });

  pause.addEventListener("click", function(){
    console.log("stopped at " + time);
    var timerStop = document.getElementById('timer');
    timerStop.textContent = "Time stopped at: " + time;
    clearInterval(timerSet);
  });

  reset.addEventListener("click", function(){
    var timerReset = document.getElementById('timer');
    timerReset.textContent = "Stop Watch";
    clearInterval(timerSet);
    time = 0;
  });

};

startTimerApp();
