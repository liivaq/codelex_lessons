/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str: string) {
    let newString = '';
    for (let i = str.length-1; i >= 0; i--) {
       newString += str[i]         
    }
    return str === newString? true : false
}

export { palindrome };

/*
1. reverse the word
2. check if the reversed word is the same as the original
*/

