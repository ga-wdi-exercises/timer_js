
// * When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0", and the count should increment every second.
var timer = document.getElementById("timer");
var resetButton = document.getElementsByClassName("controls")[0];
var currTime=0;
console.log(timer.innerHTML);
console.log(resetButton);

resetButton.addEventListener("click", takeAction);

// When "Reset" is clicked, the text should return to "Stop Watch"
// return watch to "Stop Watch"
function takeAction(eventName) {
  //console.log("Made it here")
  //console.log(eventName.target)
  //console.log(eventName.target.id);

  if(eventName.target.id == 'reset'){
    console.log("RESET IT");
    resetTimer();
  }else if(eventName.target.id == 'start'){
    console.log("STARTED IT");
    startTimer();
  }else if(eventName.target.id == 'pause'){
    console.log("PAUSED IT");
    pauseTimer();
  }


}

function startTimer(){
  myTimer = setInterval( function(){
    currTime++;
    console.log(currTime);
    timer.innerHTML = "Time elapsed: " + currTime;
  }, 1000);
}

function pauseTimer(){
  clearInterval(myTimer);
}

function resetTimer(){
  currTime = 0;
  timer.innerHTML = Start Timer;
}
// When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing.
// swtitch timer from incrementing to stopped
