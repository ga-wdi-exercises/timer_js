var seconds = 0;

var clear = document.getElementById("reset")
var go = document.getElementById("start");
var pause  = document.getElementById("pause");
var t = document.getElementById("timer");

var newT;
var started = false;

// Button listeners
clear.addEventListener("click", clearT);
go.addEventListener("click", goT);
pause.addEventListener("click", pauseT);

// Clear Timer
function clearT() {
  clearInterval(newT);
  seconds = 0;
  t.innerHTML = "Stop Watch";
  started = false;

}

//Start Timer
function goT() {
  if (!started){
    t.innerHTML = "Time elapsed: " + seconds + " seconds";
    newT = setInterval(timeDisplay, 1000);
    started = true;
    console.log("Started timer")
  }
}

//Pause Timer
function pauseT() {
  clearInterval(newT);
  started = false;
  console.log("Paused Timer");

}
// Time Displayed
function timeDisplay() {
  seconds += 1;
  t.innerHTML = "Time elapsed: " + seconds + " seconds";
}
