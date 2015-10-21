// Step 1: Create JS selectors to target each of the timer buttons
var reset = document.querySelector("#reset");
var start = document.querySelector("#start");
var pause = document.querySelector("#pause");
var timer = document.querySelector("#timer");

//  Step 3: Instantiate seconds and timerId veriables
var seconds = 0;
var timerId = 0;


// Step 2. create click handlers for the timer buttons
//reset.addEventListener("click",);




// Step 4: Create function updateTime
  // increment by seconds (1)
  // insert value of seconds into <h1> element with id="#timer"


function updateTime () {
  seconds++;
}

// Start Functionality
  // click start
    //  replace text "Stop Watch" with "Time elapsed: 0"
    // increase count by 1 second.

    function startClick () {
      var newSeconds = seconds++;
      timer.innerHTML = "Time elapsed: " + newSeconds;
      timerId = setInterval(updateTime, 1000)
      console.log("start action happens")
    };

    start.addEventListener("click", startClick);

// Pause Functionality
  // click pause
    // text stays at time elapsed
    // stops incrementing

    function pauseClick () {
      clearInterval(updateTime);
      console.log("pause action happens")
    };

    pause.addEventListener("click", pauseClick);



// Reset Functionality
  // click reset
    //text returns to Stop Watch

    function resetClick () {
      clearInterval(updateTime)
      console.log("reset action happens")
    };

    reset.addEventListener("click", resetClick)



// Junk Code

// var timerId;
// pause.addEventListener("click", function(){
//   timerID = setInterval(seconds, 1000);
// });
// stop.addEventListener("click", function(){
//   clearInterval(timerId);
// });
