var resetButton = document.querySelector("#reset")
var startButton = document.querySelector("#start")
var pauseButton = document.querySelector("#pause")

resetButton.addEventListener("click",)
startButton.addEventListener("click",)
pauseButton.addEventListener("click",)

//  Seconds variable for timer
function seconds (){
  console.log("This will show seconds?");
};
setInterval(seconds, 1000);

// timerID variable
var timerId;
pause.addEventListener("click", function(){
  timerID = setInterval(, 1000);
});
stop.addEventListener("click", function(){
  clearInterval(timerId);
});
