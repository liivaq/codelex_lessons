/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

/*function steps(lines: number) {
    for (let i = 1; i <= lines; i++) {
        console.log('#'.repeat(i) + ' '.repeat(lines - i));
    }
}*/

function steps(rows: number){
    for(let i = 1; i <= rows; i++ ){
        let drawing = ''
        for(let j = 1; j<= i; j++){
            drawing += '#'
        }
        for(let k = 1; k <= rows - i; k++){
            drawing += ' '
        }
        console.log(drawing) 
    }
}

export { steps };
