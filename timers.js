
// variables for each button
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');

//selectors for each timer button
start.addEventListener("click", startClickEvent);
// reset.addEventListener("click", resetClickEvent);
// pause.addEventListener("click", pauseClickEvent);

//start button first click - timer start
var seconds=0;
function startClickEvent(evt) {
  //set clock count

  var timerId=setInterval(updateTime, 1000)
}


function updateTime(){
//increment counter and update screen
  seconds++
  document.querySelector('#timer').innerHTML=seconds
}



console.log('seconds', seconds++);
