var reset = $("#reset");
var start = $("#start");
var pause = $("#pause");
var seconds = 0;
var timerId;
var timerIdReset = true;

$(document).on("ready", function(){
  start.on("click",function(){
    if (timerIdReset == true){
    timerId = setInterval(function(){
      seconds++;
    $("#timer").html("Time elapsed: " + seconds)
      }, 100);
      timerIdReset = false;
   }
});
   pause.on("click", function(){
     clearInterval(timerId)
     timerIdReset = true;
   })

   reset.on("click", function(){
     $("#timer").html("Stop Watch")
     seconds = 0;
     clearInterval(timerId)
     timerIdReset = true;
     $("#timer").html("Time elapsed: " + seconds)
    })
  });


//Shorter code, same result.
/*
var seconds = 0;
var timerId;
var timerIdReset = true;

$(document).on("ready", function(){
  $("#start").on("click", function(){
      if(timerIdReset == true){
          timerId = setInterval(function(){
              seconds += 1;
              $("h1").text("Time elapsed: " + seconds);
          }, 100);
          timerIdReset = false;
      }
  });

  $("#pause").on("click", function(){
      clearInterval(timerId);
      timerIdReset = true;
  });

  $("#reset").on("click", function(){
      clearInterval(timerId);
      timerIdReset = true;
      seconds = 0;
      $("h1").text("Time elapsed: " + seconds);
  });
});
*/
