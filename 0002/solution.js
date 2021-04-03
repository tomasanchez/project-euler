/**
 * Even Fibonacci.
 *
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 *
 * @file This files describes the resolution of Problem 2 of Euler Project.
 * @author Tomas A. Sanchez
 * @since 04.03.2021
 */

function solution() {
  var aNumbers = [];

  for (i = 0; fibonacci(i) < 4000000; i++) aNumbers.push(fibonacci(i));

  return aNumbers.filter((x) => x % 2 === 0).reduce((x, y) => x + y, 0);
}

/**
 * Obtains the fibonacci value of a number.
 *
 * @function
 * @param x  a number
 * @returns the fibonacci of x
 */
function fibonacci(x) {
  var a = 1,
    b = 0,
    temp;

  while (x >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    x--;
  }
  return b;
}
