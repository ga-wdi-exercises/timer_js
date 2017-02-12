$(function() {
console.log("fartbox");

var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('pause'),
    clear = document.getElementById('reset'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}

});


// $('#reset').on('click', function(){
// 	document.getElementById("timer").innerHTML = "00:00:00";
// 	    seconds = 0; minutes = 0; hours = 0;
// 	console.log('reset button pressed');
// });
//
// $('#start').on('click', function(){
// 	document.getElementById("timer").innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
// 		console.log('start button pressed');
// });
//
// $('#pause').on('click', function(){
// 	    clearInterval(timerId);
// 			console.log('pause button pressed');
// });
//
//
// var seconds = 0, minutes = 0, hours = 0, t;
// var timerId = setInterval(updateTime, 1000);
//
// updateTime();
//
// function updateTime() {
// 	seconds++;
// 	    if (seconds >= 60) {
// 	        seconds = 0;
// 	        minutes++;
// 	        if (minutes >= 60) {
// 	            minutes = 0;
// 	            hours++;
// 	        }
// 				}
// 			}
//
// 			updateTime();

// });
