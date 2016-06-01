
var start = $("#start");
var reset = $("#reset");
var pause = $("#pause");
var seconds = 0;
var timerID;

function countUp() {
    seconds = seconds+.01;
    $("h1").text("Time elapsed: "+seconds.toFixed(2));
}

function startTime() {
    $("h1").text("Time elapsed: "+seconds);
    timerID = setInterval(countUp, 10);
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
