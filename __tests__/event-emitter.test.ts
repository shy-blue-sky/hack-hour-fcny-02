import { describe, it, expect } from 'vitest';
import EventEmitter from '../challenges/event-emitter';

describe('EventEmitter', () => {
  const emitter = new EventEmitter();
  let countIncrement = 0;
  emitter.on('increment', () => countIncrement++);

  describe('single listener', () => {
    it('should not invoke function before trigger is called', () => {
      expect(countIncrement).toEqual(0);
    });
    it('should trigger with one event listener', () => {
      emitter.trigger('increment');
      expect(countIncrement).toEqual(1);
    });
  });

  describe('multiple listeners', () => {
    let countDecrement = 0;
    emitter.on('decrement', () => countDecrement--);
    it('should handle multiple listeners', () => {
      emitter.trigger('decrement');
      expect(countDecrement).toEqual(-1);
    });

    let countByOne = 0;
    let countByTwo = 0;
    emitter.on('count', () => (countByOne += 1));
    emitter.on('count', () => (countByTwo += 2));
    it('should handle multiple listeners on the same event', () => {
      emitter.trigger('count');
      expect(countByOne).toEqual(1);
      expect(countByTwo).toEqual(2);
    });

    it('should trigger all events that have been added', () => {
      emitter.trigger('decrement');
      emitter.trigger('count');
      expect(countDecrement).toEqual(-2);
      expect(countByOne).toEqual(2);
      expect(countByTwo).toEqual(4);
    });
  });

  describe('passing arguments', () => {
    const arr: any[] = [];
    emitter.on('pushWord', (word) => arr.push(word));
    it('should pass extra arguments to listener', () => {
      emitter.trigger('pushWord', 'hello');
      emitter.trigger('pushWord', 'world');
      expect(arr).toEqual(['hello', 'world']);
    });
    it('unregistered events should not produce an error', () => {
      expect(() => {
        emitter.trigger('notRegistered');
      }).not.toThrow();
    });
  });
});
