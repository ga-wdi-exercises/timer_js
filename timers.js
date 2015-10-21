//Create Javascript selectors that target each of the timer buttons.
//getElementById may be a way to select the buttons.

//Create click handlers for each of the timer buttons.
//addEventlistener is what I'm thinking.

var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById("start"),
    reset = document.getElementById("reset"),
    pause = document.getElementById("pause")

start.addEventlistener("click"), function(){
  var start = setInterval(function(){alert(1++), 1000);})
