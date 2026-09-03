#include <stdio.h>
int main()
{
    //The user can input numbers until they enter an odd number.
    int n;
    do
    {
        printf("Enter a Number: ");
        scanf("%d",&n);
        printf("%d\n",n);
        if (n % 2 != 0)
        {
            break;
        }

    } while (1);

    printf("Thank you!\nEnd");

    return 0;
}