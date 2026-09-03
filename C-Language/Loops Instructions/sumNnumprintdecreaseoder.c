#include <stdio.h>
int main()
{
    int N;
    int sum = 0;
    printf("Enter Number: ");
    scanf("%d",&N);

    for (int i = 1, j=N; i <= N && j>=i; i++ ,j--)
    {
        sum = sum + i;
        printf("%d\n",j);
    }

    printf("Sum is: %d\n", sum);

    return 0;
}