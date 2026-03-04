/**
 * Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Assume y will always be a non-negative integer, but x may be any number.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion.
 */

function pow(base: number, power: number): number {
  let newBase = 1;
  if (power === 0) {
    base = 1;
    return base;
  } else for (let i = 1; i <= power; i++) {
    newBase *= base;
  }
  return newBase; // Placeholder return value for type safety - replace for your solution
}

console.log(pow(2,0));
console.log(pow(2,1));
console.log(pow(2,4));

/**
 * Extension: Use recursion.
 */

function powRecurse(base: number, power: number): number {
  return 0; // Placeholder return value for type safety - replace for your solution
}

export { pow, powRecurse };
