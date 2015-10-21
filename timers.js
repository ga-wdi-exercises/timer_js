var timer = {
  seconds:0,
  timerId:0,
}
//step one create JavaScript Selectors
document.getElementById("start");
document.getElementById("pause");
document.getElementById("reset");

//Create click handlers rough code started hit time cutoff
document.getElementById("start").addEventListener("click", function(){
    document.getElementById("begin"). = "";
});

  document.getElementById("pause").addEventListener("click", function(){
    document.getElementById(""). = "";
  });

    document.getElementById("reset").addEventListener("click", function(){
    document.getElementById(""). = "";
    });

//pasted in solution to try and see how it worked - and try to make it work in a diff way
setupListeners:function () {
  this.els.start.addEventListener('click',function(){
    console.log('start');
    this.els.timer.textContent = 'Time elapsed: ' + this.seconds;
    this.timerId = setInterval(this.update.bind(this), 1000);
  }.bind(this));

  this.els.pause.addEventListener('click', function() {
        clearInterval(this.timerId);
      }.bind(this));

      this.els.reset.addEventListener('click', function() {
        console.log('reset');
        this.seconds = 0;
        clearInterval(this.timerId);
        this.els.timer.textContent = 'Stop Watch';
      }.bind(this));
  }
}
timer.setupListeners();
