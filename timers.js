var start = $("#start");
var reset = $("#reset");
var pause = $("#pause");

function countUp(){
  ++seconds;
$("h1").text("Time Lapse: " + seconds);
}

var seconds = 0;
function startTimer() {
  $("h1").text("Time Lapse:" + seconds);

  var timer = setInterval(countUp,1000);

  pause.on("click", function(){
    clearInterval(timer);
  })
  reset.on("click", function(){
    clearInterval(timer);
    seconds = 0;
    $("h1").text("Stop Watch");
  })
};



start.on("click", startTimer);
