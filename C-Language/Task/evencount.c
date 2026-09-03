#include <stdio.h>
int main()
{
    int count = 0;
    int num;
    printf("Enter Number: ");
    scanf("%d", &num);

    for (int i = 1; i <= num; i++)
    {
        if (i % 2 == 0)
        {
            printf("%d\n", i);
            count++;
        }
    }
    printf("Total Count: %d", count);

    return 0;
}