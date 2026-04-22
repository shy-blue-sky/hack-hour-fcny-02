/*

If you don't feel comfortable with async/promises, you are more than welcome
to do this (optional) pre-problem problem. Otherwise, we recommend checking out
the main problem.

Pre-problem:

Write a function that takes in a function of one parameter, and returns a new
memoized function. The memoized function maintains a cache object through
closure such that when we call the function f(3) -> 4, subsequent calls of
f(3) will not recompute f(3) but rather draw upon the cache to return 4.

Use an object store for the cache, as the function parameter may be any value
that's convertable to JSON. (This is just the memoize problem)

*/

export const memoize = (fn: Function): Function => {
  return (value: any) => '';
};

/*

Main problem:

Write a function that memoizes a promise-returning function ("p-function").

Example p-function: 
- fetch(url) returns a promise that resolves to response data
- Similar to fetch but without .json() step

Your function should:
1. Take in a p-function as input
2. Return a new p-function that:
   - Caches results for each input string
   - Returns cached results for repeated calls
   - Still returns promises

Don't worry about error handling.

Hint: look up Promise.resolve - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve

*/

/*

Extension:

Problem: If we call the cached function with the same argument twice, and the 
second call happens before the first promise resolves, are we currently making 
duplicate requests?

Task: Modify cachePromiseFunction to wait for the first in-progress promise to 
resolve instead of starting a duplicate request.

*/

export type PFunc = (url: string) => Promise<unknown>;

export const cachePromiseFunction = (get: PFunc): PFunc => {
  return (url: string) => Promise.resolve('');
};
