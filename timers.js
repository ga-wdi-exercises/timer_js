// DOM

var start = document.getElementById("start");

var reset = document.getElementById("reset");

var pause = document.getElementById("pause");

var timerID = document.getElementById("timer");

// Event Listners

start.addEventListener("click",function(){

  seconds = setInterval(updateTime, 1000);
  // When pressed again, how do I stop it
  // from going faster.
});

reset.addEventListener("click",function(){

  clearInterval(seconds);
  counter = 0;
  timerID.innerHTML = "Stop Watch";

 });

pause.addEventListener("click",function(){

  counter = counter;
  timerID.innerHTML = "Time elapsed: " + counter;
  clearTimeout(seconds);  // Not sure if this is right or a cop out?  

});

var seconds;

var counter = 0;

function updateTime() {

  timerID.innerHTML = "Time elapsed: " + counter;
  counter += 1;

}
