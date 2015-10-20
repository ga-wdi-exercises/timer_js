var startButton = document.getElementById('start');
var resetButton = document.getElementById('reset');
var pauseButton = document.getElementById('pause');
var timerText = document.getElementById('timer');

var timer = {
  seconds: 0,
  timerId: null,
  start: false,
  red: 0,
  green: 0,
  blue: 0,
  alpha: 0.125,
  startButton: startButton,
  resetButton: resetButton,
  pauseButton: pauseButton,
  timerText: timerText,
  buttonArray: [
    this.startButton,
    this.resetButton,
    this.pauseButton
  ],
  addClickListeners: function() {
    var self = this;
    self.startButton.addEventListener('click', function( event ) {
      if(!self.start) {
        console.log('working cuz self.start = ' + self.start);
        self.updateTime();
        self.start = true;
      }
    });

    self.resetButton.addEventListener('click', function( event ) {
      self.stopTimer(self.timerId);
      self.seconds = 0;
      self.timerText.innerHTML = 'Stop Watch';
      document.body.style.backgroundColor = 'white';
    });

    self.pauseButton.addEventListener('click', function( event ) {
      self.stopTimer(self.timerId);
    });

    self.buttonArray.forEach(function(button){
      button.addEventListener('click', function(){
        self.clearClicked();
        self.toggleClicked(this);
      });
    });
  },
  updateTime: function() {
    var self = this;
    self.timerId = window.setInterval(function(){
        self.seconds += 1;
        self.timerText.innerHTML = 'Time Elapsed = ' + self.seconds;
        self.updateColor();
      }, 1000);
    },
  stopTimer: function(id) {
    clearInterval(id);
    this.start = false;
  },
  updateColor: function() {
    var bod = document.body;
    this.red = this.randomNumber() * 32;
    this.green = this.randomNumber() * 32;
    this.blue = this.randomNumber() * 32;
    this.alpha = Math.random();

    while (this.alpha < 0.1) {
      this.alpha = Math.random();
    }

    bod.style.backgroundColor = 'rgba(' + this.red + ',' + this.green + ',' + this.blue + ',' + this.alpha + ')';
  },
  randomNumber: function() {
    return Math.floor(Math.random() * 9);
  },
  toggleClicked: function(element) {
      element.className = 'clicked';
  },
  clearClicked: function(){
    for (var i = 0; i < this.buttonArray.length; i++) {
      this.buttonArray[i].className = '';
    }
  },
  init: function() {
    this.addClickListeners();
  }
};

timer.init();

// var seconds = 0;
// var timerId;
// var red, green, blue, alpha, goingUp;
// red = 0;
// green = 0;
// blue = 0;
// alpha = 0.125;
// goingUp = true;
// var start = false;

// var startButton = document.getElementById('start');
// var resetButton = document.getElementById('reset');
// var pauseButton = document.getElementById('pause');
// var timerText = document.getElementById('timer');
//
// var buttonArray = [startButton, resetButton, pauseButton];
//
// startButton.addEventListener('click', function( event ) {
//   if(!start) {
//     updateTime();
//     start = true;
//   }
// });
//
// resetButton.addEventListener('click', function( event ) {
//   stopTimer(timerId);
//   seconds = 0;
//   timerText.innerHTML = 'Stop Watch';
//   document.body.style.backgroundColor = 'white';
// });
//
// pauseButton.addEventListener('click', function( event ) {
//   stopTimer(timerId);
// });
//
// buttonArray.forEach(function(button){
//   button.addEventListener('click', function(){
//     clearClicked();
//     toggleClicked(this);
//   });
// });

// function updateTime() {
//   //window or document.setIneterbal?
//   // if (!timerId) {
//     timerId = window.setInterval(function(){
//       seconds += 1;
//       timerText.innerHTML = 'Time Elapsed = ' + seconds;
//       updateColor();
//     }, 1000);
//   // }
// }
//
// function stopTimer(id) {
//   clearInterval(id);
//   start = false;
// }

// function updateColor() {
//   var bod = document.body;
//   red = randomNumber() * 32;
//   green = randomNumber() * 32;
//   blue = randomNumber() * 32;
//   alpha = Math.random();
//
//   while (alpha < 0.1) {
//     alpha = Math.random();
//   }
//
//   // if (goingUp && alpha <= 1.0) {
//   //   alpha += 0.125;
//   // } else if (alpha > 1.0) {
//   //   alpha = 1.0;
//   //   goingUp = false;
//   // } else if (!goingUp && alpha > 0) {
//   //   alpha -= 0.125;
//   // } else {
//   //   goingUp = true;
//   // }
//     // red = randomNumber() * 32;
//     // green = randomNumber() * 32;
//     // blue = randomNumber() * 32;
//
//   bod.style.backgroundColor = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
//   // bod.style.backgroundColor = 'rgba(27,133,61,' + alpha + ')';
// }
//
// function randomNumber() {
//   return Math.floor(Math.random() * 9);
// }

// function toggleClicked( element ) {
//   element.className = 'clicked';
// }
//
// function clearClicked() {
//   for (var i = 0; i < buttonArray.length; i++) {
//     buttonArray[i].className = '';
//   }
// }
