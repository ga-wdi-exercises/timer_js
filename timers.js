var timer = function(){
  resetButton = document.getElementById("reset");
  startButton = document.getElementById("start");
  pauseButton = document.getElementById("pause");

  var time = 0;

  var timerID;

  function startTimer() {
    timerID = setInterval(function() {
      time += 1000;
    }, 1000);
    console.log("startTimer is running.");
    console.log("time is " + time);
  }

  getH1 = document.querySelector("h1");
  var uTID;

  function updateTime() {
    getH1.setAttribute("id", "timer");
    uTID = setInterval(function() {
      getH1.innerHTML = "Time elapsed: " + time / 1000
    }, 1000);
    console.log("updateTime is running.");
    console.log("time is " + time)
  }

  function stopTheClock() {
    clearInterval(timerID);
    clearInterval(uTID);
  }

  function resetB() {
    stopTheClock();
    time = 0;
    getH1.innerHTML = "Stop Watch";
    startButton.innerHTML = "Start";
    console.log("resetB is running.");
    console.log("Everything should STOP now...");
  }

  function startB() {
    startButton.innerHTML = "Running...";
    startTimer();
    updateTime();
    console.log("startB is running.");
    console.log("Everything should START now...");
    // seconds don't work, so working around that...
  }

  function pauseB() {
    stopTheClock();
    startButton.innerHTML = "Start";
    console.log("pauseB is running, timer paused");
  }
  //pauseB does not stop the clock...?

  resetButton.addEventListener("click", resetB);
  startButton.addEventListener("click", startB);
  pauseButton.addEventListener("click", pauseB);
}
timer();
