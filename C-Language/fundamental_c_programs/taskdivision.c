#include <stdio.h>
int main()
{
int english;
int math;
int science;
int hindi;
float percentage;
float total;

printf("Enter Marks of English:");
scanf("%d",&english);

printf("Enter Marks of Math:");
scanf("%d",&math);

printf("Enter Marks of Science:");
scanf("%d",&science);

printf("Enter Marks of Hindi:");
scanf("%d",&hindi);
percentage=hindi+science+math+english;
total=percentage/4;
printf("Your Percentage is: %.2f\n",total);

if (total>60&&total<=100)
{
    printf("First Division");
}
else if (total<60&&total>=45)
{
    printf("Second division");
}
else if (total<45&&total>=33)
{
    printf("Third Division");
}
else if (total<33)
{
    printf("Fail");
}
else
printf("You have entered Wrong Marks");

return 0;
}