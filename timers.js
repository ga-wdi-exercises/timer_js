window.onload = function(){
console.log("setup");
 
var	timer = document.getElementById('timer'),
	reset = document.getElementById('reset'),
	start = document.getElementById('start'),
	pause = document.getElementById('pause'),
	seconds = 00,
	t;

start.onclick = function (){
	clearInterval(t);
	t = setInterval(stopwatch, 100);
	timer.innerHTML = "Time elapsed: " + "0" + seconds;	

};

pause.onclick = function(){

	clearInterval(t);

};

reset.onclick = function(){
	clearInterval(t);
	seconds = "00";
	timer.innerHTML = "Stop Watch";
}



function stopwatch(){
	seconds++;
	if (seconds <= 9){
		timer.innerHTML = "Time elapsed: " + "0" + seconds;
		
	}
	if (seconds > 9){
		timer.innerHTML = "Time elapsed: " + seconds;
	}

}￼


}