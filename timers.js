var timer = {

  addListeners: function() {
    var seconds = 0;
    var timerID = 0;
    var updateTime = function() {
        seconds = seconds + 1
        document.getElementById("timer").innerHTML = seconds;
      };

    var startClick = function() {
      if (seconds === 0){
        document.getElementById("timer").innerHTML=0;
      }
      clearInterval(timerID)
      timerID = setInterval(updateTime,1000)
    };

    var pauseClick = function() {
      clearInterval(timerID)
    };

    var resetClick = function() {
        clearInterval(timerID);
        seconds = 0
        document.getElementById("timer").innerHTML = "Stop Watch"
      };

    document.getElementById("start").addEventListener("click", startClick);
    document.getElementById('pause').addEventListener("click", pauseClick);
    document.getElementById('reset').addEventListener("click", resetClick);
  }(),

}
