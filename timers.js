// Button vars

var reset = document.querySelector ('#reset')
var start = document.querySelector('#start')
var pause = document.querySelector('#pause')


var timer = {
  seconds: 0,
  timerID: 0,
}
function updateTime (){
    timer.seconds += 1
    document.querySelector('#timer').innerHTML = timer.seconds;

}

function pauseTimer(){
    clearInterval(timeAdd)

}

// Reset Event

reset.addEventListener ("click", function () {

})

// Start Event

start.addEventListener ("click", function () {
  if (document.querySelector('#timer').innerHTML === 'Stop Watch'){
  timeAdd = setInterval(updateTime, 1000);
  }
})

// Pause Event

pause. addEventListener ("click", function () {
    pauseTimer();
})
