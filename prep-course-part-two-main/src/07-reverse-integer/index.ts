/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {
    return (
        parseFloat(int.toString().split('').reverse().join(''))*Math.sign(int)
    )     
}


export { reverse };

/*

1. convert number to string;
2. split string into array;
3. reverse the array;
4. turn the array back to string;
5. turn the string to number 
6. somehow deal with the negative numbers?

*/
