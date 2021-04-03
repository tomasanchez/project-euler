#!/usr/bin/python3

def solve(n: int) -> (int):
    solution = 0
    for i in range(1, n):
        if i % 3 == 0 or i % 5 == 0:
            solution += i

    return solution

if __name__ == '__main__':
    print(solve(1000))

