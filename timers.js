//TODO: refactor using OOP princinples
//TODO: fix countdown so msuic playing not in timeout
//TODO: fix animation
//TODO: add minutes and seconds for coutdown, change selection to input or drop down

// song played when countdown ends is 'I Know The Truth' by Pretty Lights

var startButton = document.getElementById('start');
var resetButton = document.getElementById('reset');
var pauseButton = document.getElementById('pause');
var timerText = document.getElementById('timer');
var bar = document.getElementById('bar');
var level = document.querySelector('.level');
var song = document.getElementById('song');
var title = document.querySelector('title');

var timer = {
  seconds: 0,
  timerId: null,
  start: false,
  red: 0,
  green: 0,
  blue: 0,
  alpha: 0.125,
  onStopWatch: true,
  addClickListeners: function() {
    var self = this;
    startButton.addEventListener('click', function( event ) {
      if(!self.start && self.onStopWatch) {
        self.updateTime();
        self.start = true;
      }
      startButton.innerHTML = 'Start';
    });

    resetButton.addEventListener('click', function( event ) {
      self.stopTimer();
      self.seconds = 0;
      timerText.innerHTML = 'Stop Watch';
      document.body.style.backgroundColor = 'white';
      startButton.innerHTML = 'Start';
      setTitle('timer');
    });

    pauseButton.addEventListener('click', function() {
      self.stopTimer();
      startButton.innerHTML = 'Resume';
    });
  },
  // removeClickListeners: function(){
  //   pauseButton.removeEventListener('click', stopTimer);
  // },
  updateTime: function() {
    var self = this;
    self.timerId = window.setInterval(function(){
        self.seconds += 1;
        timerText.innerHTML = 'Time Elapsed = ' + self.seconds;
        self.updateColor();
        setTitle(self.seconds);
      }, 1000);
    },
  stopTimer: function() {
    clearInterval(this.timerId);
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
  // toggleClicked: function(element) {
  //     element.className = 'clicked';
  // },
  // clearClicked: function(){
  //   for (var i = 0; i < this.buttonArray.length; i++) {
  //     this.buttonArray[i].className = '';
  //   }
  // },
  init: function() {
    this.addClickListeners();
    self.timerText.innerHTML = 'Stop Watch';
    startButton.innerHTML = 'Start';
    bar.setAttribute('style', 'border: ;');
    level.setAttribute('style', 'display: none');
    setTitle('timer');
  },
  // clearTimer: function() {
  //   stopTimer(this.timerId);
  //
  // }
  replaceButtons: function() {
    var strtbutton = document.createElement('button');
    strtbutton.id = 'start';
    startButton = strtbutton;
  }
};

var countdown = {
  songStartTime: 77,
  songStart: false,
  onCountdown: false,
  init: function() {
    timerText.innerHTML = 'Countdown';
    // level.style.backgroundColor = 'rgba(0,176,0,1.0)';
    this.addClickListeners();
    document.body.style.backgroundColor = 'white';
    startButton.innerHTML = 'Start';
    bar.setAttribute('style', 'border: 2px solid black;');
    level.setAttribute('style', 'display: block');
    setTitle('timer');
  },
  startTimer: function() {
    this.getInitialSeconds();
    this.setSeconds();
    level.style.backgroundColor = 'rgba(0,176,0,1.0)';
  },
  getInitialSeconds: function() {
    this.initialSeconds = parseInt(prompt('How many seconds do you want to set the timer for?'));
  },
  setSeconds: function() {
    this.seconds = this.initialSeconds;
  },
  addClickListeners: function() {
    var self = this;
    startButton.addEventListener('click', function() {
      if(self.seconds > 0) {
        self.updateTime();
        self.start = true;
      }

      if(!self.start && self.onCountdown) {
        self.startTimer();
        self.updateTime();
        self.start = true;
      }

      startButton.innerHTML = 'Start';
    });
    bar.addEventListener('click', function() {
      document.getElementById('song').pause();
      this.songStart = false;
    });
    resetButton.addEventListener('click', function( event ) {
      self.stopTimer();
      timerText.innerHTML = 'Countdown';
      self.resetScreen();
    });
    pauseButton.addEventListener('click', function( event ) {
      self.stopTimer();
      song.pause();
      startButton.innerHTML = 'Resume';
    });
  },
  resetScreen: function(){
    level.style.backgroundColor = 'white';
    level.style.width = '100%';
    song.pause();
    this.songStart = false;
    startButton.innerHTML = 'Start';
    this.seconds = 0;
    setTitle('timer');
  },
  updateTime: function(){
    var self = this;
    self.timerId = window.setInterval(function(){
        self.seconds -= 1;
        timerText.innerHTML = 'Seconds Left = ' + self.seconds;
        self.updateLevel();
        setTitle(self.seconds);
      }, 1000);
  },
  updateLevel: function(){
    var self = this;
    self.percent = self.seconds / self.initialSeconds * 100;
    level.style.width = self.percent + '%';

    if (self.seconds <= 0){
      self.stopTimer(self.timerId);
      timerText.innerHTML = 'Click to Stop Music';
    } else if (self.percent <= 10) {
      level.style.backgroundColor = 'red';
    } else if (self.percent <= 35 && self.seconds <= 60) {
      level.style.backgroundColor = 'yellow';

      if (!self.songStart && self.seconds <= self.songStartTime) {
        song.currentTime = self.songStartTime - self.seconds;
        self.songStart = true;
      }

      // if (self.songStart) {
        song.play();
      // }
    }
  },
  stopTimer: function() {
    clearInterval(this.timerId);
    this.start = false;
  }
};

timer.init();

var stopwatch = document.getElementById('stopwatch');
var countdownButton = document.getElementById('countdown');

stopwatch.addEventListener('click', function(){
  countdown.onCountdown = false;
  timer.onStopWatch = true;
  countdown.stopTimer();
  timer.init();
  clearClicked();
  countdown.resetScreen();
});

countdownButton.addEventListener('click', function(){
  countdown.onCountdown = true;
  timer.onStopWatch = false;
  timer.stopTimer();
  countdown.init();
  clearClicked();
});

var buttonArray = [
    startButton,
    resetButton,
    pauseButton
  ];

self.buttonArray.forEach(function(button){
  button.addEventListener('click', function(){
    clearClicked();
    toggleClicked(this);
  });
});

function toggleClicked (element) {
    element.className = 'clicked';
}

function clearClicked(){
  for (var i = 0; i < this.buttonArray.length; i++) {
    this.buttonArray[i].className = '';
  }
}


document.head.title.innerHTML = 'change';

function setTitle(word) {
  title.innerHTML = word;
}
