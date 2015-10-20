
var resetButton = document.querySelector("#reset");
var startButton = document.querySelector("#start");
var pauseButton = document.querySelector("#pause");
var h1 = document.querySelector("#timer");
var h1new = h1.cloneNode(true);
var seconds = 0;
var timerId;

function updateTime() {
    h1.textContent = "Time Elapsed: " + seconds;
    newSeconds = seconds++;
    h1.textContent = "Time Elapsed: " + newSeconds;
};

function interval() {
  secondsTimer = setInterval(updateTime, 1000);
};

startButton.addEventListener("click", interval);

pauseButton.addEventListener("click", function(){
  clearInterval(secondsTimer);
});

resetButton.addEventListener("click", function(){
  clearInterval(secondsTimer);
  seconds = 0;
  h1.textContent = h1new.textContent;
}); 







// 5.
