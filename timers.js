//Variables seconds & timerID
var seconds = 0;
var timerIDSelector;
var stopWatch;

//Update the timer
function updateTime(){
  seconds++;
  timerIDChange();
}

//Stop the timer
function stopTime(){
  clearInterval(stopWatch);
}

//Change the text in ID timer
function timerIDChange(){
  timerIDSelector = document.querySelector("#timer");
  timerIDSelector.textContent = "Stop Watch " +  seconds;
}

//Reset Button
var resetButton = document.querySelector("#reset");
var handleClickEventReset = function(){
  console.log("I was clicked! RESET");
  seconds = 0;
  timerIDChange();
};

//Start Button
var startButton = document.querySelector("#start");
var handleClickEventStart = function(){
  console.log("I was clicked! START");
  stopWatch = setInterval(updateTime, 1000);
};

//Stop Button
var stopButton = document.querySelector("#pause");
var handleClickEventStop = function(){
  console.log("I was clicked! STOP");
  stopTime();
  timerIDChange();
};

resetButton.addEventListener("click", handleClickEventReset);
startButton.addEventListener("click", handleClickEventStart);
stopButton.addEventListener("click", handleClickEventStop);
