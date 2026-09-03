#include <stdio.h>
int main()
{
    int num[3];
    printf("Enter First Number: ");
    scanf("%d", &num[0]);

    printf("Enter Second Number: ");
    scanf("%d", &num[1]);

    printf("Enter Third Number: ");
    scanf("%d", &num[2]);

    for (int i = 2; i >= 0; i--)
    {
        printf("%d", num[i]);
    }

    printf("\n%d", num[2]);
    printf("%d", num[0]);
    printf("%d", num[1]);

    return 0;
}