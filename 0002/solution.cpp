#include <iostream>

#define INPUT 4000000

using namespace std;

long int fibonacci(const int n)
{
	if(n == 0 || n == 1) {
		return n;
	}

	else return fibonacci(n-1) + fibonacci(n-2);
}

int solve(const int threshold) {
    long int solution {0}, auxiliar {0};
    int i {1};

    auxiliar = fibonacci(i);
    while(auxiliar < threshold) {
        if(auxiliar % 2 == 0)
            solution += auxiliar;
        i++;
        auxiliar = fibonacci(i);
    }

    return solution;
}

int main(void) {
	cout << solve((const int) INPUT) << endl;
	return 0;
}
