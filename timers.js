//need to set variables global - inside or outside

var timer = {
  seconds: 0,
  timerId: 0,
//};

//reference the buttons made in html:timer???? - not a button/reset/start/pause
theButtons: {
  timer: document.getElementById("timer"),
  reset: document.getElementById("reset"),
  start: document.getElementById("start"),
  pause: document.getElementById("pause"),
},
//create 'clickhandlers'
//onClick do something
//('timer').onClick = (//'updateTime()'// , )  ;
//('reset').onClick = (//'resetTime()'// , )  ;
//('start').onClick = (//'beginTime'// , )  ;
//('pause').onClick =  (//'stopTime()'// , ) ;

//Commented out about do one on one

//instatiate - work with object - set Timer setInterval()
//return text to Stop Watch
//make an update time method that inserts itself into <h1 id="timer">

////replace hmtl
//document.getElementById("timer").innerHtml = "seconds";
updateTime: function updateTime(){
  this.seconds++;
  this.theButtons.getElementById("#timer").innerHTML = ('Time elaspsed: ' + this.seconds);
//seconds++
},

 clickHandlers: function(){
   this.theButtons.start.onClick('click', function(){
      this.theButtons.getElementById("#timer").innerHTML = ('Time elaspsed: ' + this.seconds);
      this.timerId = setInterval(this.updateTime.bind(this), 1000);
 }.bind(this));


 //function stopTime(){
    this.theButtons.pause.onClick('click', function(){
      clearInterval(this.timerId);
    }.bind(this));

//innerHTML = ("Time elapsed: " + 0);
//setTimeout()
//};

    this.theButtons.reset.onClick ('click',function (){
      this.seconds = 0;
      clearInterval(this.timerId);
      this.theButtons.getElementById('#timer').innerHTML = ("Stop Watch");
//document.getElementById("#timer").innerHTML = ("Stop Watch");
//clearInterval()
 }.bind(this));

  }
};

timer.clickHandlers();
