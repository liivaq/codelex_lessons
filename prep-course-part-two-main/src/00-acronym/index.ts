/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
    let acronym = '';
    const cleanWords = input.replace(/[^a-zA-Z^']/g, ' ').split(' ');
    cleanWords.forEach((word) => {
        const letter = word[0];
        const nextLetter = letter ? letter.toUpperCase() : "";
        acronym += nextLetter;
    })
    return acronym
}

export { parse };
