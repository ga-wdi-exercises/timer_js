// Button vars

var reset = document.querySelector ('#reset')
var start = document.querySelector('#start')
var pause = document.querySelector('#pause')
var timerContents = document.querySelector('#timer')

var startTest = 1

var timer = {
  seconds: 0,
  timerID: 0,
}
function updateTime (){
    timer.seconds += 1
    timerContents.innerHTML = 'Time Elapsed: ' +timer.seconds;

}

// Reset Event

reset.addEventListener ("click", function () {
      clearInterval(timeAdd);
      timer.seconds = 0;
      timerContents.innerHTML = 'Stop Watch';
      startTest = 1;

})

// Start Event

start.addEventListener ("click", function () {
    if (startTest === 1) {
      timeAdd = setInterval(updateTime, 1000)
      startTest += 1
    }
  })


// Pause Event

pause. addEventListener ("click", function () {
    clearInterval(timeAdd)
    startTest = 1;
})
