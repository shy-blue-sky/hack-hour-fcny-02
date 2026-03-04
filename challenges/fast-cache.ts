/*
 * Challenge: Implement a Memoization Function
 *
 * Your task is to create a higher-order function called `fastCache` that implements memoization.
 * The function should work as follows:
 *
 * 1. Input: `fastCache` takes a single argument - a function `fn`.
 *   - The function `fn` accepts one argument of type string or number
 * 2. Output: It returns a new function that has the same signature as `fn`.
 * 3. Functionality: The returned function should:
 *   - Cache the results of `fn` for each unique input.
 *   - Return the cached result if the same input is provided again, without re-executing `fn`.
 *   - Execute `fn` and cache its result if the input hasn't been seen before.
 *
 * Requirements:
 *   - Use TypeScript generics to ensure type safety.
 *   - The cache should be able to handle inputs of type string or number.
 *   - Assume that the input to `fn` is always a single argument.
 *
 * Example usage:
 * const slowFunction = (x: number): number => {
 *   // Imagine this is a time-consuming operation
 *   return x * 2;
 * };
 *
 * const fastFunction = fastCache(slowFunction);
 *
 * console.log(fastFunction(5));  // Computes and caches the result
 * console.log(fastFunction(5));  // Returns the cached result without recomputation
 *
 * Implement the `fastCache` function below:
 */

type ArgTypes = string | number;

/**
 * Creates a memoized version of the provided function.
 *
 * @template {string | number} T The type of the input argument to the function.
 * @template R The return type of the function.
 *
 * @param {function(T): R} fn - The function to be memoized.
 * @returns {function(T): R} A new function that caches the results of `fn`.
 */
export const fastCache = <T extends ArgTypes, R>(
  fn: (arg: T) => R
): ((arg: T) => R) => {
  return fn;
};

type ExtendedTypes = ArgTypes | Object | ExtendedTypes[];

/**
 * Extension: Rewrite and improve fastCache to handle an unknown number of arguments, which can be
 * strings, numbers, or objects (including arrays).
 *
 * The function should work as follows:
 *
 * 1. Input: `fastCacheAdvanced` takes a single argument - a function `fn`.
 *   - The function `fn` accepts an unknown number of arguments
 *   - The arguments can be of type string, number, or object (including arrays)
 * 2. Output: It returns a new function that has the same signature as `fn`.
 * 3. Functionality: The returned function should:
 *   - Cache the results of `fn` for each unique set of inputs (determined by value and not by reference).
 *   - Return the cached result if the same set of inputs is provided again, without re-executing `fn`.
 *   - Execute `fn` and cache its result if the input hasn't been seen before.
 *
 * Requirements:
 *   - Use TypeScript generics to ensure type safety.
 *   - The cache should be able to handle inputs of type string, number, or object (including arrays)
 *   - The passed-in function `fn` could accept 0, 1, or more arguments.
 *
 * @template {string | number | Object | Array} T The type of the input argument to the function.
 * @template R The return type of the function.
 *
 * @param {function(...T): R} fn - The function to be memoized.
 * @returns {function(...T): R} A new function that caches the results of `fn`.
 */
export const fastCacheAdvanced = <T extends ExtendedTypes, R>(
  fn: (...args: T[]) => R
): ((...args: T[]) => R) => {
  return fn;
};
