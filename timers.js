var reset = $("#reset");
var start = $("#start");
var pause = $("#pause");
var timerId;


var seconds = 0;

function updateTime(){
  if (seconds <= 59){
    seconds++;
  }
  $("#timer").text(seconds);
}

function startTimer(){
  timerId = window.setInterval(updateTime, 1000);
}
start.on("click", startTimer);


pause.on("click", pauseTimer);

function pauseTimer(){
  window.clearInterval(timerId)
}

reset.on("click", resetTimer);

function resetTimer(){
  window.clearInterval(timerId)
  seconds = 0;
  $("#timer").text("Stop Watch");
}

//   timerId = setInterval(function(),1000);
// }
