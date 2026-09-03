#include <stdio.h>
int main()
{
    int num;
    int i = 1;
    printf("Enter Number: ");
    scanf("%d", &num);

    while (i <= num)
    {
        printf("%d\n", i);

        i++;
    }
    return 0;
}