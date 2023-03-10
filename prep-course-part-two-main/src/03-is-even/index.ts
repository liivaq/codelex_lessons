/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

const evenNums = ['0', '2', '4', '6', '8']
function isEven(nums: number) {
    const lastDigit = nums.toString().split('.')[0].slice(-1);
    return evenNums.includes(lastDigit)
}

export { isEven };
