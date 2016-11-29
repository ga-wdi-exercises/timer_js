window.onload = function() {
  console.log("setup");

  var timer = document.getElementById('timer'),
      reset = document.getElementById('reset'),
      start = document.getElementById('start'),
      pause = document.getElementById('pause'),
      seconds = 0;

      /* setInterval function */
      start.onclick = function() {
        var seconds = window.setInterval(function() { updateTime() }, 1000);
        function updateTime() {
                seconds++;
                $('#timer').text("Time Elapsed: " + seconds);
          }
                $('#timer').innerHTML(seconds);
      }

      pause.onclick = function pauseTime() {
          window.clearInterval(seconds);
          $('#pause').on('click', pauseTime);
      }

      reset.onclick = function() {

      }

};
