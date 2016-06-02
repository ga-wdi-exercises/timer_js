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
        timeOn = false;
        console.log("clicked reset");
        clearInterval(timerId);
        $("#timer").text("Stop Watch")
        seconds = 0;
      }
    );
  });
//do the above functions have names? can I call the functions somehow? If not, can I add names to them?
//is setInterval like a for loop? or is that a bad analogy?
