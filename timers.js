
//>>>>>> JavaScript Timer <<<<<<<<<
//... Week 2 Wednesday Homework ...

//----------Variables:

var interval;
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var reset = document.getElementById("reset");
var counter = 0;
var active;
var tick = function(){
  counter++;
  timer.textContent = counter;
};

//----------Listeners:

start.addEventListener("click", function(){
  if (!active){
    timer.textContent = "Start";
    active = window.setInterval(tick, 1000);
  }
}.bind(this));

pause.addEventListener("click", function(){
  clearInterval(active);
  active = 0;
}.bind(this));

reset.addEventListener("click", function(){
  clearInterval(active);
  counter = 0;
  active = 0;
  timer.textContent = "0";
}.bind(this));

start.addEventListener();
