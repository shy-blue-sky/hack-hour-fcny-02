/* 
Make an EventEmitter class that mimics the functionality of event listeners.

EventEmitter will have two methods:
- an 'on' method that will take in an event name and a callback function
- a 'trigger' method that takes in an event name and optional arguments

When 'trigger' is invoked, it should execute the callback function(s) passed in, 
according to callback functions assigned with the 'on' method.

Example:
  const instance = new EventEmitter();
  let counter = 0;
  instance.on('increment', () => counter++); // counter should be 0
  instance.trigger('increment'); // counter should be 1
  instance.trigger('increment'); // counter should be 2


Caveats:
- If we repeatedly call .on with the same event name, it should
  continue to call the old callback function(s) as well. 
  Meaning, we can have multiple listeners for one event.
- If the method `.trigger` is called with additional arguments, pass those to the listeners.
- It is not necessary to write a way to remove listeners. 

*/

class EventEmitter {
  constructor() {}

  on(eventName: string, callback: (...args: unknown[]) => void): void {}

  trigger(eventName: string, ...args: unknown[]): void {}
}

export default EventEmitter;
