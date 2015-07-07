// Selectors for buttons

var reset =  document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");

// seconds & timerId vars

var seconds = 0;
var timerId = null;
var timer;
function updateTime(time){
    // var timerUpdate = document.getElementById("timer").innerHTML(seconds);
    seconds = time + 1;
    return seconds;
    // return timerUpdate;
}

// Event Handlers for Reset, Start & Pause

reset.addEventListener("click", function(event){
    //reset timer

    // clearInterval(timer);
    window.location.reload();
});

start.addEventListener("click", function(event){
    //start timer
    var startClickCheck = true;

    if (startClickCheck == true){
    timer = setInterval(function(){
                updateTime(seconds);
                document.getElementById("timer").innerHTML = seconds;
                }, 1000);
    }
    startClickCheck = false;
});

pause.addEventListener("click", function(event){
    //pause timer
    clearInterval(timer);
});






