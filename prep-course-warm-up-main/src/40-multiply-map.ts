export {};

/**
 * Implement map function which works similarly as
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * NB! The goal of this exercise is not to call .map inside your own map function,
 * but instead  you have to figure out how Array.prototype.map() works under the hood
 * and recreate the logic yourself.
 */

const map = (array: number[], action: (num: number) => number): number[] => {
  const result: number[] = [];
  for (let i = 0; i < array.length; i++) {
    result.push(action(array[i]));
  }
  return result;
};

const numbers = [1, 2, 3];
const doubled = map(numbers, function(number) {
  return number * 2;
});
console.log(doubled); // Expected result: [2, 4, 6]

/* 1. select each number from the array
    2. call the function for each of the elements
    3. after put each element in a new array and return that new array as the result; */