
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');
// in progress
var seconds=setInterval(startClickEvent, 3000)
var timerId;

var startClickEvent = function(){
  console.log("Start was clicked!")
  updateTime()
}
var resetClickEvent = function(){
  console.log("Reset was clicked!")
}
var pauseClickEvent = function(){
  console.log("Pause was clicked!")
}

  start.addEventListener("click", startClickEvent);
  reset.addEventListener("click", resetClickEvent);
  pause.addEventListener("click", pauseClickEvent);

function updateTime() {
  document.getElementById('timer').innerHTML='what is this?'
}
//
//   function startCounting(){
//      console.log(seconds)
//     }
//
//     setInterval(startCounting, 1000);
//
//
// function change() {
//    document.querySelector('h1').innerHTML('seconds')
// }
//




//
// var button = document.querySelector("button")
// var handleClickEvent = function(){
//   console.log("I was clicked!")
// }
//
// button.onclick = handleClickEvent
// //or
// button.addEventListener("click", handleClickEvent)
