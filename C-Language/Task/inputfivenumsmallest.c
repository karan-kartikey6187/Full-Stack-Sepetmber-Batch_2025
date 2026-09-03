#include <stdio.h>
int main()
{
    int num[5];
    int small;
    printf("Enter 5 Number: ");
    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &num[i]);
    }
    small = num[0];
    for (int i = 1; i < 5; i++)
    {
        if (num[i] < small)
        {
            small = num[i];
        }
    }
    printf("Smallest number is: %d", small);

    return 0;
}