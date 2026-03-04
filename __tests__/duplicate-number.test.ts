import { describe, it, expect } from 'vitest';
import {
  duplicateNumber,
  duplicateNumberAdvanced,
} from '../challenges/duplicate-number';

describe('duplicateNumber', () => {
  let arr: number[];

  it('should return duplicate number in a sorted array', () => {
    arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    expect(duplicateNumber(arr)).toBe(7);
  });

  it('should return duplicate number in an unsorted array', () => {
    arr = [12, 14, 3, 7, 15, 1, 11, 9, 10, 3, 5, 2, 4, 6, 13, 8];
    expect(duplicateNumber(arr)).toBe(3);
    arr = [1, 5, 4, 3, 6, 2, 4, 7];
    expect(duplicateNumber(arr)).toBe(4);
  });

  it('should return 0 if there are no duplicates', () => {
    arr = [1, 5, 2, 9, 3, 4, 8, 7, 6];
    expect(duplicateNumber(arr)).toBe(0);
  });
});

describe.skip('duplicateNumberAdvanced', () => {
  let arr: number[];

  it('should return duplicate number in an unsorted array', () => {
    arr = [];
    for (let i = 42; i < 142; i++) {
      arr.push(i);
    }
    arr.push(72);
    expect(duplicateNumberAdvanced(arr)).toBe(72);
  });

  it('should return duplicate number in a sorted array', () => {
    arr = [];
    for (let i = 73; i < 211; i++) {
      arr.push(i);
    }
    arr.push(111);
    expect(duplicateNumberAdvanced(arr)).toBe(111);
  });

  it('should return 0 if there are no duplicates', () => {
    arr = [];
    for (let i = 23; i < 41; i++) {
      arr.push(i);
    }
    expect(duplicateNumber(arr)).toBe(0);
  });
});
