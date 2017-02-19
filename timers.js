$(function () {

  var seconds = 0;
  var timerId;

  function updateTime() {
    seconds++;
    console.log('start');

  };


$('#start').click(function() {
  setInterval(seconds, 1000);
  $('#timer').text('Time Elapsed: ' + seconds);



});
$('#pause').click(function() {
  clearInterval('#start');


});
$('#reset').click(function() {
  clearInterval('#start');
  $('#timer').text('Stop Watch')
  seconds = 0;



});
updateTime();
});
