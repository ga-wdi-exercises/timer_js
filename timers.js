  var resetButton = document.querySelector("#reset");
  var startButton = document.querySelector("#start");
  var pauseButton = document.querySelector("#pause");
  var stopWatch = document.querySelector("#timer");
  var clicks = 0;
  var seconds = 0;

  function updateTime() {
    stopWatch.innerHTML = ("Time Elapsed: " + seconds++);
  };


  startButton.addEventListener("click", function(){
    clicks++;
    if (clicks < 2) {
      timerId = setInterval(updateTime, 1000);
    }
  });

  pauseButton.addEventListener("click", function (){
    clearInterval(timerId);
  });

  resetButton.addEventListener("click", function (){
    clearInterval(timerId);
    stopWatch.innerHTML = "Stop Watch";
    seconds = 0;
    clicks= 0;
  });
