#include <stdio.h>

int main()
{
    int num;
    printf("Enter Number: ");
    scanf("%d", &num);
    for (int i = 1; i <= num; i++)
    {
        int sum = i * i;
        printf("Square of %d  = %d\n", i, sum);
    }
    return 0;
}