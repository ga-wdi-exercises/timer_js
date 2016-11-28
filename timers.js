$(function() {


var seconds = i;
var timerId = "Time elapsed" + seconds;

  
  $('#start').on('click', function(){
    var updateTime = function() {

            timerId = setInterval(updateTime, 1000);

        $('#timer').text(timerId);
    };
    updateTime();
  });

  $('#reset').on('click', function(){
    $('#timer').text('Stop Watch');
  });

});
