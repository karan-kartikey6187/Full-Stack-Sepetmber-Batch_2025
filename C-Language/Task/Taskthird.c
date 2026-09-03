#include <stdio.h>
int main()
{
    int num;
    int factorial = 1;
    printf("Enter a number for factorial: ");
    scanf("%d", &num);

    for (int i = num; i >= 1; i--)
    { // ex- for num=6 1*6 6*5 30*4 120*3 360*2 720*1 = 720
        factorial = factorial * i;
    }
    printf("Factorial is: %d", factorial);
    return 0;
}