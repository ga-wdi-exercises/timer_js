// Create Javascript selectors that target each of the timer buttons.
// Create click handlers (empty, for now) for each of the timer buttons.
// Instantiate seconds and timerId variables for your timer. The latter will make more sense after reading up on setInterval().
// Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".

var seconds = 0
var timerID = null

var updateTime = function () {
  var timerDisplay = document.getElementByTagName('h1')[0]
  timerDisplay.innerHTML = seconds
  seconds += 1
}

// RESET
var resetButton = document.getElementById('reset')

resetButton.addEventListener('click', function (evt) {
  console.log(resetButton)
})

// START
var startButton = document.getElementById('start')

startButton.addEventListener('click', function (evt) {
  console.log(startButton)
  setInterval(function () {
    updateTime
  }, 1000)
})

// PAUSE
var pauseButton = document.getElementById('pause')

pauseButton.addEventListener('click', function (evt) {
  console.log(pauseButton)
})
