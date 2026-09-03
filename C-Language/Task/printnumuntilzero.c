#include <stdio.h>

int main(){
int num,sum=0;

while (1)
{
printf("Enter Number: ");
scanf("%d",&num);
if (num==0)
{
break;
}
sum+=num; 
}
printf("Sum is: %d",sum);
    return 0;
}