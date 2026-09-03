#include <stdio.h>
int main()
{ // sum of all number
    int num;
    int sum = 0;
    printf("Enter number: ");
    scanf("%d", &num);

    for (int i = 1; i <= num; i++)
    {
        sum = sum + i;
    }
    printf("Sum of Number is: %d", sum);
    return 0;
}