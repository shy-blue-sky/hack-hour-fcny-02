import { describe, it, expect } from 'vitest';
import { twoSum, threeSum } from '../challenges/two-sum';

describe('twoSum', () => {
  let arr: number[];

  it('should return true if two positive numbers sum to n', () => {
    arr = [1, 4, 6, 12, 9];
    expect(twoSum(arr, 10)).toBe(true);
    arr = [1, 4, 6, 12, 9];
    expect(twoSum(arr, 16)).toBe(true);
    arr = [1, 4, 5, 2, 9];
    expect(twoSum(arr, 7)).toBe(true);
  });

  it('should return true if the array contains 0 and n', () => {
    arr = [8, 4, 9, 0, 2];
    expect(twoSum(arr, 9)).toBe(true);
    arr = [9, 0, 23, 2, 1];
    expect(twoSum(arr, 23)).toBe(true);
    arr = [9, 0, 23, 2, 0];
    expect(twoSum(arr, 0)).toBe(true);
  });

  it('should work with negative numbers', () => {
    arr = [-1, 4, 6, 12, 9];
    expect(twoSum(arr, 8)).toBe(true);
    arr = [-1, -1, -2, -4, -5];
    expect(twoSum(arr, -2)).toBe(true);
  });

  it('should return false if two numbers DO NOT sum to n', () => {
    arr = [1, 4, 6, 12, 9];
    expect(twoSum(arr, 2)).toBe(false);
    arr = [1, 4, 6, 12, 9];
    expect(twoSum(arr, 45)).toBe(false);
    arr = [1, 4, 7, 2, 9, 0];
    expect(twoSum(arr, 17)).toBe(false);
    arr = [-1, -3, -2, -4, -5];
    expect(twoSum(arr, -2)).toBe(false);
  });
});

describe.skip('threeSum', () => {
  let arr: number[];

  it('should return true if three positive numbers sum to n', () => {
    arr = [2, 5, 11, 15];
    expect(threeSum(arr, 18)).toBe(true);
    arr = [2, 5, 11, 15];
    expect(threeSum(arr, 22)).toBe(true);
    arr = [2, 5, 11, 15];
    expect(threeSum(arr, 31)).toBe(true);
  });

  it('should return true if the array contains 0 and two numbers that sum to n', () => {
    arr = [1, 10, 0, 2, 4];
    expect(twoSum(arr, 6)).toBe(true);
    arr = [6, 1, 18, 4, 0];
    expect(twoSum(arr, 22)).toBe(true);
    arr = [3, 0, 4, 9];
    expect(twoSum(arr, 7)).toBe(true);
    arr = [9, 0, 23, 0, 0];
    expect(twoSum(arr, 0)).toBe(true);
  });

  it('should work with negative numbers', () => {
    arr = [-1, 4, 6, 12, 9];
    expect(threeSum(arr, 22)).toBe(true);
    arr = [-1, 4, 6, 12, 9];
    expect(threeSum(arr, 9)).toBe(true);
    arr = [-1, 4, 6, 12, 9];
    expect(threeSum(arr, 20)).toBe(true);
    arr = [-1, -4, 5, 12, 9];
    expect(threeSum(arr, 0)).toBe(true);
    arr = [-1, -1, -2, -4, -5];
    expect(threeSum(arr, -4)).toBe(true);
  });

  it('should return false if three numbers DO NOT sum to n', () => {
    arr = [1, 4, 6, 12, 9];
    expect(threeSum(arr, 2)).toBe(false);
    arr = [1, 4, 6, 12, 9];
    expect(threeSum(arr, 45)).toBe(false);
    arr = [1, 4, 7, 2, 9, 0];
    expect(threeSum(arr, 19)).toBe(false);
    arr = [-1, -2, -2, -4, -5];
    expect(threeSum(arr, -4)).toBe(false);
  });
});
