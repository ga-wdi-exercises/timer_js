var s = 0;
var t;
var tm = true;


$("#start").on("click", startWatch); // Start

function startWatch(){
    if (tm == true){ // added this if statement to prevent multiple intervals but wont start again after Pause
     t = setInterval(function(){
      $("#timer").text(s); s++;
    }, 1000);
    tm = false;
}
}

$("#pause").on("click", pauseWatch); // pause

function pauseWatch(){
  window.clearInterval(t);
  tm = true;
  }

$("#reset").on("click", resetWatch);
//change text on reset .DONT START IT AGAIN OR IT WILL COUNT 2X


function resetWatch(){
  clearInterval(t); // added this line to make the completely stop
  $("#timer").text("0");
  tm = true;
  s = 0;
  // startWatch(); //took out this line to stop the button recounting
}
