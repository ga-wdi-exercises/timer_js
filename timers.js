var timer = {

intervalID: null,
value: 0,

init: function(){
  document.getElementById("start").addEventListener("click", function() {
    //checking for null value prevents setInterval from being clicked twice and speeding up; need to reset to null in reset and pause
    if(this.intervalID === null){
      this.intervalID = window.setInterval(function(){
        document.getElementById("timer").innerText = "Time Elapsed: " + this.value++;
      }.bind(this), 1000);
    }
  }.bind(this));

  document.getElementById("pause").addEventListener("click", function() {
    window.clearInterval(this.intervalID);
    this.intervalID = null;
  }.bind(this));

  document.getElementById("reset").addEventListener("click", function(){
    window.clearInterval(this.intervalID);
    this.intervalID = null;
    this.value = 0;
    document.getElementById("timer").innerText = "Time Elapsed: " + this.value;
  }.bind(this));
}
}

timer.init();

//adding comments branch
