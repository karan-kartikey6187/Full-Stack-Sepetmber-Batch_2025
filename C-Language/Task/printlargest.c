#include <stdio.h>
int main()
{
    int num[5];
    int largest;
    printf("Enter 5 Number: ");
    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &num[i]);
    }
    largest = num[0];
    for (int i = 1; i < 5; i++)
    {
        if (num[i] > largest)
        {
            largest = num[i];
        }
    }
    printf("Largest number is: %d", largest);

    return 0;
}