var pauseButton = document.getElementById("pause");
var resetButton = document.getElementById("reset");
var startButton = document.getElementById("start");
var seconds = 0;
var timerId = 0;
/* START Button*/
startButton.addEventListener ("click", function (){
  console.log ("I've starting the timer");
  if (timerId === 0) {
    document.getElementById("timer").textContent="Time elapsed: ";
    timerId = setInterval(updateTime, 1000);
  }
  });

  /* RESET Button*/
  resetButton.addEventListener ("click", function (){
    console.log ("I've reset your timer to 0");
    document.getElementById("timer").textContent="Stop Watch";
    clearInterval(timerId);
    seconds = 0;
    //document.getElementById("timer").textContent="Stop Watch";
  });

  /* PAUSE Button*/
  pauseButton.addEventListener ("click", function (){
    console.log ("I've paused it for you. You can restart or reset to 0");
    clearInterval(timerId);
    timerId = 0;
  });

  /*UpdateTime Function*/
  var updateTime = function() {
    seconds++;
    document.getElementById("timer").textContent = "Time elapsed: " + seconds;
  };
