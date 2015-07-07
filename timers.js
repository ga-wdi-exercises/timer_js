var seconds = 0;
var timerId;

//Start
startBtn = document.getElementById('start');
startBtn.addEventListener("click", startWatch)
function startWatch(){
  timerId = setInterval(updateTime, 1000);
}
//Pause
pauseBtn = document.getElementById('pause');
pauseBtn.addEventListener("click", pauseWatch)
function pauseWatch(){
  //Stop -- but do not reset! -- the timer using clearInterval()
  clearInterval(timerId);
}
//Reset
resetBtn = document.getElementById('reset');
resetBtn.addEventListener("click", resetWatch)
function resetWatch(){
  clearInterval(timerId);
  seconds = 0;
  document.getElementById("timer").innerHTML = "Stop Watch";
}

//Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer"
function updateTime() {
  seconds ++
  document.getElementById("timer").innerHTML = ("Time elapsed: " + seconds)
}
