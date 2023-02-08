/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA: string, stringB: string) {
    function cleanInputs(input:string) {
        return input.replace(/[^A-Za-z]/g, '').toLowerCase();
    }

    const cleanA = cleanInputs(stringA)
    const cleanB = cleanInputs(stringB)

    if( cleanA.length !== cleanB.length) {
        return false
    }

    return cleanA.split('').sort().join() === cleanB.split('').sort().join()
}

export { anagrams };
