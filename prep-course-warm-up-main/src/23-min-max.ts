export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

// Version with Math

/*const min = (array: number[]) => {
    return Math.min(...array);
 }
 
 const max = (array: number[]) => {
     return Math.max(...array);
 }
*/

//Version one without Math
/*const min = (array: number[]) => array.reduce((a, b) => a > b ? b : a);
const max = (array: number[]) => array.reduce((a, b) => a < b ? b : a);
*/

//Version two without Math
/*const min = (array: number[]) => {
    array.sort((a, b) => a - b)
    return array[0]
}

const max = (array:number[]) => {
    array.sort((a, b) => a - b)
    return array.pop()
}
*/

//Version three without Math

const min = (array: number[]) => {
  let minNumber: number = array[0];
  for (let i = 1; i <= array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    }
  }
  return minNumber;
};

const max = (array: number[]) => {
  let maxNumber: number = array[0];
  for (let i = 1; i <= array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }
  return maxNumber;
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
