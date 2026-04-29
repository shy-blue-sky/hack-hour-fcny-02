/**
 * Given a string, determine if any of the permutations of that string is a palindrome.
 *
 * The input string may include uppercase letters, spaces, and special characters.
 * When checking for palindrome permutations:
 *   - Ignore case differences. Treat uppercase and lowercase letters as the same character.
 *   - Ignore all non-alphanumeric characters (including spaces). Consider only letters (A-Z, a-z) and digits (0-9).
 *
 * @see: Permutations: https://stattrek.com/statistics/dictionary.aspx?definition=permutation
 * @see: Palindromes: https://examples.yourdictionary.com/palindrome-examples.html
 *
 * Bonus: See if you can solve this with O(n) time complexity (linear time complexity) and O(1) space complexity
 * (constant space complexity).
 *
 * Examples:
 *
 * permPalin('abab'); // => true
 * permPalin('cbaba'); // => true
 * permPalin('cbac'); // => false
 * permPalin('a'); // => true
 * permPalin('Aba!'); // => true
 * permPalin('cBa ba'); // => true
 * permPalin('cb aC'); // => false
 * permPalin('A!'); // => true
 * permPalin('1122'); // => true
 * permPalin('123'); // => false
 *
 * Hint: Consider how the frequency of each character affects the possibility of forming a palindrome, and how that interacts with the length of the string.
 *
 */

const permPalin = (str: string): boolean => {
  return true; // Placeholder return value for type safety - replace for your solution
};

/**
 * Bonus: Solve this with O(n) time complexity (linear time complexity) and O(1) space complexity
 * (constant space complexity).
 *
 * By default, the "work for very large inputs" test is skipped in "__tests__/perm-palin.test.ts"
 * Enable this test when you are ready. If your function does not work for very large inputs, the node process will crash.
 *
 */

const permPalinAdvanced = (str: string): boolean => {
  return true; // Placeholder return value for type safety - replace for your solution
};

export { permPalin, permPalinAdvanced };
