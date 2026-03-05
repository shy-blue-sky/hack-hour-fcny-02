/*
 * You have an unsorted array of n + 1 integers, ranging from 1 to n,
 * with an extra number that is a duplicate. Find and return that number.
 * If no duplicates are found, return 0.
 * ex: [1,5,4,3,6,2,4,7] should return 4
 */

export const duplicateNumber = (array: number[]): number => {
  for (let i = 0; i < array.length; i++) {
    let numToCompare = array[i]
    console.log("numToCompare value:", numToCompare)
    for (let j = i+1; j < array.length; j++) {
      console.log("array[j]", array[j])
      if (numToCompare === array[j]) {
        console.log("numToCompare equals array[j]!")
        return numToCompare
      }
    }
  }
  return 0;
};

const arr1 = [1,5,4,3,6,2,4,7];
console.log(duplicateNumber(arr1));

// const arr2 = [1,5,4];
// console.log(duplicateNumber(arr2));


/*
 * Extension:
 * You have an unsorted array of n + 1 positive integers, ranging from k to k +
 * (n - 1), with an extra number that is a duplicate.
 * Find and return the duplicate. Do this in O(n) time and O(1) space complexity.
 * If no duplicates are found, return 0.
 * ex: [3, 4, 7, 6, 8, 5, 6] should return 6
 */

export const duplicateNumberAdvanced = (array: number[]): number => {
  return 0;
};

// For todays hack hour problem this is the leetcode question equivalent: https://leetcode.com/problems/find-the-duplicate-number