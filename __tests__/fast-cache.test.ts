import { describe, it, expect, beforeEach, vi } from 'vitest';
import { fastCache, fastCacheAdvanced } from '../challenges/fast-cache';

describe('fastCache', () => {
  let cachedFunc: (arg: number) => number;
  let mockCallback: ReturnType<typeof vi.fn>;
  let anyCallback: ReturnType<typeof vi.fn>;
  let cachedAnyFunc: <T extends number | string>(arg: T) => T;

  beforeEach(() => {
    mockCallback = vi.fn((num: number) => num * 3);
    cachedFunc = fastCache(mockCallback);
    anyCallback = vi.fn((elem: string | number) => elem);
    cachedAnyFunc = fastCache(anyCallback);
  });

  it('should return the right result', () => {
    expect(cachedFunc(3)).toBe(9);
  });

  it('should return the right result when passed the same argument multiple times', () => {
    expect(cachedFunc(3)).toBe(9);
    expect(cachedFunc(3)).toBe(9);
    expect(cachedFunc(3)).toBe(9);
  });

  it('should call the callback the first time a value is passed in', () => {
    cachedFunc(3);
    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('should not call the callback if the same value is passed in again', () => {
    cachedFunc(6);
    cachedFunc(4);
    cachedFunc(5);
    cachedFunc(4);
    cachedFunc(5);
    expect(mockCallback.mock.calls.length).toBe(3);
  });

  it.skip('bonus: should differentiate between loosely equal but not strictly equal arguments', () => {
    expect(anyCallback.mock.calls.length).toBe(0);
    expect(cachedAnyFunc(3)).toBe(3);
    expect(anyCallback.mock.calls.length).toBe(1);
    expect(cachedAnyFunc('3')).toBe('3');
    expect(anyCallback.mock.calls.length).toBe(2);
  });
});

describe.skip('fastCacheAdvanced', () => {
  let mockMult: ReturnType<typeof vi.fn>;
  let mockAdd: ReturnType<typeof vi.fn>;
  let mockPluralize: ReturnType<typeof vi.fn>;
  let anyCallback: ReturnType<typeof vi.fn>;
  let cachedMult: (...args: number[]) => number;
  let cachedAdd: (...args: number[]) => number;
  let cachedPluralize: (...args: any[]) => any;
  let cachedAnyFunc: <T extends number | string>(arg: T) => T;

  beforeEach(() => {
    const times3 = (num: number) => num * 3;

    const add = (...nums: number[]) => {
      return nums.reduce((sum, current) => sum + current);
    };

    const pluralizedKeys = (...objs: any[]): any[] => {
      return objs.reduce((pluralizedKeys, obj) => {
        return pluralizedKeys.concat(Object.keys(obj).map((key) => `${key}s`));
      }, []);
    };

    mockMult = vi.fn(times3);
    mockAdd = vi.fn(add);
    mockPluralize = vi.fn(pluralizedKeys);
    anyCallback = vi.fn((elem: string | number) => elem);

    cachedMult = fastCacheAdvanced(mockMult);
    cachedAdd = fastCacheAdvanced(mockAdd);
    cachedPluralize = fastCacheAdvanced(mockPluralize);
    cachedAnyFunc = fastCacheAdvanced(anyCallback);
  });

  it('should return the right result when passed a single argument', () => {
    expect(cachedMult(3)).toBe(9);
    expect(cachedMult(10)).toBe(30);
  });

  it('should return the right result when passed multiple arguments', () => {
    expect(cachedAdd(1, 2, 3)).toBe(6);
    expect(cachedAdd(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
  });

  it('should return the right result when passed an object', () => {
    expect(cachedPluralize({ cat: true, dog: 52, frog: 'hello' })).toEqual([
      'cats',
      'dogs',
      'frogs',
    ]);
  });

  it('should return the right result when passed the same argument multiple times', () => {
    expect(cachedMult(3)).toBe(9);
    expect(cachedMult(3)).toBe(9);
    expect(cachedMult(3)).toBe(9);
    expect(cachedAdd(1, 2, 3)).toBe(6);
    expect(cachedAdd(1, 2, 3)).toBe(6);
    expect(cachedAdd(1, 2, 3)).toBe(6);
    expect(cachedPluralize({ cat: true, dog: 52, frog: 'hello' })).toEqual([
      'cats',
      'dogs',
      'frogs',
    ]);
    expect(cachedPluralize({ cat: true, dog: 52, frog: 'hello' })).toEqual([
      'cats',
      'dogs',
      'frogs',
    ]);
    expect(cachedPluralize({ cat: true, dog: 52, frog: 'hello' })).toEqual([
      'cats',
      'dogs',
      'frogs',
    ]);
  });

  it('should call the callback the first time an argument is passed in', () => {
    cachedMult(3);
    cachedAdd(3, 4, 5);
    cachedPluralize({ plant: true });
    expect(mockMult.mock.calls.length).toBe(1);
    expect(mockAdd.mock.calls.length).toBe(1);
    expect(mockPluralize.mock.calls.length).toBe(1);
  });

  it('should not call the callback if the same argument is passed in again (primitive values)', () => {
    cachedMult(3);
    cachedMult(3);
    cachedMult(4);
    cachedMult(4);
    cachedMult(4);
    cachedAdd(3, 4, 5);
    cachedAdd(3, 4, 5);
    cachedAdd(3, 4);
    cachedAdd(3, 4, 5, 6);
    cachedAdd(3, 4, 5);
    expect(mockMult.mock.calls.length).toBe(2);
    expect(mockAdd.mock.calls.length).toBe(3);
  });

  it('should differentiate between loosely equal but not strictly equal arguments', () => {
    expect(anyCallback.mock.calls.length).toBe(0);
    expect(cachedAnyFunc(3)).toBe(3);
    expect(anyCallback.mock.calls.length).toBe(1);
    expect(cachedAnyFunc('3')).toBe('3');
    expect(anyCallback.mock.calls.length).toBe(2);
  });

  it('should not call the callback if the same argument is passed in again (objects)', () => {
    cachedPluralize({ plant: true });
    cachedPluralize({ plant: true });
    cachedPluralize({ banana: true });
    cachedPluralize({ banana: true });
    cachedPluralize({ banana: true }, { tree: true });
    cachedPluralize({ banana: true }, { tree: true });
    cachedPluralize({ banana: true }, { tree: true });
    expect(mockPluralize.mock.calls.length).toBe(3);
  });
});
