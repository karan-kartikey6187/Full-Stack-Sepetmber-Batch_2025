#include <stdio.h>
int main()
{
    int n;
    do
    {
        printf("Enter a Number: ");
        scanf("%d",&n);
        printf("%d\n",n);
        if (n % 7 == 0) //if number is multiple of seven
        {
            break;
        }

    } while (1);

    printf("Thank you!\nEnd");

    return 0;
}