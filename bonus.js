var seconds = 0;
var newT;
var box = document.getElementById("timer");
var started = false;
function timeDisplay() {
  seconds += 1;
  box.innerHTML = "Time elapsed: " + seconds + " seconds";
}
var timer = {
  clear: document.getElementById("reset").addEventListener("click", function clearT() {
    clearInterval(newT);
    seconds = 0;
    box.innerHTML = "Stop Watch";
    started = false;
  });

  go: document.getElementById("start").addEventListener("click", function goT() {
    if (!started){
      box.innerHTML = "Time elapsed: " + seconds + " seconds";
      newT = setInterval(timeDisplay, 1000);
      started = true;
      console.log("Started timer")
    }
  });

  pause: document.getElementById("pause").addEventListener("click", function pauseT() {
    clearInterval(newT);
    started = false;
    console.log("Paused Timer");
  });
}




//Start Timer


//Pause Timer

// Time Displayed
