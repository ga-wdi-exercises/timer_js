



var MyTime = (function() {
	var Hb, Mb, Sb, t, hrs, mins, sec, str, intervalID, pauseB, resetB, startB;
    
    function displayIt() {
    	Hb.innerHTML = hrs;
    	Mb.innerHTML = mins;
    	Sb.innerHTML = sec;    	
    }

    function calculate() {
    	sec = t % 60;
    	mins = t / 60;
    	mins = mins % 60;
    	hrs = t / 3600;
    	hrs = Math.floor(hrs);
    	mins = Math.floor(mins);
    	sec = Math.floor(sec);
    }


    function startIt() {
    	t++;
    	calculate();
    	displayIt();
    }

    function pauseIt() {
    	clearInterval(intervalID);    	
    }

    function resetIt() {
    	t = 0;
    	if(intervalID !== undefined) {
    		clearInterval(intervalID);
    	}
    	calculate();    	   
    	displayIt();
    }

    function onStartClick() {
    	intervalID = setInterval(startIt, 1000);
    }

    function onPauseClick() {
    	pauseIt();
    }

    function onResetClick() {
    	resetIt();
    }

    function init() {
		Hb = document.getElementById("hrs");
		Mb = document.getElementById("mins");
		Sb = document.getElementById("sec");

		pauseB = document.getElementById("pause");
		startB = document.getElementById("start");
		resetB = document.getElementById("reset");

		pauseB.addEventListener('click', onPauseClick);
		startB.addEventListener('click', onStartClick);
		resetB.addEventListener('click', onResetClick);

		resetIt();
		
	}

	return {
		init: init
	};
})();