//create Javascript selectors that target each of the timer buttons

//Reset Button
var startOver  = document.getElementById('reset')
startOver.addEventListener("click", stopPlease)

//Start Button
var initialize = document.getElementById('start')
initialize.addEventListener("click",GoAhead)


//Pause Button
var take_a_break = document.getElementById('pause')
take_a_break.addEventListener("event",freeze)

var seconds = 0;
var timerId=setInterval(updateTime,1000);


//Timer function
function updateTime(){
	for (seconds;seconds<1000000 ;seconds++);
	document.getElementById('timer').innerHTML=seconds
}

//pause clock function
function freeze{
	clearInterval(timerId);
}

//stop timer
function stopPlease(){
	clearTimeout(timerId);
}

//StartTimer
function clockStart() { 

	  if (timerId) return
	  	timerId = setInterval(update, 1000);
	   updateTime();
	}


