//When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0", and the count should increment every second.


//When "Reset" is clicked, the text should return to "Stop Watch"


//When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing.



//Create Javascript selectors that target each of the timer buttons.
var resetButton = document.getElementById(".reset");
var startButton = document.getElementById(".start");
var pauseButton = document.getElementById(".pause");
//Create click handlers (empty, for now) for each of the timer buttons.
resetButton.addEventListener("click", function(event){

})

startButton.addEventListener("click", function(event){

})

pauseButton.addEventListener("click", function(event){

})

//Instantiate seconds and timerId variables for your timer. The latter will make more sense after reading up on setInterval().
var seconds = window.setInterval(count, 1000)
function count(){
  var seconds = 1;
      seconds++;
      console.log(count)
}
//Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".
function updateTime(){
  timer.
}
//Inside your click handler for the start button...
////////Replace "Stop Watch" in the HTML with the content of the seconds variable.
////////Use setInterval() to increment the timer by 1 every second.
function count(){

}
//Inside your click handler for the pause button...
////////Stop -- but do not reset! -- the timer using clearInterval().
//Once again, inside your click handler for the start button...
////////Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".
//Inside your click handler for the reset button...
////////Stop the timer using clearInterval().
////////Reset the timer.
////////Replace the time in your HTML with the original "Stop Watch" text.
