$(document).ready(function() {
  var time = 0;
  $("#start").on("click", function() {
    setInterval(function() {
      time += 1;
      $("#timer").html(time);
    }, 1000);
  });
});
