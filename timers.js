$ (function(){

  var seconds = 0;
  var minutes = 0;
  var hours = 0;
  var timerId;

  function updateTime(){
    seconds++;
    if (seconds>59){
      seconds=0;
      minutes++;
      if (minutes>59){
        minutes=0;
        hours++;
      }
    }
  }

$('#start').on('click', function(){
  console.log('start timer');
  var timerId = setInterval(updateTime, 1000);
  // document.getElementById('timer').innerHTML = "Time elapsed: "+hours+": "+minutes+": "+seconds;
  $('#timer').text("Time elapsed: " + "0" + hours + ":" + "0" + minutes + ":" + seconds + "0");
});

$('#pause').on('click', function(){
  console.log('pause timer');
  clearInterval(timerId);
});

$('#reset').on('click', function(){
  console.log('reset timer');
  clearInterval(timerId);
  seconds=0;
  minutes=0;
  hours=0;
  $('#timer').text("Time elapsed: " + hours + " : " + minutes + ":" + seconds);
});

});
