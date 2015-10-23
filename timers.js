
// variables for each button
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');

//start button first click - timer start
  //add event listener
start.addEventListener("click", startClickEvent);
  //start button first click - timer start
seconds=0;
function startClickEvent(evt) {
  //set clock count
  timerId=setInterval(updateTime, 1000)
};
  //increment counter and update screen
function updateTime(){
  seconds++
  document.querySelector('#timer').innerHTML=seconds
};
  //console.log for my benefit
  console.log('seconds', seconds++);

//pause button - stops counting and text changes to ""'Elapsed Time: '+ seconds"
  //add event listener
pause.addEventListener('click', pauseClickEvent);
  //stop counter
function pauseClickEvent(evt) {
  console.log('pause clicked')
  clearInterval(timerId)
  document.querySelector('#timer').innerHTML='Elapsed Time: '+seconds
};

//reset button - text returns to "stop watch"
  //add event listener
reset.addEventListener("click", resetClickEvent);
  //reset header from time to 'Stop Watch'
function resetClickEvent(evt) {
  console.log('reset clicked')
  document.querySelector('#timer').innerHTML='Stop Watch'
  seconds=0
};
