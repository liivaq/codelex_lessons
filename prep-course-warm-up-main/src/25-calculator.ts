export {};

function add(x: number, y: number) {
    return x + y;
}

function subtract(x: number, y: number) {
    return x - y;
}

function sum(numbers: number[]): number {
    return numbers.reduce((a, b) => a + b); 
    // a = accumulator, b = currentValue, 0 - initial value of the accumulator; currentValue changes with every cycle to previous result, thus 0+1; 1+2; 3+3 = 6
}

function multiply(numbers: number[]): number {
    return numbers.reduce((a, b) => a * b, 1);
    // initial accumulator = 1, because any number multiplied by 1 returns the same number, if it was 0, everything would end up being 0, because that's what happens when multiplying with 0
}

function power(base: number, exponent: number) {
    return Math.pow(base, exponent);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
