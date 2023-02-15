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

function reverse(word: string){
    let newString = '';
    for (let i = word.length-1; i >= 0; i--) {
        newString += word[i]
    }
    return newString
}

export { reverse };
