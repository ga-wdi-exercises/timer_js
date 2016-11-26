$(document).ready(function(){

  let reset = $(".controls").find("#reset");
  let start = $(".controls").find("#start");
  let pause = $(".controls").find("#pause");

console.log(reset, start, pause);
///set the variables
  let seconds = 0;
  let timerId = 0;
  let timer;

///set the click events and what happens inside them

//reset button
$(reset).on('click', function(){
  console.log("reset");
  clearInterval(timer);
  seconds = 0;
  $('#timer').html(seconds);
});
//start buttom
$(start).on('click', function(){
  console.log("start");
  timer = window.setInterval(updateTime, 1000);
  console.log(seconds)
});
//pause button
$(pause).on('click', function(){
  console.log("pause");
  clearInterval(timer);
});

//update time function
updateTime = function(){
  $('#timer').html(seconds);
  seconds = seconds+1;
};

});////END OF DOCUMENT READY
