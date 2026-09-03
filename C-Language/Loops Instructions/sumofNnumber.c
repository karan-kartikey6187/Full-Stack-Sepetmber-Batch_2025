#include <stdio.h>
int main()
{
    int N;
    int sum = 0;
    printf("Enter Number: ");
    scanf("%d",&N);

    for (int i = 1; i <= N; i++)
    {
        sum = sum + i;
    }

    printf("Sum is: %d\n", sum);

    return 0;
}