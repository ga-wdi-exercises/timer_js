/*var timer = {

}*/
var tick;
var timer = document.getElementById('timer');
var reset = document.getElementById('reset');
var start = document.getElementById('start');
var pause = document.getElementById('pause');

var update = function(){
  tick = setInterval(increment,1000);
}
var time = 0;
function increment(){
  timer.textContent = "Time Elapsed: "+time;
  time++;
}

start.onclick = update;
pause.onclick = function(){
  clearInterval(tick);
}
reset.onclick = function(){
  time = 0;
  timer.textContent = "Time Elapsed: "+time;
}
