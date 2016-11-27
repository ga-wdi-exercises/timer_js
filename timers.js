let reset = document.getElementById('reset');
let start = document.getElementById('start');
let pause = document.getElementById('pause');
let seconds = 0;
let timerId;


function updateTime(){
    document.getElementsByTagName('h1')[0].innerHTML=seconds;
    seconds++;}



start.addEventListener('click', function() {
    startCount = setInterval(updateTime, 1000);
});


pause.addEventListener('click', function() {
    clearInterval(startCount);
});


reset.addEventListener('click', function(){
    seconds = 0;
    clearInterval(startCount);
    document.getElementsByTagName('h1')[0].innerHTML= "Stop Watch";
});
