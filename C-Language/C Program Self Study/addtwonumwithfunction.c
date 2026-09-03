#include <stdio.h>

int sum(int a ,int b);

int main ()
{
    int a,b;
    int total;

    printf("Enter First Number: ");
    scanf("%d",&a);
    printf("Enter Second Number: ");
    scanf("%d",&b);

    printf("Sum is: %d",sum(a,b));
}
int sum(int a,int b)
{
    return a+b;
}

