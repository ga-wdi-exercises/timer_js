window.onload = function() {

let timeElapsed = 1;
let timeElapsedDisplay = document.createElement('span');
let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");
let pauseButton = document.getElementById("pause");
let timerText = document.getElementById("timer");
let isStarted = false;

//* When "Start" is clicked, the text "Stop Watch" should be replaced by
// "Time elapsed: 0", and the count should increment every second.
let startTimer = () => {
    if(!isStarted){
            intervalID = window.setInterval(function(){
            console.log(timeElapsed);
            timerText.innerHTML = "Time elapsed: " + timeElapsed;
            timeElapsed++;
            isStarted = true;
        }, 1000);
    }
};

startButton.addEventListener("click", startTimer);

//* When "Reset" is clicked, the text should return to "Stop Watch"
let resetTimer = () => {
    window.clearInterval(intervalID);
    timerText.innerHTML = "Stop Watch";
    timeElapsed = 1;
    isStarted = false;
};

resetButton.addEventListener("click", resetTimer);


//* When "Pause" is clicked, the text should say "Time elapsed: 1",
//but stop incrementing.
    let pauseTimer = () => {
        window.clearInterval(intervalID);
    };

pauseButton.addEventListener("click", pauseTimer);

};
