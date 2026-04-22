import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { throttle } from '../challenges/throttle';

describe('throttle', () => {
  const DELAY = 20;

  interface Counter {
    count: number;
    increment: (amount: number) => void;
  }

  const counter: Counter = {
    count: 0,
    increment: throttle(function (this: Counter, amount: number) {
      this.count += amount; // "this" must refer to counter
    }, DELAY),
  };

  let count: number;
  let thrCb: Function;

  const add = (num = 1) => {
    count += num;
  };

  beforeEach(() => {
    vi.useFakeTimers();

    count = 0;
    counter.count = 0;
    thrCb = throttle(add, DELAY);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('throttles on the leading edge', () => {
    it('does not thottle function calls if the interval has elapsed (leading edge)', () => {
      thrCb();
      expect(count).toEqual(1);
      vi.advanceTimersByTime(DELAY);
      thrCb();
      expect(count).toEqual(2);
      vi.advanceTimersByTime(DELAY + 2);
      thrCb();
      expect(count).toEqual(3);
    });

    it('throttles function calls if the interval has not elapsed (leading edge)', () => {
      thrCb();
      vi.advanceTimersByTime(DELAY / 4);
      thrCb();
      vi.advanceTimersByTime(DELAY / 4);
      thrCb();
      vi.advanceTimersByTime(DELAY / 4);
      thrCb();
      expect(count).toEqual(1);
    });

    it('handles arguments correctly (leading edge)', () => {
      thrCb(2);
      expect(count).toEqual(2);
      vi.advanceTimersByTime(DELAY);

      thrCb(9);
      expect(count).toEqual(11);
    });

    it('handles the general case (leading edge)', () => {
      thrCb();
      expect(count).toEqual(1);
      vi.advanceTimersByTime(DELAY / 4);
      thrCb();
      vi.advanceTimersByTime(DELAY / 4);
      thrCb();
      vi.advanceTimersByTime(DELAY / 4);
      thrCb();
      expect(count).toEqual(1);

      vi.advanceTimersByTime(DELAY / 4);
      thrCb();
      expect(count).toEqual(2);
    });
  });

  describe.skip('extension: throttles on both the leading edge and trailing edge (double edge)', () => {
    it('invokes function on the trailing edge if called multiple times during interval', () => {
      thrCb();
      vi.advanceTimersByTime(DELAY / 4);
      thrCb();
      vi.advanceTimersByTime(DELAY / 4);
      thrCb();
      vi.advanceTimersByTime(DELAY / 4);
      thrCb();
      expect(count).toEqual(1);

      vi.advanceTimersByTime(DELAY / 4);
      expect(count).toEqual(2);
    });

    it('does not invoke function on the trailing edge if called only once during interval', () => {
      thrCb();
      expect(count).toEqual(1);

      vi.advanceTimersByTime(DELAY + 2);
      expect(count).toEqual(1);
    });

    it('correctly handles arguments on the trailing edge', () => {
      thrCb(2);
      vi.advanceTimersByTime(DELAY / 2);
      thrCb(3);
      thrCb(7);
      vi.advanceTimersByTime(DELAY / 2);
      expect(count).toEqual(9);
    });

    it('handles the general case (leading edge and trailing edge)', () => {
      thrCb();
      expect(count).toEqual(1);
      vi.advanceTimersByTime(DELAY / 4);
      thrCb();
      vi.advanceTimersByTime(DELAY / 4);
      thrCb();
      vi.advanceTimersByTime(DELAY / 4);
      thrCb();
      expect(count).toEqual(1);

      vi.advanceTimersByTime(DELAY / 4);
      expect(count).toEqual(2);
      thrCb();
      expect(count).toEqual(2);

      vi.advanceTimersByTime(DELAY);
      expect(count).toEqual(3);
      vi.advanceTimersByTime(DELAY * 2);
      expect(count).toEqual(3);
    });

    it('preserves "this" context and passes args correctly', () => {
      counter.increment(1);
      expect(counter.count).toEqual(1);

      counter.increment(2);
      vi.advanceTimersByTime(DELAY);
      expect(counter.count).toEqual(3);
    });
  });
});
