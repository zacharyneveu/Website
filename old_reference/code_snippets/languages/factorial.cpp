#include<iostream>

using namespace std;
int fact(int);

int main() {
	int input;
	cout<<"Enter a number"<<endl;
	cin>>input;
	cout<<input<<" factorial is: "<<fact(input)<<endl;
	return 0;
}

int fact(int x) {
	if(x == 1 || x == 0)
		return 1;
	else
		return x * fact(x-1);
}
