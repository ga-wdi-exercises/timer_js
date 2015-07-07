// Selectors for buttons

var reset =  document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");

// seconds & timerId vars

var seconds = 0;
var timerId = null;

function updateTime(time){
    // var timerUpdate = document.getElementById("timer").innerHTML(seconds);
    seconds = time + 1;
    return seconds;
    // return timerUpdate;
}

// Event Handlers for Reset, Start & Pause

reset.addEventListener("click", function(event){
    //reset timer
    console.log("reset pushed");
});

start.addEventListener("click", function(event){
    //start timer
    console.log("start pushed");
    updateTime(seconds);
    console.log(seconds);
});

pause.addEventListener("click", function(event){
    //pause timer
    console.log("pause pushed");
});

// Increments the second counter; inserts that
// value in the <h1> element with id="timer"





