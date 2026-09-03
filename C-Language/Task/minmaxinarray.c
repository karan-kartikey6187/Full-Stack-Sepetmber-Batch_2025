#include <stdio.h>
int main ()
{
  int number[5];
  int max,min;
printf("Enter Five Number: ");

for (int i = 0; i < 5; i++)
{
    scanf("%d",&number[i]);
}
max=min=number[0];
for (int i = 1; i < 5; i++)
{
    if (number[i]>max)
    {
      max=number[i];
    }
    
    if (number[i]<min)
    {
      min=number[i];
    }  
}
printf("Biggest Number is: %d\n",max);
printf("Smallest Number is: %d",min);
    return 0;
}