export {};

function add(x: number, y: number) {
  return x + y;
}

function subtract(x: number, y: number) {
  return x - y;
}

function sum(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b);
}

function multiply(numbers: number[]): number {
  return numbers.reduce((a, b) => a * b, 1);
}

function power(base: number, exponent: number) {
  return Math.pow(base, exponent);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
