
getElementById("reset").addEventListener("click", function(){

}, false);

getElementById("start").addEventListener(
  "click",
  function(){
    setInterval(function (){
        console.log("ONE SECOND HAS PASSED!");
      }, 1000);
  }, false
);

getElementById("pause").addEventListener(
  "click",
  function(){
    setInterval(function (){
        console.log("ONE SECOND HAS PASSED!");
      }, 0);
  }, false
);
