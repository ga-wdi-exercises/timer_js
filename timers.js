var seconds = 0;
var toggle;
var timerID = document.querySelector('#timer');
timerID.cur = timerID.textContent;

var startButton = document.querySelector('#start');
var resetButton = document.querySelector('#reset');
var pauseButton = document.querySelector('#pause');


var updateTimer = function () {
  timerID.textContent = 'Time elapsed: ' + seconds;
  console.log('I was stated');
  seconds++;
};

var handleStartClickEvents = function() {
  toggle = setInterval(updateTimer, 1000);
  startButton.removeEventListener("click", handleStartClickEvents);
};

var handleResetClickEvents = function() {
  clearInterval(toggle);
  timerID.textContent = timerID.cur;
  seconds = 0;
  startButton.addEventListener('click', handleStartClickEvents);
};

var handlePauseClickEvents = function() {
  clearInterval(toggle);
  console.log('I was paused');
  startButton.addEventListener('click', handleStartClickEvents);
};

startButton.addEventListener('click', handleStartClickEvents);
pauseButton.addEventListener('click', handlePauseClickEvents);
resetButton.addEventListener('click', handleResetClickEvents);
