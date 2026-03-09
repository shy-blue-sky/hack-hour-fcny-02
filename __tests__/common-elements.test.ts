import { describe, it, expect } from 'vitest';
import {
  commonElements,
  commonElementsDuplicates,
} from '../challenges/common-elements';

describe('commonElements', () => {
  it('should return the common elements of arrays of strings and numbers', () => {
    const result1 = commonElements(
      [2, 10, 'cat', 3, 99, 2000, 'dog', 'lion'],
      [3, 7, 2, 2000, 1, 'dog', 'cat'],
      [2, 100, 2000, 'dog', 3, 'lion']
    );
    if (Array.isArray(result1)) {
      expect(result1.sort()).toEqual([2, 2000, 3, 'dog']);
    }

    const result2 = commonElements(
      ['cat', 3, 50, 'lion', 'dog'],
      [3, 'dog', 7, 2, 50, 1, 'lion', 'cat'],
      [2, 50, 2000, 'dog', 3, 'lion']
    );
    if (Array.isArray(result2)) {
      expect(result2.sort()).toEqual([3, 50, 'dog', 'lion']);
    }
  });

  it('should return the common elements of arrays of strings', () => {
    const result1 = commonElements(
      ['cat', 3, 2000, 'dog'],
      [7, 2, 'dog', 'cat'],
      [1, 'dog', 5, 'lion']
    );
    if (Array.isArray(result1)) {
      expect(result1).toEqual(['dog']);
    }

    const result2 = commonElements(
      ['lion', 1, 2, 'dog'],
      [7, 'lion', 'dog', 'cat'],
      [1, 'dog', 5, 'lion']
    );
    if (Array.isArray(result2)) {
      expect(result2.sort()).toEqual(['dog', 'lion']);
    }
  });

  it('should return the common elements of arrays of numbers', () => {
    const result1 = commonElements(
      [3, 99, 2000, 'dog', 'lion'],
      [3, 1, 'cat', 99],
      [2, 3, 2000, 'dog', 99]
    );
    if (Array.isArray(result1)) {
      expect(result1.sort()).toEqual([3, 99]);
    }

    const result2 = commonElements(
      [1, 2, 'dog', 3],
      [7, 1, 2],
      [1, 2, 5, 'lion'],
      [2, 1]
    );
    if (Array.isArray(result2)) {
      expect(result2.sort()).toEqual([1, 2]);
    }
  });

  it('should return "Nothing in Common!" when there are no common elements', () => {
    expect(commonElements([], ['dog'], [1, 2, 'dog'], ['dog'])).toEqual(
      'Nothing in Common!'
    );
    expect(
      commonElements([1, 2, 5, 6], ['dog'], [1, 2, 'dog'], ['dog'])
    ).toEqual('Nothing in Common!');
  });

  it('should return "Nothing in Common!" when passed empty arrays', () => {
    expect(commonElements([], [], [])).toEqual('Nothing in Common!');
    expect(commonElements([])).toEqual('Nothing in Common!');
  });
});

describe.skip('commonElementsDuplicates', () => {
  it('should return the common elements of arrays of strings and numbers', () => {
    const result1 = commonElementsDuplicates(
      [2, 10, 'cat', 3, 99, 2000, 'dog', 'lion'],
      [3, 7, 2, 2000, 1, 'dog', 'cat'],
      [2, 100, 2000, 'dog', 3, 'lion']
    );
    if (Array.isArray(result1)) {
      expect(result1.sort()).toEqual([2, 2000, 3, 'dog']);
    }

    const result2 = commonElementsDuplicates(
      ['cat', 3, 50, 'lion', 'dog'],
      [3, 'dog', 7, 2, 50, 1, 'lion', 'cat'],
      [2, 50, 2000, 'dog', 3, 'lion']
    );
    if (Array.isArray(result2)) {
      expect(result2.sort()).toEqual([3, 50, 'dog', 'lion']);
    }
  });

  it('should return the common elements of arrays of strings', () => {
    const result1 = commonElementsDuplicates(
      ['cat', 3, 2000, 'dog'],
      [7, 2, 'dog', 'cat'],
      [1, 'dog', 5, 'lion']
    );
    if (Array.isArray(result1)) {
      expect(result1).toEqual(['dog']);
    }

    const result2 = commonElementsDuplicates(
      ['lion', 1, 2, 'dog'],
      [7, 'lion', 'dog', 'cat'],
      [1, 'dog', 5, 'lion']
    );
    if (Array.isArray(result2)) {
      expect(result2.sort()).toEqual(['dog', 'lion']);
    }
  });

  it('should return the common elements of arrays of numbers', () => {
    const result1 = commonElementsDuplicates(
      [3, 99, 2000, 'dog', 'lion'],
      [3, 1, 'cat', 99],
      [2, 3, 2000, 'dog', 99]
    );
    if (Array.isArray(result1)) {
      expect(result1.sort()).toEqual([3, 99]);
    }

    const result2 = commonElementsDuplicates(
      [1, 2, 'dog', 3],
      [7, 1, 2],
      [1, 2, 5, 'lion'],
      [2, 1]
    );
    if (Array.isArray(result2)) {
      expect(result2.sort()).toEqual([1, 2]);
    }
  });

  it('should return "Nothing in Common!" when there are no common elements', () => {
    expect(
      commonElementsDuplicates([], ['dog'], [1, 2, 'dog'], ['dog'])
    ).toEqual('Nothing in Common!');
    expect(
      commonElementsDuplicates([1, 2, 5, 6], ['dog'], [1, 2, 'dog'], ['dog'])
    ).toEqual('Nothing in Common!');
  });

  it('should return "Nothing in Common!" when passed empty arrays', () => {
    expect(commonElementsDuplicates([], [], [])).toEqual('Nothing in Common!');
    expect(commonElementsDuplicates([])).toEqual('Nothing in Common!');
  });

  it('should handle duplicate common elements', () => {
    const result = commonElementsDuplicates([2, 2, 3, 3], [2, 3, 3], [2, 3]);
    if (Array.isArray(result)) {
      expect(result.sort()).toEqual([2, 3]);
    }
  });
});
