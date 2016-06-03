$(document).ready(function(){
  var startButton = $("#start")
  var stopWatch = $("#timer")
  var seconds = 0;
  var pauseButton = $("#pause")
  var timerId
  var resetButton = $("#reset")


  //When I click on the start button
  startButton.on("click",function(){
    //change stopwatch to time elapse zero
    stopWatch.html("Time elapsed" + " : " + seconds)
      //every second
      timerId=setInterval(function(){
        seconds = (seconds + 1)
        stopWatch.html("Time elapsed" + " : " + seconds)
      },1000)
        //add a second
          //update time elapsed on the page
  })

    pauseButton.on("click",function(){
      clearInterval(timerId)
    })

    resetButton.on("click",function(){
      stopWatch.html("Stop Watch")
      clearInterval(timerId)
      seconds = 0
    })


});
