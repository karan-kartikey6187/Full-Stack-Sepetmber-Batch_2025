#include <stdio.h>
int main(){

int firstnumber;
int secondnumber;
int option;

printf("\t\t*****************************Calculator***********************************\n");
printf("1- for Addition\n");
printf("2-for Substraction\n");
printf("3- for multiplication\n");

printf("Please Seclect Any Option: ");
scanf("%d",&option);

printf("Enter First Number: ");
scanf("%d",&firstnumber);

printf("Enter Second Number: ");
scanf("%d",&secondnumber);

switch (option)
{
case 1:
 printf("Sum is: %d\n",firstnumber+secondnumber);
    break;

    case 2:
 printf("Substraction is: %d\n",firstnumber-secondnumber);
    break;

    case 3:
 printf("Multiplication is: %d\n",firstnumber*secondnumber);
    break;

default:
printf("Please Enter Valid Number\n");
    break;
}

    return 0;
}