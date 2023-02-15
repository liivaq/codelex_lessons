/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(sentence: string) {
    const words = sentence.split(' ');
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

/*
result capitalizes the first letter of the sentence, then the for loop goes through
checking, if in the index before the letter its a space - if it is a space, the letter is capitalized 
and added to result, if its not a space, then the letter is added to the result as is
*/

export { capitalize };
