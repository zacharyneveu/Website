
//Includes
#include<iostream>

//Standard Name Space
using namespace std; //standard name space

int fib(int);

int main() {
	cout<<"Enter a number"<<endl;
	int input;
	cin>>input;
	cout<<"The "<<input<<" term of the fib. series is: "<<fib(input)<<endl;
	return 0;
}

int fib(int x) {
	if(x == 1 || x == 0)
		return 1;
	else
		return fib(x-1) + fib(x-2);
}
