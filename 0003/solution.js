/**
 * Largest prime factor.
 *
 * Largest prime factor of 600851475143
 *
 * @file This files describes the resolution of Problem 3 of Euler Project.
 * @author Tomas A. Sanchez
 * @since 04.03.2021
 */

/**
 * Obtains the largest prime factor of 600851475143.
 *
 * @function
 * @returns the largest prime factor of 600851475143.
 */
function solution(x = 600851475143) {
  return Math.max(...getDivisors(x).filter(isPrime));
}

/**
 * Obtains the divisors of a number.
 *
 * @function
 * @param {number} n the number itself.
 * @returns a list of divisors.
 */
function getDivisors(n) {
  if (n < 1) throw "Argument error";

  var small = [];
  var large = [];

  var end = Math.floor(Math.sqrt(n));

  for (var i = 1; i <= end; i++) {
    if (n % i == 0) {
      small.push(i);
      if (i * i != n)
        // Don't include a square root twice
        large.push(n / i);
    }
  }

  large.reverse();

  return small.concat(large);
}

/**
 * Tells if a number is prime or not.
 *
 * @function
 * @param {number} x the number to check
 * @returns {boolean} if the number is prime or not.
 */
function isPrime(x) {
  for (var i = 2; i < x; i++) if (x % i === 0) return false;
  return x > 1;
}
