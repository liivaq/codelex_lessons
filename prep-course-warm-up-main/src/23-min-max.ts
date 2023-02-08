export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

// Version with Math

const min = (array: number[]) => {
    return Math.min(...array);
 }
 
 const max = (array: number[]) => {
     return Math.max(...array);
 }

//Version one (works)
/*const min = (array: number[]) => array.reduce((prev,next) => prev>next ? next : prev);
const max = (array:number []) => array.reduce((prev,next) => prev<next ? next : prev);*/


 //Version two (works)
/*const min = (array: number[]) => {
    array.sort((a, b) => a - b)
    return array[0]
}

const max = (array:number[]) => {
    array.sort((a, b) => a - b)
    return array.pop()
}*/





console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
