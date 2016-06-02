// * When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0", and the count should increment every second.
// * When "Reset" is clicked, the text should return to "Stop Watch"
// * When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing.
// * Added count to prevent doubling speed
var reset = $("#reset");
var start = $("#start");
var pause = $("#pause");
var clicks = 0
var seconds = 0;
var timerId

start.on("click", function(){
  clicks++
  if (clicks == 1){
    $("#timer").html("Time elapsed: "+seconds)
    timerId = setInterval(function(){
      seconds++;
      $("#timer").html("Time elapsed: "+seconds)
    }, 1000);
  }
});

pause.on("click",function() {
  clearInterval(timerId)
  clicks = 0
})

reset.on("click",function(){
  $("#timer").html("Stop Watch")
  seconds = 0
  clearInterval(timerId)
  clicks = 0
})
