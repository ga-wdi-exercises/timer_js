  var reset = document.getElementById("reset")
  var start = document.getElementById("start");
  var pause = document.getElementById("pause");
  var watch = document.getElementById("timer");
  var seconds = 0;
  var newTimer;
  var started = false;

  reset.addEventListener("click", resetTimer);
  start.addEventListener("click", startTimer);
  pause.addEventListener("click", pauseTimer);

  function resetTimer() {
    clearInterval(newTimer);
    seconds = 0;
    watch.innerHTML = "Stop Watch";
    started = false;

  }

  function startTimer() {
    if (!started){
      watch.innerHTML = "Time elapsed: " + seconds;
      newTimer = setInterval(updateTime, 1000);
      started = true;
    }
  }

  function pauseTimer() {
    clearInterval(newTimer);
    started = false;

  }

  function updateTime() {
    seconds += 1;
    watch.innerHTML = "Time elapsed: " + seconds;
  }
