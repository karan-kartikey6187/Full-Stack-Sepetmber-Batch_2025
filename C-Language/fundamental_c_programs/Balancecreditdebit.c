#include <stdio.h>
int main()
{
    float money = 12000;
    float balance;
    float withdwral;

    printf("Enter Amount to Credit: ");
    scanf("%f", &balance);

    money += balance;
    printf("Now your Balance Is: %.2f\n", money);

    printf("Enter Amount to debit: ");
    scanf("%f", &balance);

    money -= balance;

    printf("Your Balance is: %.2f\n", money);

    return 0;
}