// reset button
const reset = $('#reset');
// start button
const start = $('#start');
// pause button
const pause = $('#pause');

const timer = $('#timer');

var seconds = 0;
var timerId = 0;

reset.on("click", function () {
  clearInterval(timerId);
  seconds = 0;
  timer.text('Stop Watch');

});

start.on("click", function () {
  timer.text(`Time elapsed: ${seconds}`);
  timerId = setInterval(updateTime, 1000);
});

pause.on("click", function (){
  clearInterval(timerId);
});

function updateTime () {
  seconds++;
  timer.text(`Time elapsed: ${seconds}`);
}
