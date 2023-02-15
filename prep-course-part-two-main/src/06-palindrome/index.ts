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

function palindrome(word: string) {
    let newWord = '';
    for (let i = word.length-1; i >= 0; i--) {
       newWord += word[i]         
    }
    return word === newWord? true : false
}

export { palindrome };

