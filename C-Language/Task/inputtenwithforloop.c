#include <stdio.h>
int main()
{
    int num;
   int sum=0;
  for (int count = 1; count <= 10; count++)
  {
     printf("Enter %d Number: ",count);
    scanf("%d",&num);
    sum+=num;
  }
printf("Sum of all 10 Number is: %d",sum);
   
    return 0;
}