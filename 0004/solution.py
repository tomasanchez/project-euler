#!/usr/bin/python3

def is_palindrome(s: str) -> (bool):
    return s == s[::-1]

def solve() -> (int):
    for i in reversed(range(1000)):
        for j in reversed(range(1000)):
            solution =  i * j
            if is_palindrome(str(solution)):
                return solution

if __name__ == '__main__':
    print(solve())
