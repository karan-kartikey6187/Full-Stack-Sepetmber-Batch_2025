#include <stdio.h>
int main()
{
    int num;
    int first,second,third,forth,fifth,sixth,seventh,eight,ninth,tenth;
   int count=1;
   int firstsum;
   while (count<=10)
   {
    firstsum=0;
    printf("%d Student marks in hindi: ",count);
    scanf("%d",&num);
firstsum+=num;
     printf("%d Student marks in english: ",count);
    scanf("%d",&num);
firstsum+=num;
     printf("%d Student marks in maths: ",count);
    scanf("%d",&num);
firstsum+=num;
     printf("%d Student marks in science: ",count);
    scanf("%d",&num);
firstsum+=num;
printf("\n***********************************************************************************\n");

if (count==1)
{
    first=firstsum;
}
if (count==2)
{
    second=firstsum;
}
if (count==3)
{
    third=firstsum;
}
if (count==4)
{
  forth=firstsum;
}
if (count==5)
{
    fifth=firstsum;
}
if (count==6)
{
    sixth=firstsum;
}
if (count==7)
{
    seventh=firstsum;
}
if (count==8)
{
    eight=firstsum;
}
if (count==9)
{
    ninth=firstsum;
}
if (count==10)
{
    tenth=firstsum;
}
    count++;

   }
printf("sum of 1st student marks is: %d\n",first);
printf("sum of 2nd student marks is: %d\n",second);
printf("sum of 3d student marks is: %d\n",third);
printf("sum of 4th student marks is: %d\n",forth);
printf("sum of 5th student marks is: %d\n",fifth);
printf("sum of 6th student marks is: %d\n",sixth);
printf("sum of 7th student marks is: %d\n",seventh);
printf("sum of 8th student marks is: %d\n",eight);
printf("sum of 9th student marks is: %d\n",ninth);
printf("sum of 10th student marks is: %d\n",tenth);
   
    return 0;
}