$(function() {

  var second = 0;
  var intervalId;

  $('#reset').on('click', function(event){
    console.log('reset was clicked');
  });

  $('#start').on('click', function(event){
    console.log('start was clicked');
    intervalId = setInterval(function(){
      second++;
          });
      //change timer value to counter
      $('#timer').text('Time Elapsed: ');
      $('#counterTime').val(intervalId).show();
  });

  $('#pause').on('click', function(event){
    console.log('pause was clicked');
  });

  //reset function
  var resetTimer = function(event){
    clearInterval(intervalId);
  }
});
