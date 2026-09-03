#include <stdio.h>
int main(){
int math;
int science;
int hindi;
int english;
int sum;
float percentage;

printf("Enter Math Marks:");
scanf("%d",&math);
printf("Enter Science Marks:");
scanf("%d",&science);
printf("Enter Hindi Marks:");
scanf("%d",&hindi);
printf("Enter English Marks:");
scanf("%d",&english);

sum=math+science+hindi+english;

printf("Total:%d\n",sum);

percentage=sum/4;

printf("Percentage:%.2f",percentage);

    return 0;
}