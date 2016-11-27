//selectors for stopwatch buttons
let $reset = $("#reset");
let $start = $("#start");
let $pause = $("#pause");
let $timer = $("#timer");

//declare variables for seconds and timerID
let seconds = 0;
let timerID = 0;
//create update timer function
let updateTimer = function(){
  timerID = setInterval(updateSeconds, 1000);
};
//increments the seconds
let updateSeconds = function(){
  seconds++;
  console.log(seconds);
  $timer.html(seconds);
};
let pauseTime = function(){
  clearInterval(timerID);
};
let resetTime = function(){
  clearInterval(timerID);
  seconds = 0;
  $timer.html("Stop Watch");
};

$reset.on("click", resetTime);
$start.on("click", updateTimer);
$pause.on("click", pauseTime);
//Bug with clicking start multiple times starts a new start ID
