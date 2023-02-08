/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
    let acronym = '';
    const words = input.replace('-', ' ').replace(/[^A-Za-z ]/g,"").split(' ');
    words.forEach((word) => {
        const letter = word[0];
        const nextLetter = letter ? letter.toUpperCase() : "";
        acronym = acronym + nextLetter;
    })
    return acronym
}

export { parse };
