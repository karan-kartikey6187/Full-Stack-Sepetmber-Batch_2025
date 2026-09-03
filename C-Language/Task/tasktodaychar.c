#include <stdio.h>
int main()
{
     char character;
     char lower='k';
     char upper='K';
     int exit=0;
   while (exit==0)
   {
    printf("Please Enter a Character: ");
    scanf(" %c",&character);

    if (character==lower || character==upper)
   {
    printf("Match\n");
    exit=1;
   }
   else
{ 
    printf("Not Match\n"); 
} 
   }
    return 0;
}