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

/*function pyramid(n: number): void {

}*/

function pyramid(n: number): void {
    const midpoint = n-1;
    for (let row = 0; row < n; row++) {
        let level = '';
        for (let col = 0; col < 2 * n - 1; col++) {
          if (midpoint - row <= col && midpoint + row >= col) {
            level += '#';
          } else {
            level += ' ';
          }
        }
        console.log(level);
      }
    
  }
export { pyramid };
