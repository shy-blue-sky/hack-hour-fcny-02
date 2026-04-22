/*

Create a clock that keeps track of the 'seconds' value (a number from 1 through 60) and a callback.
The class also has two methods, start and reset.

----------
start method: 

Start the clock.

The clock should always start at 1. After 60, the next value should be 1 again.
Once the clock is started, the 'callback' should be invoked once every second.
The current 'seconds' value should be passed to the 'callback' as an argument.
- The first "tick" with value 1 occurs 1 second after starting the clock.
- The second "tick" with value 2 occurs 2 seconds after starting the clock.
- ...
- The sixtieth "tick" with value 60 occurs 60 seconds after starting the clock.
- The sixty-first "tick" with value 1 occurs 61 seconds after starting the clock.
- The sixty-second "tick" with value 2 occurs 62 seconds after starting the clock.
- ...

Do not use the computer clock or any built-in date/time methods.

----------

reset method: 

Reset the clock.
Stop the timed invocations of 'callback' and reset 'seconds' to its initial value.

----------

Hint: look up setInterval and clearInterval.

Hint: What is the return type of setInterval in Node.js? What is the return type of setInterval in the browser?
How can you make the code work in both environments? Is there a utility type that can help? 
@see: https://www.typescriptlang.org/docs/handbook/utility-types.html

*/

class SecondClock {
  callback: (seconds: number) => void;

  constructor(callback: (seconds: number) => void) {
    this.callback = callback;
  }

  start(): void {
    // add code here
  }

  reset(): void {
    // add code here
  }
}

export { SecondClock };
