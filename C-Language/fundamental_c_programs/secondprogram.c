#include <stdio.h>
int main()
{
    int firstnumber;
    int secondnumber;
// input two number form user and add them
   printf("Enter First Number: ");
   scanf("%d",&firstnumber);

   printf("Enter Second Number: ");
   scanf("%d",&secondnumber);

int sum=firstnumber+secondnumber;

   printf("Firstnumber:%d\n",firstnumber);
   printf("Lastsecond:%d\n",secondnumber);
   printf("Sum of Both Number is:%d\n",sum);

    return 0;
}