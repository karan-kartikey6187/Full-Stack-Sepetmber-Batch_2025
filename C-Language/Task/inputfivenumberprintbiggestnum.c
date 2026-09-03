#include <stdio.h>
int main()
{
   int num[5];
    int big;
   printf("Enter 5 Number: ");
   for (int i = 0; i < 5; i++)
   {
    scanf("%d",&num[i]);
   }
   big=num[0];
   for (int i = 0; i < 5; i++)
   {
     
            if (num[i]>big)
            {
               big=num[i] ;
            }
   }
   printf("Biggest Number is: %d",big);

    return 0;
}