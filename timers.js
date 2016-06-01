$(document).ready(function() {
  var seconds = 0;
  var timerId;
  $("#start").on("click", function() {
    timerId = setInterval(function() {
      seconds += 1;
      $("#timer").text(seconds);
    }, 1000);
  });

  $("#pause").on("click", function() {
    pauseTime();
    });

  $("#reset").on("click", function() {

  });

  function pauseTime() {
    clearInterval(function() {
      updateTime();
    });
  }
});
