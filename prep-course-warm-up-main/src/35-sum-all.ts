export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = (numberOne: number, numberTwo: number) => {
    let sum: number[] = []    
    for (let i = numberOne; i <= numberTwo; i++){
        sum.push(i)
    }
return sum.reduce((a,b) => a + b);
           
}



console.log(sumAll(1, 4)); // Expected output: 10
