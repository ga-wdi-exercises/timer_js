// Selectors for buttons

var reset =  document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");

// seconds & timerId vars

var seconds = null;
var timerId = null;

function clickedEvent (){

}
// Event Handlers for Reset, Start & Pause

reset.addEventListener("click", function(event){
    //reset timer
    console.log("reset pushed");
});

start.addEventListener("click", function(event){
    //start timer
    console.log("start pushed");
});

pause.addEventListener("click", function(event){
    //pause timer
    console.log("pause pushed");
});

// Increments the second counter; inserts that
// value in the <h1> element with id="timer"

function updateTime(seconds){
    // var timerUpdate = document.getElementById("timer").innerHTML(seconds);
    seconds ++;
    // return timerUpdate;
}


