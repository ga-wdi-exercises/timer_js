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

var seconds = 0
var timerId = 0

var updateTime = function (){
seconds = seconds + 1
document.getElementById('timer').innerHTML = seconds;
}


var button = document.getElementById("reset");
var handleClickEvent = function(){
  console.log("I have been clicked")
}
button.addEventListener("click", handleClickEvent)

//#5 - replace stop watch in the html with the content of teh seconds variable. Use setInterval to increment the timer by 1 every second
var button = document.getElementById("start");
var handleClickEvent = function(){
  console.log("I have also been clicked")
var setInterval = function (){
//use timerID
  }
}
button.addEventListener("click", handleClickEvent)




var button = document.getElementById("pause");
var handleClickEvent = function(){
  console.log("Don't forget about me being clicked!!")
}
button.addEventListener("click", handleClickEvent)



//take seconds var from up top, u
// insert this value into teh h1 element with id = timer
};
