//add eventlisteners to buttons
//getelementbyid "start", "reset", "pause"
//replace text ("stop watch") with "time elapsed: 0" where "0" is a number that will increment every second.
//console.log(stopWatch.innerHTML="Time Elapsed: " + myNum)
//when reset is clicked text should return to "stop watch"
//when pause is clicked text should say "time elapsed" but stop incrimenting.
var startBtn = document.getElementById("start");
var pauseBtn = document.getElementById("pause");
var resetBtn = document.getElementById("reset");
var stopWatch = document.getElementById("timer");
var myNum = 0;
var counter = "off"

//initiate object
var swatch = {
  //key/value pair in which value is a function
  start: function() {
    //add click behavior
    startBtn.addEventListener("click", function() {
      if (counter=="off") {
        counter="on";
        //global var
        intervalId = setInterval(function (){stopWatch.innerHTML="Time Elapsed: " + myNum++},1000);
      }
    });
    pauseBtn.addEventListener("click", function() {
      if (counter=="on") {
        counter="off";
        clearInterval(intervalId);
      }
    });
    resetBtn.addEventListener("click", function() {
        counter="off";
        myNum = 0;
        clearInterval(intervalId);
        stopWatch.innerHTML="Stop Watch";
    });
  }
}

swatch.start();
