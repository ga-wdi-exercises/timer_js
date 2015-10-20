
//1
 var start = document.querySelector("#start");
  var stop = document.querySelector("#pause");
   var reset = document.querySelector("#reset");

  //3
var seconds;
var timerId;

var clickStart = function(){
document.body.className ="controls"
}
//2
start.addEventListener("click", function(){

});

//4
document.getElementsById("timer").innerHTML = seconds;
function updateTime() {
  console.log("update ran")
}
// setInterval(updateTime, 100)

stop.addEventListener("click", function(){
  clearInterval(timerId)
});
