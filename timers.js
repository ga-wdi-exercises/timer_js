$(document).on("ready", function(){

  heading = $("#timer");
  strtBtn = $("#start");
  stopBtn = $("#pause");
  restBtn = $("#reset");
  seconds = 0;
  rest = function(){ clearInterval(timr);};

  function StpWtch (){
    seconds ++;
    heading.html("Elapsed Time: " + seconds);
  };

  contain = function(){
  timr = setInterval(StpWtch, 1000);
  };

  function reset (){
    heading.html("Stop Watch");
    seconds = 0;
    rest();
  }

  strtBtn.on("click", contain);
  stopBtn.on("click", rest);
  restBtn.on("click", reset);


})
