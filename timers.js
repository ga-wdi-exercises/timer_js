/*
---
Specifications
---
- When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0", and the count should increment every second.
- When "Reset" is clicked, the text should return to "Stop Watch"
- When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing.

<h1 id="timer">Stop Watch</h1>
<div class="controls">
  <button id="reset">Reset</button>
  <button id="start">Start</button>
  <button id="pause">Pause</button>
</div>
 */

function initTimer() {
  // Constants
  var DEFAULT_TEXT = "Stop Watch";

  // References to the HTML elements.
  var $timer = $( '#timer' );
  var $reset = $( '#reset' );
  var $start = $( '#start' );
  var $pause = $( '#pause' );

  // State of the timer.
  var timerId = null;
  var seconds = 0;

  // Create click handlers (empty, for now) for each of the timer buttons.
  $start.on( 'click', handleStart );
  $reset.on( 'click', handleReset );
  $pause.on( 'click', handlePause );

  /**
   * Increments the seconds counter and inserts that value into the <h1> element
   * with id="timer".
   */
  function updateTime() {
    $timer.html( Number( $timer.html() ) + 1 );
  }

  /**
   * Replaces the text "Stop Watch" in the HTML with the content of the seconds variable.
   */
  function handleStart() {

    // If time ID is present, do nothing.
    if ( timerId ) return;

    // Instantiate seconds and timerId variables for your timer.
    // The latter will make more sense after reading up on setInterval().

    timerId = setInterval( updateTime, 1000 );
    $timer.html( seconds );
  }

  /**
   * Stops -- but does not reset! -- the timer using clearInterval().
   */
  function handlePause() {

    // Do nothing if timer is absent.
    if ( ! timerId ) return;

    // Remember the current time.
    seconds = $timer.html();

    // Stop the timer.
    clearInterval( timerId );

    // Delete the time ID.
    timerId = null;
  }

  /**
   * Stops the timer using clearInterval().
   * Resets the timer.
   * Replaces the time in your HTML with the original "Stop Watch" text.
   */
  function handleReset() {
    console.log("reset was clicked");

    // If the timer is not on pause, stop it.
    if ( timerId ) {
      handlePause();
    };

    // Reset the timer.
    seconds = 0;

    // Replace the time in your HTML with the original "Stop Watch" text.
    $timer.html( DEFAULT_TEXT );
  }
} // end initTimer

// Execute the timer when the document is loaded.
$( document ).ready( function(){
  initTimer();
});
