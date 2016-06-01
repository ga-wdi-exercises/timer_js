var secondsShown = 0;
var clock;
var timeStarted = true;


$("#start").on("click", startWatch); // Start

function startWatch(){
    if (timeStarted == true){ // added this if statement to prevent multiple intervals but wont start again after Pause
     clock = setInterval(function(){
      $("#timer").text(secondsShown); secondsShown++;
    }, 1000);
    timeStarted = false;
}
}

$("#pause").on("click", pauseWatch); // pause

function pauseWatch(){
  window.clearInterval(clock);
  timeStarted = true;
  }

$("#reset").on("click", resetWatch);
//change text on reset .DONT START IT AGAIN OR IT WILL COUNT 2X


function resetWatch(){
  clearInterval(clock); // added this line to make the completely stop
  $("#timer").text("0");
  timeStarted = true;
  secondsShown = 0;
  // startWatch(); //took out this line to stop the button recounting
}
