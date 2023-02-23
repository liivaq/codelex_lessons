export {};
function truncateString(word: string, length: number): string {
  return word.substring(0, length);
}
console.log(truncateString("CODELEX", 4)); // Expected output: CODE
