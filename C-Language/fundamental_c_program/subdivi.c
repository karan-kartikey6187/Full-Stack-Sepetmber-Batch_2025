#include <stdio.h>
int main()
{
    // substraction and division of two number
    float firstnumber;
    float secondnumber;
    float finalsub;
    float finaldiv;

    printf("Enter First Number: ");
    scanf("%f", &firstnumber);

    printf("Enter Second Number: ");
    scanf("%f", &secondnumber);

    finalsub = firstnumber - secondnumber;
    printf(">>>>>>>>>>>>>>>>>>>>>>>>This Is Subtraction Of Two Number<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n");
    printf("\t\t\t%f\t-\t%f\t=\t%f\n", firstnumber, secondnumber, finalsub);

    finaldiv = firstnumber / secondnumber;
    printf(">>>>>>>>>>>>>>>>>>>>>>>>This Is Division Of Two Number<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n");
    printf("\t\t\t%f\t/\t%f\t=\t%f\n", firstnumber, secondnumber, finaldiv);

    return 0;
}