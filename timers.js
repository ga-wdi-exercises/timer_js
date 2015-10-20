//1
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var reset = document.getElementById("reset");

//3
var seconds= 0;
var timerId;


  //2
// start.addEventListener("click", function() {
//   });
//       pause.addEventListener("click", function() {
//         });
//             reset.addEventListener("click", function() {
//
//             });

  //4
          var updateTime =  function() {
            seconds++;
            // document.write(seconds)
            }

  //5

    //when button clicked make changes

    var startButtonAction = function(){
      document.getElementById("timer").innerHTML = "Time elapsed: 0"
      timerId = setInterval(updateTime, 1000) //increment per second
    };
    start.addEventListener("click",startButtonAction);

    var pauseButtonAction = function(){
      document.getElementById("timer").innerHTML = "Time elapsed: 1"
      clearInterval(seconds);//stop timer
    };
    pause.addEventListener("click",pauseButtonAction);

    var resetButtonAction = function(){
      document.getElementById("timer").innerHTML = "Stop Watch"
    };
    reset.addEventListener("click",resetButtonAction);
