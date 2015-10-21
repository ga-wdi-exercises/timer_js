var resetB=document.querySelector('#reset');
var startB=document.querySelector('#start');
var pauseB=document.querySelector('#pause');
var seconds;
var timerId;

resetB.addEventListener("click", resetTimer);
startB.addEventListener("click", startTimer);
pauseB.addEventListener("click", stopTiming);
function startTimer(){
  startB.removeEventListener('click', clearInterval(timerId));
  var head1=document.querySelector('#timer');

    timerId=window.setInterval(updateTime, 500);
    console.log("time started");
  }

function updateTime(){
  seconds=seconds+1;
  var display=seconds.toString();
  var head1=document.querySelector('#timer');
  head1.innerHTML=display;
}

function stopTiming(){
  clearInterval(timerId);
  console.log("time stopped");
}

function resetTimer(){
  clearInterval(timerId);
  seconds=0;
  var head1=document.querySelector('#timer');
    head1.innerHTML="Stop Watch";

}
