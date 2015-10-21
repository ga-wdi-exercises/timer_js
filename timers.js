// addListeners: function () {

  var seconds = 0
  var timerId //realized i don't need to set this to anything, as its just a palceholder name

  var updateTime = function() {
    seconds++
    document.getElementById("timer").innerHTML = seconds;
  }

//StartButton is teh first time we are seeing timerId, so integer is getting stored in this variable
var startButton = function() {
  if (seconds === 0) {
    document.getElementById("timer").innerHTML = 0;
    document.body.style.background = "gray"
  }
  clearInterval(timerId)
  timerId = setInterval(updateTime, 1000)
};

//had so much trouble getting pause to work. ended up being more simple than i thought. Relied on console.log to test different methods
var pauseButton = function() {
  clearInterval(timerId)
  console.log("AM i paused yet?")
  document.body.style.background = "lightgray"
};

var resetButton = function() {
  clearInterval(timerId)
  seconds = 0
  document.getElementById('timer').innerHTML = "Stop Watch"
  document.body.style.background = "black"
};


document.getElementById("start").addEventListener("click", startButton);
document.getElementById("pause").addEventListener("click", pauseButton);
document.getElementById("reset").addEventListener("click", resetButton);




//Here is my first attempt:

// //create javascript selectors that target each of the timer buttons
// var resetButton  = document.querySelector("button");
// var handleClickEvent = function (){
//     console.log("I was clicked!")
// }
//
// button.addEventListener("click", handleClickEvent())
//
// // var startButton = document.getElementById("start");
// //
// // var pauseButton = document.getElementById("pause");
// //
// // //create click handlers for each of the timer buttons


//#3 something later to initiate - global variables
// var button = document.getElementById("start");
// var handleClickEvent = function() {
//   document.getElementById('reset')
//   var setInterval = function() {
//     //use timerID
//   }
// // }
//
// var button = document.getElementById("reset");
// var handleClickEvent = function() {
//     console.log("I have been clicked")
//   }
//   button.addEventListener("click", handleClickEvent)

//
// //#5 - replace stop watch in the html with the content of teh seconds variable. Use setInterval to increment the timer by 1 every second
//
//
// var button = document.getElementById("pause");
// var handleClickEvent = function() {
//   console.log("Don't forget about me being clicked!!")
// }
// button.addEventListener("click", handleClickEvent)


//take seconds var from up top, u
// insert this value into teh h1 element with id = timer
