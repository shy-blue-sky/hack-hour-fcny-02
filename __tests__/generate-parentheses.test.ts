import { describe, it, expect } from 'vitest';
import generateParentheses from '../challenges/generate-parentheses';

describe('generateParentheses', () => {
  it('should generate all combinations for n=1', () => {
    const result = generateParentheses(1);
    expect(result).toHaveLength(1);
    expect(result).toContain('()');
  });

  it('should generate all combinations for n=2', () => {
    const result = generateParentheses(2);
    expect(result).toHaveLength(2);
    expect(result).toContain('(())');
    expect(result).toContain('()()');
  });

  it('should generate all combinations for n=3', () => {
    const result = generateParentheses(3);
    expect(result).toHaveLength(5);
    expect(result).toContain('((()))');
    expect(result).toContain('(()())');
    expect(result).toContain('(())()');
    expect(result).toContain('()(())');
    expect(result).toContain('()()()');
  });

  it('should generate correct number of combinations for n=4', () => {
    const result = generateParentheses(4);
    // 4th Catalan number is 14
    expect(result).toHaveLength(14);
  });

  it('should have valid parentheses in all results', () => {
    const result = generateParentheses(3);
    
    // helper to check if string has valid parentheses
    const isValid = (s: string): boolean => {
      let count = 0;
      for (const char of s) {
        if (char === '(') count++;
        else count--;
        if (count < 0) return false;
      }
      return count === 0;
    };
    
    result.forEach(combo => {
      expect(isValid(combo)).toBe(true);
    });
  });

  it('should generate unique combinations', () => {
    const result = generateParentheses(3);
    const uniqueSet = new Set(result);
    expect(uniqueSet.size).toBe(result.length);
  });

  it('all combinations should have correct length', () => {
    const n = 3;
    const result = generateParentheses(n);
    
    result.forEach(combo => {
      expect(combo.length).toBe(2 * n);
    });
  });
});
