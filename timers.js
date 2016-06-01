//figure out references of variables

var reset = $("#reset");
var start = $("#start");
var pause = $("#pause");

function seconds(){
  timerID/1000
}

var timerID = $("#timer");

reset.on("click", clearTime)
start.on("click", updateTime)
pause.on("click", pauseTime)


// unsure how to record this in the h1 variable or have it loop
// trying to say if start time is most recent click,continue counting


function updateTime(){
  while !updateTime,!pauseTime
  timerID = (timerID*1000) + setInterval(1000)
}

//need syntaxs
function pauseTime(){
  timerID = clearInterval()
}

function clearTime(){
  timerID = "Stop Watch"
}
