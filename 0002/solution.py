#!/usr/bin/python3

from functools import cache

@cache
def fib(bar: int) -> int:
    if bar < 2:
        return bar
    return fib(bar-1) + fib(bar-2)

def solve(threshold: int) -> (int):
    solution, auxiliar = 0, 0
    i = 1

    auxiliar = fib(i)
    while auxiliar < threshold:
        if (auxiliar % 2 == 0):
            solution += auxiliar
        i=i+1
        auxiliar = fib(i)

    return solution

if __name__ == '__main__':
    print(solve(4000000))
