
$(document).ready(function(){

  //number1
  var resetButton = $("#reset");
  var startButton = $("#start");
  var pauseButton = $("#pause");



  //number 2
  startButton.on("click", startTime);
  pauseButton.on("click", pauseTime);
  resetButton.on("click", resetTime);

  var seconds = 0;
  var timerIsEmpty = true;
  var timerId;


  function startTime(){
    timerId = setInterval(function(){
    seconds += 1;
    $("#timer").text("Time Elapsed:" + seconds);
  }, 1000)
    timerIsEmpty = false;
    console.log("Start button works");
  };

  function pauseTime() {
    clearInterval(timerId);
    timerIsEmpty = true;
    console.log("Pause Button works");
  }

  function resetTime() {
    clearInterval(timerId);
    seconds = 0;
    $("#timer").text("Stop Watch");
    timerIsEmpty = true;
  }

});
