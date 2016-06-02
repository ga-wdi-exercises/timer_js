

// this "bucket" contains intitial zero ("null?") values for seconds and timer,
// important because these values will increment throughout the program, and because once reset
// the program needs to be able to discern where it started
var timer = {
  seconds: 0,
  timerId: 0,
 //this variable links the css id's to the javascript that will act on them
  els: {
    timer: document.getElementById("timer"),
    reset: document.getElementById("reset"),
    start: document.getElementById("start"),
    pause: document.getElementById("pause"),
  },
// This function acts (increments by 1) on the seconds variable from the timer variable.
// It also passes the seconds variable to the timer variable from els and displays it as txt with ".textContent"
// The space between Time elapsed and the second quotation mark is designated for the incrementing seconds element.
  updateTime: function updateTime(){
    this.seconds++;
    this.els.timer.textContent = 'Time elapsed: ' + this.seconds;
  },

//this function set's click event listeners for each variable in "els", and tells them what they should do upon being clicked
// line 1 adds a click event listener to the variable start,
// line 2 conatains the function setupListeners
//it tells the program to listen for a click on the start #id, and contains a function that upon said click will...
//print start to the console log
//sets the interval of incrementation to 1000 milliseconds (or one second) ((Im not sure what bind means {i have looked it up, but mozillas explanation may as well have been in chinese} I believe the final bind.this ))
// i believe the final .bind(this) operates similar to return, but since this is function-seption
  setupListeners: function () {
    this.els.start.addEventListener('click', function() {
      console.log('start');
      this.els.timer.textContent = 'Time elapsed: ' + this.seconds;
      this.timerId = setInterval(this.updateTime.bind(this), 1000);
    }.bind(this));
// the first function set's click event listener for the variable paause
// the second function clear's the memory of the timer upon the #pause being clicked
    this.els.pause.addEventListener('click', function() {
      clearInterval(this.timerId);
    }.bind(this));
// this fuction adds an event listener to the #reset id element,
// it prints 'reset' to the console log,
// clear's the timer's memory
// and prints stop watch upon being clicked. 
    this.els.reset.addEventListener('click', function() {
      console.log('reset');
      this.seconds = 0;
      clearInterval(this.timerId);
      this.els.timer.textContent = 'Stop Watch';
    }.bind(this));
  }
}

timer.setupListeners();
