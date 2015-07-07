var reset = document.getElementById('reset')
var start = document.getElementById('start')
var pause = document.getElementById('pause')
var timer = document.getElementById('timer')
var secs = 0;
var timerID;

function timerCount() {
  secs++
  timer.innerHTML = secs
};


start.addEventListener('click', function() {
  console.log('start');
  timer.innerHTML = 'time ' +secs;
  timerID = setInterval(timerCount, 1000)
  });

pause.addEventListener('click', function(){
  console.log('pause');
  clearInterval(timerID);
});


reset.addEventListener('click', function(){
  console.log('reset');
  start = 0;
  clearInterval(timerID);
  timer.innerHTML = 'stop'
});


//
// function timerSetInterval(){
//   timer.setInterval(timerCount, 5)
// }
