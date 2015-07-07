var timer = {

  var seconds = 0;
  var timerId;
  var countstart;

  function timeStart() {
  seconds = 0;
  document.getElementById("start").addEventListener("click", timerId)
  timerId = setInterval()
  document.getElementById("timer").innerHTML = updateTime()
  }

  function timePause() {
    seconds = 1;
    var timePause = document.getElementById("pause").addEventListener("click", )
  }

  function timeReset() {
    seconds = 0;
    timerId = 0;
    var timeReset = document.getElementById("reset").addEventListener("click", )
  }

  function updateTime() {
    seconds ++;
    document.getElementById("timer").innterHTML =
  }

}
