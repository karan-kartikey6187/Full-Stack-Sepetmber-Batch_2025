#include <stdio.h>
int main (){
int pin=1234;
int userpin;
int sucess=0;

for (int i = 1; i <=3; i++)
{
   printf("\nEnter Pin:");
   scanf("%d",&userpin);

   if (userpin==pin)
   {
    printf("You have Enter Correct Pin");
    sucess=1;
    break;
   }
   else{
    printf("You Have Enter Wrong Pin %d Attmpt left",3-i);
   }
}
if (sucess!=1)
{
  printf("Your Card Has Been Blocked");
}
    return 0;
}