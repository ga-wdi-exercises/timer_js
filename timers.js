$(document).ready(function(){ /*code in here*/

var start = $("#start");
var stop = $("#reset");
var pause = $("#pause");
var timer = 0;

start.on("click", somethingElse);

function startTimer(){
  timer+=1;
  $("h1").html("Time elapsed: " + timer);
};

function somethingElse(){
awesomeTimer = setInterval(startTimer, 1000);
}

stop.on("click", function(){
clearInterval(awesomeTimer);
$("h1").html("Stop Watch");
timer=0;
})

pause.on("click", function(){
 clearInterval(awesomeTimer);
})


})
