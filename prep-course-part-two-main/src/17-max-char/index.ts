/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(word: string) {
  const newArray = word.split("");
 
  return newArray
    .sort(
      (a, b) => newArray.filter(c => c === a).length - newArray.filter(c => c === b).length)
    .pop();
}

export { maxChar };
