#include <stdio.h>
int main()
{
    int oldpassword = 1234;
    int newpassword;
    int count = 0;
    int setpassword = 1;
    int confirmpassword;
    do
    {
        printf("Please Enter Password: ");
        scanf("%d", &newpassword);
        if (newpassword != oldpassword)
        {
            printf("%d Attempt Left\n", 3 - count);
        }
        if (oldpassword == newpassword)
        {
            printf("Sucess! Thank you...");
            break;
        }
        else
        {
            count++;

            if (count == 4)
            {
                printf("\n\nPlease Update Your Password\n\n");

                printf("\nNew Password: ");
                scanf("%d", &setpassword);

                printf("\nConfirm Password: ");
                scanf("%d", &confirmpassword);

                if (setpassword == confirmpassword)
                {
                    printf("\nYour Password Has Been Sucessfully Updated!\n\n");
                    oldpassword = confirmpassword;
                    count = 1;
                }
                else
                {
                    printf("\nSorry! You Have enterd Diffrent Password in Both");
                }
            }
        }
    } while (count < 4);

    return 0;
}