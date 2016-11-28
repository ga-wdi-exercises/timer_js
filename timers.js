
  var start =('#start');
  var reset =('#reset');
  var pause =('#pause');
  var timer =('#timer');
  var count = 0;
  var timerRunning = false;

  var seconds;
  var timerId;


  function updateTime(){
    if(timerRunning === false){
    $(timer).text(count);

    seconds = setInterval(function(){
      count++;
      $(timer).text(count);
    },1000);

    timerRunning = true;
  }
}

  function pauseTime() {
    clearInterval(seconds);
    timerRunning = false;
  }
  
  function resetTime() {
    pauseTime();
    count = 0;
    $(timer).text(count);
    timerRunning = false;
  }

  $(start).on('click', updateTime);

  $(reset).on('click',resetTime);

  $(pause).on('click', pauseTime);
