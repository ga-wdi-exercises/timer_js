$(document).ready(function(){
  $('#start').on('click', startTime)
  $('#reset').on('click', resetTime)
  $('#pause').on('click', pauseTime)
});

function startTime(e){
  $('#timer').empty().html('Time Elapsed: <span>0<span>')
  startstuff = 0
  theinterval;
}

function resetTime(e){
  $('#timer').empty().html('Stop Watch')
}

function pauseTime(e){
  var pausestuff = $('span').text()
  pausestuff++;
  $('span').text(pausestuff)
  clearInterval(theinterval);
}

var startstuff = $('span').text()
var theinterval = setInterval(function(e){
    startstuff++; $('span').text(startstuff)
},1000)
