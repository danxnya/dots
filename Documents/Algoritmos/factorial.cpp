#include <iostream>
#include <ctime>
using namespace std;

unsigned long long factorial(unsigned long long n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    
    unsigned long long result = 1;
    for (unsigned long long i = 2; i <= n; ++i) {
        result *= i;
    }
    
    return result;
}

int main() {
    unsigned long long n;
    cout << "Numero: ";
    cin >> n;

    if (n < 0) {
        cout << "El factorial no está definido para números negativos." << endl;
        return 1;
    }

    clock_t start = clock();
    unsigned long long factorialResult = factorial(n);
    clock_t end = clock();

    cout << "Factorial: " << factorialResult << endl;
    double time = double(end - start) / CLOCKS_PER_SEC;
    cout << "Tiempo de ejecucion: " << time << " segundos" << endl;

    return 0;
}
