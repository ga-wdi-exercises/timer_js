var seconds = 0;
var timerId;
var controls = document.querySelector(".controls");
controls.addEventListener("click", runControls, false);

function runControls(e) {
	if(e.target !== e.currentTarget) {
		var clickedItem = e.target.id
		if(clickedItem === 'start') {
			timer.innerHTML = "Time elapsed: " + seconds;
			timerId = setInterval(updateTime, 1);
		} else if (clickedItem === 'pause') {
			clearInterval(timerId);
		} else if (clickedItem === 'reset') {
			seconds = 0;
			clearInterval(timerId);
			timer.innerHTML = "Stop Watch";
		}
	}
	e.stopPropagation();
}

function updateTime() {
	seconds++;
	timer.innerHTML = "Time elapsed: " + seconds;
}