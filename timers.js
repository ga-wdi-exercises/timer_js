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
  var TIMER_PREFIX = "Time elapsed: ";

  // References to the HTML elements.
  var $timer = $( '#timer' );
  var $start = $( '#start' );
  var $pause = $( '#pause' );
  var $reset = $( '#reset' );

  // State of the timer.
  var timerId = null;
  var currentSeconds = 0;

  // Add click listeners to all the buttons.
  $start.on( 'click', handleStart );
  $pause.on( 'click', handlePause );
  $reset.on( 'click', handleReset );

  /**
   * Increments the currentSeconds counter and inserts that value into the
   * <h1> element with id="timer".
   */
  function updateTime() {
    // Extract the numeric text from the timer by removing the prefix.
    var timeText =  $timer.html().replace( TIMER_PREFIX , "" );

    // Convert the time text to number and increment it by one.
    $timer.html( Number( timeText ) + 1 );

    // Add the prefix to the text.
    $timer.prepend( TIMER_PREFIX );
  }

  /**
   * Replaces the text "Stop Watch" in the HTML with the content of the
   * currentSeconds variable.
   */
  function handleStart() {

    // If time ID is present, do nothing.
    if ( timerId ) return;

    // Start the timer and remember the timer ID so that we can reset it later.
    timerId = setInterval( updateTime, 1000 );

    // Set the starting time.
    $timer.html( TIMER_PREFIX + currentSeconds );
  }

  /**
   * Stops (but does not reset) the timer.
   */
  function handlePause() {

    // Do nothing if timer is absent.
    if ( ! timerId ) return;

    // Remember the current time.
    currentSeconds = $timer.html();

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

    // If the timer is not on pause, stop it.
    if ( timerId ) {
      handlePause();
    };

    // Reset the timer.
    currentSeconds = 0;

    // Replace the time in your HTML with the original "Stop Watch" text.
    $timer.html( DEFAULT_TEXT );
  }
} // end initTimer


// Execute the timer when the document is loaded.
$( document ).ready( function(){
  initTimer();
});
