$("#start").on("click",function updateTime(){
  var time = 0;
  var count = setInterval(function(){
    time= time + 1;
    console.log(time);
    $("#timer").text(time + " s");
  },1000)
  $("#pause").on("click",function pauseClock(){
    clearInterval(count);
})
  $("#reset").on("click",function resetClock(){
    clearInterval(count);
    $("#timer").text(0 + "s");
  })
})
