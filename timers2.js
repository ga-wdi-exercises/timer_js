alert("JS is working")

var timer = document.getElementById('timer');

//start button: #start

var startButton = document.getElementById('start');

//reset button: #reset

var resetButton = document.getElementById('reset');

//pause button: #pause

var pauseButton = document.getElementById('pause');

var second = 0;

//when I click on start button
startButton.addEventListener('click', startTimer )
// 1. timer text changes from Stop Watch to Time elapsed:0 and the count should increment per second


function startTimer(){
// replace text in #timer with time counter

startTime = setInterval(function(){
timer.innerText = 'time elapsed: ' + (second++).toFixed(2);
}, 1000)
}
//when I click the pause button
pauseButton.addEventListener('click', pauseTimer);

function pauseTimer(){
clearInterval(startTime)
}

//when I click the reset button

resetButton.addEventListener('click', resetTimer);

function resetTimer(){
clearInterval(startTime)
second = 0
timer.innerText = 'Stop Watch'
}
