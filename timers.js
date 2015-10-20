  var seconds = 0;
  var resetTimer = document.getElementById("reset");
    reset.addEventListener("click", function() {
    timerID = document.getElementById('timer').textContent = "Stop Watch";
    seconds = 0;
  });
  var startTimer = document.getElementById("start");
    start.addEventListener("click", function() {
    startTimer = setInterval(updateTime, 1000);
  });
  var pauseTimer = document.getElementById("pause");
    pause.addEventListener("click", function() {
    clearInterval(startTimer);
  });
  var updateTime = function() {
    timerID = document.getElementById('timer').textContent = ("Time elapsed: " + seconds);
    seconds++;
  }
