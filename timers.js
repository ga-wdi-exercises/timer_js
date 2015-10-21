
alert('javascript');




//start seconds at 0
var seconds = 0;
//create variable that updates how long the timer has been on
// var timerId = function (){
//   //everytime timerId is called seconds increase by 1 second
//   seconds++;
//   //the h1 variable updates to display the seconds

// };
var startButton = document.querySelector('#start').onclick

function updateTime(){
  seconds++;
  if (seconds > 0){
  document.querySelector('#timer').innerHTML = 'Time elapsed: ' + seconds + ' seconds';
}}

//get buttons from HTML and make corresponding variables
function start(){
  timerId = setInterval(updateTime, 1000);
  startButton = ''
}
function pause(){
  clearInterval(timerId);
  var seconds = 0;
  console.log(seconds);
  startButton = 'start()'
}

function reset(){
  clearInterval(timerId);
  seconds = 0;
  document.querySelector('#timer').innerHTML = 'Stop Watch';
  startButton.onclick = (updateTime, 1000);
}




