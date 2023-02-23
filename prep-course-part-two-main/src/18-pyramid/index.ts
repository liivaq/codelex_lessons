/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(rows: number): void {

  for (let i = 1; i <= rows; i++) {
    let drawing = ''

    for (let j = 1; j <= rows - i; j++) {
      drawing += ' '
    }
    
    for (let k = 1; k <= 2 * i - 1; k++) {
      drawing += '#'
    }
    
    for (let l = 1; l <= rows - i; l++) {
      drawing += ' '
    }

    console.log(drawing)
  }
}

export { pyramid };
