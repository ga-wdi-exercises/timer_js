$(function() {

  var second;
  var intervalId;
  var count=0;
  var timerRunning = false;

  function updateTime(){
    if (timerRunning === false) {
      //this code forces the program to pause momentarily at 0 before starting count
      $('#timer').text('Time Elapsed: ' + count);
      //here we start counting up
      second = setInterval(function(){
        $('#timer').text('Time Elapsed: '+ count);
        count++
      }, 1000);
      //while timerRunning = true, we can't updateTime again
      timerRunning = true;
    };
  };

  function pauseTime() {
    clearInterval(second);
    timerRunning = false;
  };

  function resetTime() {
    pauseTime();
    count = 0;
    timerRunning = false;
    $('#timer').text('Time Elapsed: ' + count)
  };

  $('#reset').on('click', resetTime);

  $('#start').on('click', updateTime);

  $('#pause').on('click', pauseTime);
});
