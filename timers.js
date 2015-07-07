var seconds = 0;
var timerId

//Start
startBtn = document.getElementById('start');
startBtn.addEventListener("click", startWatch)
function startWatch(){
  var intervalID = setInterval(updateTime, 1000);
}
//Pause
pauseBtn = document.getElementById('pause');
pauseBtn.addEventListener("click", pauseWatch)
//Reset
resetBtn = document.getElementById('reset');
resetBtn.addEventListener("click", resetWatch)

//Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer"
function updateTime() {
  seconds ++
  document.getElementById("timer").innerHTML = ("Time elapsed: " + seconds)
}
