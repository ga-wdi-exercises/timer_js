
$(document).ready(function () {

  seconds = 0;
  timerID = "";

  $("#start").on("click",doStart);
  $("#pause").on("click",doPause);
  $("#reset").on("click",doReset);

});

var doStart = function() {
  timerID = setInterval(updateTime, 1000);
}
var updateTime = function() {
  document.getElementById("timer").innerHTML = seconds;
  seconds+=1;
}
var doReset = function() {
  seconds = 0;
  clearInterval(timerID);
  document.getElementById("timer").innerHTML = "Stop Watch";
}
var doPause = function() {
  clearInterval(timerID);
}
