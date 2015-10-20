
var resetButton = document.querySelector("#reset");
var startButton = document.querySelector("#start");
var pauseButton = document.querySelector("#pause");
var h1 = document.querySelector("#timer");
var seconds = 0;
var timerId;

function updateTime() {
    h1.textContent = "Time Elapsed: " + seconds;
    var newSeconds = seconds++;
    h1.textContent = "Time Elapsed: " + newSeconds;
};

function interval() {
  secondsTimer = setInterval(updateTime, 1000);
};

startButton.addEventListener("click", interval);

resetButton.addEventListener();


// pauseButton.addEventListener();




// 5.
