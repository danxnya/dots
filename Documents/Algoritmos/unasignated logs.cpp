
#include <iostream>
#include <ctime>
using namespace std;

unsigned long long fibbonacci(unsigned long long n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return fibbonacci(n-1)+fibbonacci(n-2);
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
    unsigned long long fibbonacciResult = fibbonacci(n);
    clock_t end = clock();

    cout << "Fibbonacci: " << fibbonacciResult << endl;
    double time = double(end - start) / CLOCKS_PER_SEC;
    cout << "Tiempo de ejecucion: " << time << " segundos" << endl;

    return 0;
}

