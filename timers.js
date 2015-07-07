var stopwatch = { 
  seconds: 0,
  timerId: null,
  elements: {
    startButton: document.getElementById("start"),
    pauseButton: document.getElementById("pause"),
    resetButton: document.getElementById("reset"),
    h1: document.getElementsByTagName("h1")[0]
  },
  listen: function(){
    this.elements.startButton.addEventListener("click",function(){
      if(!this.timerId){
	this.timerId = setInterval(function(){
	    this.elements.h1.innerHTML = "Time Elapsed: " + this.seconds
	    this.seconds++ // seconds = seconds + 1
	}.bind(this),1000) // set interval
      }
    }.bind(this))

    this.elements.pauseButton.addEventListener("click",function(){
      this.timerId = clearInterval(this.timerId)
    }.bind(this))

    this.elements.resetButton.addEventListener("click", function(){
      this.timerId = clearInterval(this.timerId) 
      this.elements.h1.innerHTML = "Stop Watch" 
      this.seconds = 0
    }.bind(this))
  }
}
stopwatch.listen()










