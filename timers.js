

let reset = document.getElementById('reset');
let start = document.getElementById('start');
let pause = document.getElementById('pause');

let seconds = 0;
let timerId;

start.addEventListener('click', function(){
  startCount = setInterval(updateTime, 1000);
});

pause.addEventListener('click', function(){
  clearInterval(startCount);
});

reset.addEventListener('click', function(){
  seconds = 0;
  resetCount = clearInterval(startCount);
  document.getElementsByTagName('h1')[0].innerHTML="Stop Watch";
});



function updateTime(){
 // for (let i = 0; i<20; i++){

   document.getElementsByTagName('h1')[0].innerHTML=seconds;
   seconds++;


 // }//for
}

//updateTime function

//
// document.getElementById('start').click(setInterval(updateTime, 1000));
