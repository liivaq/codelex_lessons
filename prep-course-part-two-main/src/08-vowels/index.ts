/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

const allVowels: string[] = ['a', 'e', 'i', 'o', 'u']

function vowels(word: string): number {
    const stringToArray = word.toLowerCase().split('');
    
    let returnedVowels = ''
    
    for(let i = 0; i <= stringToArray.length; i++) {
        if(allVowels.includes(stringToArray[i])){
           returnedVowels += stringToArray[i]
        }
    }
    
    return returnedVowels.length
}       
    

export { vowels };
