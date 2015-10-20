var timer = {
  //variables to keep track of seconds elapsed and
  //the numerical ID of the setInterval command
  seconds: 0,
  timerId: 0,
  //boolean so we can know the state of the timer
  //(prevents clicking start button mutiple times)
  timerRunning:  false,
  //function to select the reset button
  getResetButton: function(){
    var button = document.getElementById("reset");
    return button;
  },
  //function to select the start button
  getStartButton: function (){
    var button = document.getElementById("start");
    return button;
  },
  //function to select the reset button
  getPauseButton: function(){
    var button = document.getElementById("pause");
    return button;
  },
  //place the listeners on each button, this function sets up the stop watch
  placeListeners: function() {
    //storing this to be used in the nested function
    var self = this;
    this.getStartButton().addEventListener("click", function(){
      //check the boolean
      if (self.timerRunning == false){
        //start the timer
        self.timerId = setInterval(function(){
          document.getElementById("timer").textContent = "Time Elapsed: " + self.seconds;
          //increment seconds
          self.seconds++;

        }, 1000); //1000 ms
        self.timerRunning = true; //toggle boolean
      }
    });
    //set up the pause button listener
    this.getPauseButton().addEventListener("click", function() {
      if (self.timerRunning == true){ //check boolean
        clearInterval(self.timerId);
        self.timerRunning = false; //toggle boolean

      }
    });
    //set up the reset button
    this.getResetButton().addEventListener("click", function() {
        self.seconds = 0; //clear seconds
        clearInterval(self.timerId); //pause timer
        document.getElementById("timer").textContent = "Stop Watch"; //change text
        self.timerRunning = false; //toggle boolean
    });
  }

}
//start the stop watch
timer.placeListeners();
