# Stop Watch memo

## [JavaScript timers](https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Timers)
Some JavaScript native functions (timers) allow us to delay the execution of arbitrary instructions.

- setTimeout()
  + Commonly used if you wish to have your function **called once after the specified delay**.
- setInterval()
  + Commonly used to set a delay for functions that are **executed again and again**, such as animations.
- setImmediate()
  + Can be used instead of the `setTimeout(fn, 0)` method to execute heavy operations.
- requestAnimationFrame()
  + Tells the browser that you wish to perform an animation and requests that the browser schedule a repaint of the window for the next animation frame.
