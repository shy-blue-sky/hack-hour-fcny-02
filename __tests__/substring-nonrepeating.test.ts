import { describe, it, expect } from 'vitest';
import { substringNonrepeating } from '../challenges/substring-nonrepeating';

describe('substringNonrepeating', () => {
  it('handles empty strings', () => {
    expect(substringNonrepeating('')).toBe(0);
  });

  it('handles single-character strings', () => {
    expect(substringNonrepeating('b')).toBe(1);
    expect(substringNonrepeating('cc')).toBe(1);
    expect(substringNonrepeating('zzz')).toBe(1);
  });

  it('handles strings with no repeating characters', () => {
    expect(substringNonrepeating('abcdef')).toBe(6);
    expect(substringNonrepeating('dermatoglyphics')).toBe(15);
  });

  it('handles multi-character strings', () => {
    expect(substringNonrepeating('hahaha')).toBe(2);
    expect(substringNonrepeating('lolhahaha')).toBe(4);
    expect(substringNonrepeating('abba')).toBe(2);
    expect(substringNonrepeating('abcabcbb')).toBe(3);
    expect(substringNonrepeating('pwwkew')).toBe(3);
  });
});
