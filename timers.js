
// variables for each button
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');

//selectors for each timer button
start.addEventListener("click", startClickEvent);
reset.addEventListener("click", resetClickEvent);
pause.addEventListener("click", pauseClickEvent);

//event handlers
var startClickEvent = function(){
  console.log("Start was clicked!")
  //timer
  var seconds=setInterval(click, 1000)
  document.getElementById('timer').innerHTML=seconds
  //make sure timer restarts when Start is clicked again
}
var resetClickEvent = function(){
  console.log("Reset was clicked!")
  //stop timer with clearInterval()
  //reset timer to zero
  //replace time with original Stop Watch text
  document.getElementById('timer').innerHTML='Stop Watch'
}
var pauseClickEvent = function(){
  console.log("Pause was clicked!")
  //create clearInterval() to reset timer - stop but don't reset
  clearInterval(seconds)
}


// update seconds variable
function updatTime() {

}

//pass seconds update to
function updateTime() {
  document.getElementById('timer').innerHTML=seconds
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
