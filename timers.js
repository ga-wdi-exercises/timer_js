var startButton = $("#start");
var resetButton = $("#reset");
var pauseButton = $("#pause");
var timerDisplay = $("#timer");
var seconds = 0;
var timerId;

//When I click on the START button

startButton.on("click",updateTime);


// startButton.on("click",function(){
//
//   timerDisplay.html("Time elapsed: " + seconds);
//     timerId = setInterval(function(){
//
//         //console.log(counter);
//         seconds += 1;
//         timerDisplay.html("Time elapsed: " + seconds);
//
//
//     }, 1000);
//
// });


pauseButton.on("click", pauseTimer);


// pauseButton.on("click", function(){
//
//   clearInterval(timerId);
//
// });


resetButton.on("click", resetTimer);

// resetButton.on("click", function(){
//
//   clearInterval(timerId);
//   timerDisplay.html("Stop Watch");
//   seconds = 0;
//
// });

    //the text "Stop Watch" should be replaced by "Time elapsed: 0"
        //id = timer
    // the count should increment every second.
      //setInterval() 1000 ms




// 1. Create Javascript selectors that target each of the timer buttons.
// 2. Create click handlers (empty, for now) for each of the timer buttons.
// 3. Instantiate `seconds` and `timerId` variables for your timer. The latter
// will make more sense after reading up on `setInterval()`.
// 4. Create an `updateTime()` function that increments the `seconds` counter
//    and inserts that value into the `<h1>` element with `id="timer"`.

function updateTime(){

  timerId = setInterval(

    function(){

      seconds += 1;
      timerDisplay.html("Time elapsed: " + seconds);

    }


     ,1000);

   }

//}

// 5. Inside your click handler for the start button...
//   - Replace "Stop Watch" in the HTML with the content of the `seconds` variable.
//   - Use `setInterval()` to increment the timer by 1 every second.



// 6. Inside your click handler for the pause button...
//   - Stop -- but do not reset! -- the timer using `clearInterval()`.


function pauseTimer(){

    clearInterval(timerId);

}
// 7. Once again, inside your click handler for the start button...
//   - Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".


// 8. Inside your click handler for the reset button...
//   - Stop the timer using `clearInterval()`.
//   - Reset the timer.
//   - Replace the time in your HTML with the original "Stop Watch" text.


function resetTimer(){

  clearInterval(timerId);
  timerDisplay.html("Stop Watch");
  seconds = 0;

}
