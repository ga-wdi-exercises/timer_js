$( document ).ready(function(){
// timer & buttons
let $timer = $(timer);
let $reset = $(reset);
let $start = $(start);
let $pause = $(pause);
// timeout variables
let seconds = 0;
let timerId;

$reset.on('click', resetTime);
$start.on('click', updateTime);
$pause.on('click', pauseTime);

// Function that is called when START is clicked
function updateTime(){
  timerId = setInterval(updateSeconds ,1000);
  // updates seconds variable and updates stopwatch H1
  function updateSeconds(){
    seconds += 1;
    console.log(seconds);
    $timer.html(seconds);
  }
}

// Function that is called when PAUSE is clicked
function pauseTime(){
  clearInterval(timerId);
}

// Funtion CLEARS seconds & interval, also reset "Stop Watch"
function resetTime(){
  clearInterval(timerId);
  seconds = 0;
  $timer.html("Stop Watch");
}


});//Doucment ready end
