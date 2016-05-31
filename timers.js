var s = 0;
var t;

$("#start").on("click", startWatch); // Start

function startWatch(){

     t = setInterval(function(){
      $("#timer").text(s); s++;
    }, 1000);
}

$("#pause").on("click", pauseWatch); // pause

function pauseWatch(){
  window.clearInterval(t);
  }

$("#reset").on("click", resetWatch);
//change text on reset .DONT START IT AGAIN OR IT WILL COUNT 2X


function resetWatch(){
  $("#timer").text("0");
  s = 0;
  startWatch();
}
