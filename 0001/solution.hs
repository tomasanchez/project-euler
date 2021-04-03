{-
 * Multiples of 3 & 5.
 *
 * Obtains the sum of all multiples of 3 and 5.
 *
 * @file This files describes the resolution of Problem 1 of Euler Project.
 * @author Tomas A. Sanchez
 * @since 04.03.2021
-}

soution :: Int -> Int
solution n =   sum . filter(\ x -> x `rem` 5 == 0 || x `rem` 3 == 0) [1..n-1]