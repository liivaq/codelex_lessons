export {};

const count = (sentence: string, word: string) => {
  return sentence.toLowerCase().split(word).length - 1;
};

/*const count = (sentence: string, word: string) => {
  return sentence
    .toLowerCase()
    .split(" ")
    .filter((value) => value === word).length;
};
*/

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
