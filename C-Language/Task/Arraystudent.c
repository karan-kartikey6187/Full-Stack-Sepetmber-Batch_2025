#include <stdio.h>
int main()
{

    int marks[5];
    int sum = 0;
    float percentage;

    for (int i = 0; i < 5; i++)
    {
        printf("Enter subject Marks : ");
        scanf("%d", &marks[i]);
        sum += marks[i];
    }

    percentage = sum / 5;
    printf("Total Marks is: %d\n", sum);
    printf("Total Percentage is: %f", percentage);

    return 0;
}