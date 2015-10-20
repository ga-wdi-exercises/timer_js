// Step 1: Create JS selectors to target each of the timer buttons
var resetButton = document.querySelector("#reset");
var startButton = document.querySelector("#start");
var pauseButton = document.querySelector("#pause");
var timer = document.querySelector("#timer");
// Step 2. create click handlers for the timer buttons
//resetButton.addEventListener("click",);
startButton.addEventListener("click", updateTime);
//startButton.addEventListener("click", );
//pauseButton.addEventListener("click",);

//  Step 3: Instantiate seconds and timerId veriables
var seconds = 0;
var timerId = 0;

// Step 4: Create function updateTime
  // increment by seconds (1)
  // insert value of seconds into <h1> element with id="#timer"

function updateTime() {
  seconds++;
  timer.innerHTML = "Time elapsed: " + seconds;
}

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


// timerID variable alt?
// var timerId;
// pause.addEventListener("click", function(){
//   timerID = setInterval(seconds, 1000);
// });
// stop.addEventListener("click", function(){
//   clearInterval(timerId);
// });
