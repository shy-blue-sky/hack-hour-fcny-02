import { describe, it, expect, vi } from "vitest";
import { SecondClock } from "../challenges/second-clock.ts";

vi.useFakeTimers(); // Use vitest fake timers function

describe("SecondClock", () => {
  it("counts up to 16 seconds", (done) => {
    const results: number[] = [];
    const cb = (val: number): void => {
      // callback that pushes the value to results
      results.push(val);
    };
    const clock = new SecondClock(cb); // independent instance of the clock

    clock.start();
    vi.advanceTimersByTime(16000); // count from 1 to 16

    const expectation = Array.from({ length: 16 }, (_, i) => i + 1); // [1, 2, 3, ..., 16]

    expect(results).toEqual(expectation);
  });

  it("counts beyond 60, re-circling the clock", (done) => {
    const results: number[] = [];
    const cb = (val: number): void => {
      results.push(val);
    };
    const clock = new SecondClock(cb); // independent instance of the clock

    clock.start(); // Start the clock
    vi.advanceTimersByTime(62000); // count from 1 to 60, then 1 to 2

    const expectation = [...Array.from({ length: 60 }, (_, i) => i + 1), 1, 2]; // [1, 2, 3, ..., 60, 1, 2]

    expect(results).toEqual(expectation);
  });

  it("resets the clock correctly", (done) => {
    const results: number[] = [];
    const cb = (val: number): void => {
      results.push(val);
    };
    const clock = new SecondClock(cb); // independent instance of the clock

    clock.start();
    vi.advanceTimersByTime(10000); // count from 1 to 10
    clock.reset(); // check reset method
    results.length = 0; // Clear results to check if it starts from 1 again
    clock.start(); // Start again after reset
    vi.advanceTimersByTime(5000); // Should count from 1 to 5

    const expectation = [1, 2, 3, 4, 5];

    expect(results).toEqual(expectation);
  });
});
