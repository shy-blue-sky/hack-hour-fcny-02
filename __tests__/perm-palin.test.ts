import { describe, it, expect } from 'vitest';
import { permPalin, permPalinAdvanced } from '../challenges/perm-palin';

describe('permPalin', () => {
  let string: string;

  it('should return true if string length is even and zero odd character frequencies', () => {
    string = 'aabbcc';
    expect(permPalin(string)).toBe(true);
    string = 'gaaddddg';
    expect(permPalin(string)).toBe(true);
    string = 'aaxx';
    expect(permPalin(string)).toBe(true);
  });

  it('should return true if string length is odd and only one odd character frequency', () => {
    string = 'aabbd';
    expect(permPalin(string)).toBe(true);
    string = 'd';
    expect(permPalin(string)).toBe(true);
    string = 'zaabbdz';
    expect(permPalin(string)).toBe(true);
  });

  it('should return false if string length is even and at least one odd character frequency', () => {
    string = 'aabbcd';
    expect(permPalin(string)).toBe(false);
    string = 'cd';
    expect(permPalin(string)).toBe(false);
    string = 'zeaabbcd';
    expect(permPalin(string)).toBe(false);
  });

  it('should return false if string length is odd and more than one odd character frequency', () => {
    string = 'aabccddd';
    expect(permPalin(string)).toBe(false);
    string = 'aabddd';
    expect(permPalin(string)).toBe(false);
  });

  it('should return true if string is empty', () => {
    string = '';
    expect(permPalin(string)).toBe(true);
  });

  it('should return true for palindromic permutations with uppercase letters and special characters', () => {
    string = 'Aba!';
    expect(permPalin(string)).toBe(true);
    string = 'cBa ba';
    expect(permPalin(string)).toBe(true);
    string = 'A!';
    expect(permPalin(string)).toBe(true);
    string = 'AaBbCc!@#';
    expect(permPalin(string)).toBe(true);
  });

  it('should return false for non-palindromic permutations with uppercase letters and special characters', () => {
    string = 'cb aC';
    expect(permPalin(string)).toBe(false);
    string = 'Abc!D';
    expect(permPalin(string)).toBe(false);
    string = 'Hello!@';
    expect(permPalin(string)).toBe(false);
    string = 'A1B2C3!';
    expect(permPalin(string)).toBe(false);
  });

  it('should return true for palindromic permutations that include numbers', () => {
    string = 'a1b2b1a';
    expect(permPalin(string)).toBe(true);
    string = '123321';
    expect(permPalin(string)).toBe(true);
    string = '1a2b2a1';
    expect(permPalin(string)).toBe(true);
    string = '112233';
    expect(permPalin(string)).toBe(true);
  });

  it('should return false for non-palindromic permutations that include numbers', () => {
    string = 'a1b2c3';
    expect(permPalin(string)).toBe(false);
    string = '12345';
    expect(permPalin(string)).toBe(false);
    string = 'a1b2b3a';
    expect(permPalin(string)).toBe(false);
  });
});

describe('permPalinAdvanced', () => {
  let string: string;

  it('should return true if string length is even and zero odd character frequencies', () => {
    string = 'aabbcc';
    expect(permPalinAdvanced(string)).toBe(true);
    string = 'gaaddddg';
    expect(permPalinAdvanced(string)).toBe(true);
    string = 'aaxx';
    expect(permPalinAdvanced(string)).toBe(true);
  });

  it('should return true if string length is odd and only one odd character frequency', () => {
    string = 'aabbd';
    expect(permPalinAdvanced(string)).toBe(true);
    string = 'd';
    expect(permPalinAdvanced(string)).toBe(true);
    string = 'zaabbdz';
    expect(permPalinAdvanced(string)).toBe(true);
  });

  it('should return false if string length is even and at least one odd character frequency', () => {
    string = 'aabbcd';
    expect(permPalinAdvanced(string)).toBe(false);
    string = 'cd';
    expect(permPalinAdvanced(string)).toBe(false);
    string = 'zeaabbcd';
    expect(permPalinAdvanced(string)).toBe(false);
  });

  it('should return false if string length is odd and more than one odd character frequency', () => {
    string = 'aabccddd';
    expect(permPalinAdvanced(string)).toBe(false);
    string = 'aabddd';
    expect(permPalinAdvanced(string)).toBe(false);
  });

  it('should return true if string is empty', () => {
    string = '';
    expect(permPalinAdvanced(string)).toBe(true);
  });

  it('should return true for palindromic permutations with uppercase letters and special characters', () => {
    string = 'Aba!';
    expect(permPalinAdvanced(string)).toBe(true);
    string = 'cBa ba';
    expect(permPalinAdvanced(string)).toBe(true);
    string = 'A!';
    expect(permPalinAdvanced(string)).toBe(true);
    string = 'AaBbCc!@#';
    expect(permPalinAdvanced(string)).toBe(true);
  });

  it('should return false for non-palindromic permutations with uppercase letters and special characters', () => {
    string = 'cb aC';
    expect(permPalinAdvanced(string)).toBe(false);
    string = 'Abc!D';
    expect(permPalinAdvanced(string)).toBe(false);
    string = 'Hello!@';
    expect(permPalinAdvanced(string)).toBe(false);
    string = 'A1B2C3!';
    expect(permPalinAdvanced(string)).toBe(false);
  });

  it('should return true for palindromic permutations that include numbers', () => {
    string = 'a1b2b1a';
    expect(permPalinAdvanced(string)).toBe(true);
    string = '123321';
    expect(permPalinAdvanced(string)).toBe(true);
    string = '1a2b2a1';
    expect(permPalinAdvanced(string)).toBe(true);
    string = '112233';
    expect(permPalinAdvanced(string)).toBe(true);
  });

  it('should return false for non-palindromic permutations that include numbers', () => {
    string = 'a1b2c3';
    expect(permPalinAdvanced(string)).toBe(false);
    string = '12345';
    expect(permPalinAdvanced(string)).toBe(false);
    string = 'a1b2b3a';
    expect(permPalinAdvanced(string)).toBe(false);
  });

  it.skip('should work for very large inputs', () => {
    const longString = 'a'.repeat(1e6) + 'b'.repeat(1e6);
    expect(permPalinAdvanced(longString)).toBe(true);
  });
});
