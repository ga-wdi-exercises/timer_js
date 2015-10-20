// Create JS selectors to target each of the timer buttons
var resetButton = document.querySelector("#reset")
var startButton = document.querySelector("#start")
var pauseButton = document.querySelector("#pause")

// create click handlers for the timer buttons
resetButton.addEventListener("click",)
startButton.addEventListener("click",)
pauseButton.addEventListener("click",)

//  Instantiate seconds and timerId veriables?
var seconds = 0;
var timerId = 0;


// Start Functionality
  // click start
    //  replace text "Stop Watch" with "Time elapsed: 0"
    // increase count by 1 second.


// Reset Functionality
  // click reset
    //text returns to Stop Watch

// Pause Functionality
  // click pause
    // text stays at time elapsed
    // stops incrementing



// setInterval alt?
function seconds (){
  console.log("This will show seconds?");
};
setInterval(seconds, 1000);

// timerID variable alt?
var timerId;
pause.addEventListener("click", function(){
  timerID = setInterval(, 1000);
});
stop.addEventListener("click", function(){
  clearInterval(timerId);
});
