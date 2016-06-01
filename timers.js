
var stopwatch = {
  seconds: 0,
  timerId: null,
  elements: {
    startButton: document.getElementById("start"),
    pauseButton: document.getElementById("pause"),
    resetButton: document.getElementById("reset"),
    h1: document.getElementsByTagName("h1")[0]
  },
  //This associates the javascript button actions to the html
  listen: function(){
  //listens to the event of the start button click
    this.elements.startButton.addEventListener("click",function(){
      if(!this.timerId){
	this.timerId = setInterval(function(){
	    this.elements.h1.innerHTML = "Time Elapsed: " + this.seconds
	    this.seconds++ // adds a second as the seconds pass
	}.bind(this),1000) // set interval
      }
    }.bind(this))

    this.elements.pauseButton.addEventListener("click",function(){
      this.timerId = clearInterval(this.timerId)
    }.bind(this))
    //listens for the click event on the pause button

    this.elements.resetButton.addEventListener("click", function(){
      this.timerId = clearInterval(this.timerId)
      this.elements.h1.innerHTML = "Stop Watch"
      this.seconds = 0
    }.bind(this))
  }//listens for the click event on the reset button
}
stopwatch.listen()
//makes the whole stopwatch function listen for clicks on all buttons
