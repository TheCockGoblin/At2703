
#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

void conta (int x);

int main(){
	setlocale(LC_ALL,"Portuguese");
	int num;
	
	printf("Informe um n�mero pra ir dele at� 100:");
	scanf("%d", &num);
	conta(num);
	
	system("pause");
	return 0;
	
}

void conta (int x){
		
	if( x <= 100) {
		printf("%d \n", x);
		conta(x + 1);
		
	}
}
