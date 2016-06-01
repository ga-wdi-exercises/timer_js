//figure out references of variables

var reset = $("#reset");
var start = $("#start");
var pause = $("#pause");
var timerID = $("#timer");

function seconds(){
  timerID/1000
}

reset.on("click", clearTime)
start.on("click", updateTime)
pause.on("click", pauseTime)


// unsure how to record this in the h1 variable or have it loop
// trying to say if start time is most recent click,continue counting


function updateTime(){
  while (performance.now(start) > performance.now(pause))
  timerID = (timerID*1000) + setInterval(1000)
}

//need syntaxs
function pauseTime(){
  timerID = clearInterval()
}

function clearTime(){
  timerID = "Stop Watch"
}
