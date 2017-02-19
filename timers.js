$(document).ready(function(){

  var seconds = 0;
  var minutes = 0;
  var timerID;
  var pauseRemoveCyan = function() {$('#pause').removeClass('cyan');};
  var startRemoveCyan = function() {$('#start').removeClass('cyan');};

  function updateTime() {
    seconds++;

    // increment minutes
    if(seconds > 59) {
      minutes++;
      seconds = 0;
    }
    //concatenate zero to single digit
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    //displays minutes & seconds
    $('#timer').text(minutes + " : " + seconds);
  }

  //starts timer
  $('#start').on('click', function(){
    timerID = setInterval(updateTime, 1000);
    $(this).addClass('cyan');
    pauseRemoveCyan();
  })

  //pauses timer
  $('#pause').on('click', function(){
    clearInterval(timerID);
    $(this).addClass('cyan');
    startRemoveCyan();
  })

  //resets timer
  $('#reset').on('click', function(){
    clearInterval(timerID);
    seconds = 0;
    pauseRemoveCyan();
    startRemoveCyan();
    $('#timer').text("Stop Watch");
  })

})
