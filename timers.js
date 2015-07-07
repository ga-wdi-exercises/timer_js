var resetButton = document.querySelector("#reset");
var startButton = document.querySelector("#start");
var pauseButton = document.querySelector("#pause");
var timerMorph = document.querySelector("#timer");

resetButton.addEventListener("click", resetButtonChosen);
startButton.addEventListener("click", startButtonChosen);
pauseButton.addEventListener("click", pauseButtonChosen);

function fireStopwatch(){
 console.log("how do I get a timer to start?")
 
}
function resetButtonChosen() {
  window.clearInterval(timerMorph);
  document.getElementById('timer').innerHTML = "Stop Watch (toggle)";
}
function startButtonChosen() {
  document.getElementById('timer').innerHTML = "Time elapsed: 0"
  var pressStartButton = window.setInterval(fireStopwatch, 0);
}
function pauseButtonChosen() {
 document.getElementById('timer').innerHTML = "Time elapsed: 1";
 var seconds = 0;
}
