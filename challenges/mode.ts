/*

Given an array of numbers, return the mode (the number that appears most often).
If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = (array: number[]): number => {
  return 0;
};

/*

Extension:

Given an arbitrarily nested array of numbers, return the mode.
If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the nested array structure,
although some of the inner nested arrays may be empty.

e.g.
modeNested([[3], [2, [4]], 3]) -> 3
modeNested([7, [[5, [8], 8], 2, 5]]) -> 8
modeNested([4, []]) -> 4 

*/

type NestedArray<T> = (T | NestedArray<T>)[];

const modeNested = (array: NestedArray<number>): number => {
  return 0;
};

export { mode, modeNested, NestedArray };
