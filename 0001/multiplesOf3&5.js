/**
 *  Multiples of 3 & 5.
 *
 * Obtains the sum of all multiples of 3 and 5.
 *
 * @file This files describes the resolution of Problem 1 of Euler Project.
 * @author Tomas A. Sanchez
 * @since 04.03.2021
 */

solution = () => {
  // First generate the array of 1000 elements
  Array.from(Array(1000).keys())
    // As keys are 0, sum 1 to each
    .map((x) => x + 1)
    // Filter all that are multiple of 5 & 3
    .filter((x) => x % 5 === 0 && x % 3 === 0)
    // Sum all of them
    .reduce((x, y) => x + y, 0);
};
