/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

/*function reverse(str: string) {
    let splitString = str.split('');
    let reversedString = splitString.reverse().join('')
    return reversedString
}
*/

function reverse(str: string){
    let newString = '';
    for (let i = str.length-1; i >= 0; i--) {
        newString += str[i]
    }
    return newString
}

export { reverse };

/*
1. split string into an array
2. reverse the array
3. turn the array back into a string

*/