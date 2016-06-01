$(document).ready(function() {
  var seconds = 0;
  var timerId;
  var timeOn = false;
  $("#start").on("click", function() {
    console.log("clicked start");
    if (timeOn == false) {
      timeOn = true;
      timerId = setInterval(function() {
        seconds += 1;
        $("#timer").text(seconds);
      }, 1000);
    }
  });

  $("#pause").on("click", function() {
      if (timeOn == true) {
      timeOn = false;
      console.log("clicked pause");
      clearInterval(timerId);
    }
  });

  $("#reset").on("click", function() {
        console.log("clicked reset");
        clearInterval(timerId);
        $("#timer").text("Stop Watch")
        seconds = 0;
      }
    });
  });
