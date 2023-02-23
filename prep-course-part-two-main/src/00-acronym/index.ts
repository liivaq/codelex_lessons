/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
    const cleanWords = input.replace("'", '').replace(/[\W_\^']+/g, ' ');
    const wordsArray = cleanWords.split(' ')
    const result = wordsArray.map(word => word[0].toUpperCase())
    return result.join('')
}

export { parse };
