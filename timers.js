var counter = 0
var updateTime = function () {
  counter++;
  console.log("Time Elapsed: " + counter);
}

var start = document.getElementById('start');
start.addEventListener("click", function (){
    window.setInterval(updateTime, 1000)
    // start.removeEventListener("click", function (){
    // window.clearInterval(updateTime, 0)
    // });
});

var pause = document.getElementById('pause');
pause.addEventListener("click", function (){
    console.log("stopped")
    // document.getElementById('start');
    // start.removeEventListener("click", function (){
    // window.clearInterval(updateTime, false)
//    })
})

var reset = document.getElementById('reset');
reset.addEventListener("click", function (){
    console.log("reset")
})
