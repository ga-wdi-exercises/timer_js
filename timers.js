

// Create Javascript selectors that target each of the timer buttons.
var intervalID;
var resetBtn = document.getElementById('reset');
var startBtn = document.getElementById('start');
var pauseBtn = document.getElementById('pause');
var stopWatchTimer = document.getElementById('timer');
var count = 0;
// Create click handlers (empty, for now) for each of the timer buttons.

resetBtn.addEventListener("click",resetClickEvent);
startBtn.addEventListener("click",startClickEvent);
pauseBtn.addEventListener("click",pauseClickEvent);

function resetClickEvent(){
  console.log("thisevent has fired!");
  clearInterval(intervalID);
  document.getElementById("timer").innerHTML = "Stop Watch";
  count = 0;
};

function startClickEvent(){
  console.log("thisevent has fired!");
  updateTime();

};

function pauseClickEvent(){
  document.getElementById("timer").innerHTML ="Paused"
  clearInterval(intervalID);

};
function updateTime(){
  intervalID = window.setInterval(timerCount,1000);
};

function timerCount(){
  count++;
  console.log(count);
  document.getElementById("timer").innerHTML = count;
};

//use global variables to create a pause unpause blocker for that and start variable to
