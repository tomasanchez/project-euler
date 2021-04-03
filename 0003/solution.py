#!/usr/bin/python3

import math

def is_prime2(n: int) -> bool:
    if n >= 2:
        for i in range(2, n):
            if not (n % i):
                return False
    else:
	    return False
    return True

def prime_factors(n: int) -> []:
    primes = []

    for i in range(1, math.floor(math.sqrt(n)) + 1):
        if n % i == 0:
            if is_prime2(i):
                primes.insert(0, i)

    if is_prime2(n):
        primes.append(i)

    return primes

def solve(n: int) -> (int):
    return prime_factors(n)[0]

if __name__ == '__main__':
    print(solve(600851475143))
