#!/usr/bin/python3

import math

def is_prime(n: int) -> bool:
   if n <= 1:
      return False
   elif n == 2:
      return True
   elif n > 2 and n % 2 == 0:
      return False
   else:
      for i in range(3, math.floor(math.sqrt(n)) + 1, 2):
         if n % i == 0:
            return False
      return True

def prime_factors(n: int) -> []:
    primes = []

    for i in range(1, math.floor(math.sqrt(n)) + 1):
        if n % i == 0:
            if is_prime(i):
                primes.insert(0, i)

    if is_prime(n):
        primes.append(i)

    return primes

def solve(n: int) -> (int):
    return prime_factors(n)[0]

if __name__ == '__main__':
    print(solve(600851475143))
