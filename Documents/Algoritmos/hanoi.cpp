
#include <iostream>
#include <ctime>
using namespace std;

void hanoi(int n, char origen, char auxiliar, char destino){
    if(n==1){
        cout<<"Mover disco "<<n<<" de "<<origen<<" a "<<destino<<endl;
    }else{
        hanoi(n-1,origen,destino,auxiliar);
        cout<<"Mover disco "<<n<<" de "<<origen<<" a "<<destino<<endl;
        hanoi(n-1,auxiliar,origen,destino);
    }
}

int main(){
    int n;
    cout<<"Numero de discos: ";
    cin>>n;
    clock_t start = clock();
    hanoi(n,'A','B','C');
    clock_t end = clock();
    double time = double(end-start)/CLOCKS_PER_SEC;
    cout<<"Tiempo de ejecucion: "<<time<<endl;
    return 0;
}

