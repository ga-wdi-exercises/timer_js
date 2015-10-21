window.alert('JS is working');

var seconds = 0;

var timerId;

var reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
  clearInterval(startTime)
  // console.log('I was clicked');
})

var start = document.querySelector('#start');
start.addEventListener('click', startTimer);

function startTimer(){
  startTime = setInterval(function(){
  timer.innerText = 'time elapsed: ' + (seconds++).toFixed(2);
  }, 1000)
}
//   function updateTime(){
//     seconds++;
//     document.getElementById('timer').innerHTML=seconds;
//       updateTime();
//   timerId = setInterval(updateTime, 1000);
// }
  // document.getElementsByClassName('seconds')[0].style.display = 'block'

var pause = document.querySelector('#pause');
  pause.addEventListener('click', pauseTimer);
    function pauseTimer(){
    clearInterval(startTime)
    }




// var timerId =
// var i=0,timer= setInterval(function(){i++},1000);




// var songTimer;
// start.addEventListener('click', function(){
//   songTimer = setInterval(singAnnoyingSong, 100);
// });
// stop.addEventListener('click', function(){
//   clearInterval(songTimer);
// });
//
// function sayHello(){
//   console.log("Hi there!")
// }
// setInterval(sayHello, 1000);
//
