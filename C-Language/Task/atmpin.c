#include <stdio.h>
int main()
{
    int pin = 123456;
    int userpin;
    int success = 0;

    for (int i = 1; i <= 3; i++)
    {
        printf("Enter ATM Pin: ");
        scanf("%d", &userpin);

        if (userpin == pin)
        {
            printf("You Have Entered Correct Pin");
            success = 1;
            break;
        }
        else
            printf("Please enter Correct Pin %d Attampt Left\n", 3 - i);
    }
    if (success != 1)
    {
        printf("Your Card Have Been Blocked ");
    }
    return 0;
}
