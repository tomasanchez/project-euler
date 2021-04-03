#include <stdio.h>

#define INPUT 1000

int solve(const int n) {
    int solution = 0;

    for(int i = 0; i < n; i++){
        if(i % 3 == 0 || i % 5 == 0){
            solution += i;
        }
    }

    return solution;
}

int main(void) {
    printf("%d\n", solve((const int) INPUT));
    return 0;
}
