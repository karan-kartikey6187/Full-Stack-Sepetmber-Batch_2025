#include <stdio.h>
int main(){
double factorial=1;
int n;
printf("Enter Number: ");
scanf("%d",&n);
    for (int i = 1; i <= n; i++)
    {
    factorial=factorial*i;
    }
    printf("Factorial is:%lf\n",factorial);

    return 0;
}