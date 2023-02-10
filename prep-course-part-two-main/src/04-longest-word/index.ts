/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

/*function longestWord(sen: string) {
    let longestWord: string = ''
    const toArray: string[] = sen.split('')
    toArray.reduce((a:string, b:string) => a.length >= b.length ? longestWord = a : longestWord = b)
    return longestWord
 
}*/
function longestWord(sen: string) {
    let words = sen.split(/[^a-zA-Z]/);
    let longestWord = "";
    words.forEach(word => {
        if(word.length > longestWord.length){
            longestWord = word;
        }
    })
    return longestWord
}

export { longestWord };

/*

1. put the string into an array
2. take each word of the array and compare it to each other
3. put the longest of compared words in a new variable
4. return the longest word

*/