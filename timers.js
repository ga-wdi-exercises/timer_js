var reset = $("#reset");
var start = $("#start");
var pause = $("#pause");
var seconds = 0;
var timerId

start.on("click",function(){
 $("#timer").html("Time elapsed: "+seconds)
   timerId = setInterval(function(){
   seconds++;
   $("#timer").html("Time elapsed: "+seconds)
 },
   1000);
 });

 pause.on("click", function(){
   clearInterval(timerId)
 })

 reset.on("click", function(){
   $("#timer").html("Stop Watch")
   seconds = 0
   clearInterval(timerId)
 })
