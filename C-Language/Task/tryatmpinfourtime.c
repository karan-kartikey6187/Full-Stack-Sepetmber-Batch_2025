#include <stdio.h>
int main()
{

    int oldpin = 5474;
    int newpin;
    int count = 1;

    do
    {
        printf("Enter Your Pin Number: ");
        scanf("%d", &newpin);

        if (newpin == oldpin)
        {
            printf("Sucessfull thank you..");
            break;
        }
        else
        {
            printf("%d attempt Left\n", 4 - count);
            count++;
        }
        if (count > 4)
        {
            printf("Your Card Has Been Blocked\n");
        }

    } while (count <= 4);

    return 0;
}