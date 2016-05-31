
var start = $("#start");
var reset = $("#reset");
var pause = $("#pause");
var seconds = 0;
var timerID;

function countUp() {
    seconds++;
    $("h1").text("Time elapsed: "+seconds);
}

function startTime() {
    $("h1").text("Time elapsed: "+seconds);
    timerID = setInterval(countUp, 1000);
};

function pauseTime() {
    clearInterval(timerID);
};

function resetTime() {
    clearInterval(timerID);
    seconds = 0;
    $("h1").text("Stop Watch");
};

start.on("click", startTime);
pause.on("click", pauseTime);
reset.on("click", resetTime);
