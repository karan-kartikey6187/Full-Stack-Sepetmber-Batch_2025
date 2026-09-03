#include <stdio.h>
int main()
{
    int num;
   int count=1;
   int sum=0;
   while (count<=10)
   {
    printf("Enter %d Number: ",count);
    scanf("%d",&num);
    sum+=num;
    count++;
   }
printf("Sum of all 10 Number is: %d",sum);
   
    return 0;
}