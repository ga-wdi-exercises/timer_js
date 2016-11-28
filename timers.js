$(function() {

  var second;
  var intervalId;

  function updateTime(){
    var count = 0;
    second = setInterval(function(){
      $('#timer').text('Time Elapsed: '+ count);
      count++
    }, 1000);
  };

  $('#reset').on('click', function(event){
    console.log('reset was clicked');
  });

  $('#start').on('click', updateTime);

  $('#pause').on('click', function(event){
    console.log('pause was clicked');
  });

  //reset function
  var resetTimer = function(event){
    clearInterval(intervalId);
  }
});
