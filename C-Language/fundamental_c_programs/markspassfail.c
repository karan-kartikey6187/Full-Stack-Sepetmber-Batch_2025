#include <stdio.h>
int main()
{
int english;
int math;
int science;
int hindi;
float per;

printf("Enter Marks of English:");
scanf("%d",&english);

printf("Enter Marks of Math:");
scanf("%d",&math);

printf("Enter Marks of Science:");
scanf("%d",&science);

printf("Enter Marks of Hindi:");
scanf("%d",&hindi);
per=hindi+science+math+english;
printf("Your Percentage is: %f\n",per/4);

if (english>=33&&math>=33&&science>=33&&hindi>=33)
{
    printf("You Are Pass");
}
else
printf("You Are Fail");

    return 0;
}