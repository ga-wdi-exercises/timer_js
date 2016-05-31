var reset = $("#reset");
var start = $("#start");
var pause = $("#pause");
var timerId;

reset.on("click", resetTimer);
start.on("click", startTimer);
pause.on("click", pauseTimer);


function startTimer() {
  timerId = setInterval(updateTime, 1000);
}

var seconds = 0
var minutes = 0

function updateTime() {

  seconds ++;

  if (seconds >=60) {
    seconds=0;
    minutes ++
  }

  $("h1").text(minutes+" : "+seconds);

}

function pauseTimer() {
    clearInterval(timerId);
}


  function resetTimer(){
    clearInterval(timerId);
    seconds=0;
    $("h1").text("Stopwatch");
  }
