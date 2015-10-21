var seconds = 0;

var timerId;

var reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
  timer.innerText = 'Stop Watch';
  seconds = 0;
  clearInterval(startTimer)
})

var start = document.querySelector('#start');
  start.addEventListener('click', startTimer);
  // start.removeEventListener('click', startTimer);

function startTimer(){
  startTimer = setInterval(function(){
    timer.innerText = 'time elapsed' + ' ' + (seconds++).toFixed(2);
  }, 1000)
}

var pause = document.querySelector('#pause');
  pause.addEventListener('click', pauseTimer);
    function pauseTimer(){
    clearInterval(startTimer)
    }

// function sayHello(){
//   console.log("Hi there!")
// }
// setInterval(sayHello, 1000);
//
