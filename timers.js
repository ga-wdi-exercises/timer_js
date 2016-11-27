
var time = 0;

addTime = function(){
  time = time+1;
  $('#timer').html(time);
  return time;
}
resetTime = function(intervalTime){
  clearInterval(intervalTime);
  time = 0;
  $('#timer').html(time);
}

startTime = function(){
  var intervalTime = setInterval(addTime,1000);
  $('#pause').on('click',function(){
    clearInterval(intervalTime);
  });
  $('#reset').on('click',function(){
    resetTime(intervalTime);
  })
}

$('#start').on('click', startTime);


// var Timer = {
//
// time: 0,
//
// addTime : function(){
//   time = time+1;
//   $('#timer').html(time);
//   return time;
// },
// resetTime : function(intervalTime){
//   clearInterval(intervalTime);
//   this.time = 0;
//   $('#timer').html(this.time);
// },
//
// startTime : function(){
//   var intervalTime = setInterval(this.addTime,1000);
//   $('#pause').on('click',function(){
//     clearInterval(this.intervalTime);
//   });
//   $('#reset').on('click',function(){
//     resetTime(this.intervalTime);
//   });
// }
//
// };
//
// $('#start').on('click', Time.startTime);
