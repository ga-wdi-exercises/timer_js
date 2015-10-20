var startButton = document.getElementById('start');
var resetButton = document.getElementById('reset');
var pauseButton = document.getElementById('pause');
var timerText = document.getElementById('timer');
var bar = document.getElementById('bar');
var level = document.querySelector('.level');

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

var stopwatch = {
  init: function() {
    timerText.innerHTML = 'Stopwatch';
    level.style.backgroundColor = 'rgba(0,176,0,1.0)';
    this.getInitialSeconds();
    this.seconds = this.initialSeconds;
  },
  getInitialSeconds: function() {
    this.initialSeconds = parseInt(prompt('How long?'));
  },
  addClickListeners: function() {
    var self = this;
    startButton.addEventListener('click', function() {
      self.init();
      self.updateTime();
    });
  },
  updateTime: function(){
    var self = this;
    self.timerId = window.setInterval(function(){
        self.seconds -= 1;
        timerText.innerHTML = 'Seconds Left = ' + self.seconds;
        self.updateLevel();
      }, 1000);
  },
  updateLevel: function(){
    var self = this;
    self.percent = self.seconds / self.initialSeconds * 100;
    level.style.width = self.percent + '%';

    if (self.seconds === 0){
      self.stopTimer(self.timerId);
    } else if (self.percent <= 10) {
      level.style.backgroundColor = 'red';
    } else if (self.percent <= 50) {
      level.style.backgroundColor = 'yellow';
    }
  },
  stopTimer: function(id) {
    clearInterval(id);
    this.start = false;
  }
};

stopwatch.addClickListeners();
