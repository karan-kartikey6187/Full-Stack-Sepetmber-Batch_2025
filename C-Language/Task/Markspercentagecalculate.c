#include <stdio.h>
int main(){
int student=1;
int hindi,math,science,history,english;
int total;
float percentage;
while (student<=5)
{
  printf("*****************Student- %d************************\n",student);
  printf("Hindi: ");
  scanf("%d",&hindi);  
  printf("Math: ");
  scanf("%d",&math);
  printf("science: ");
  scanf("%d",&science);
  printf("history: ");
  scanf("%d",&history);
  printf("English: ");
  scanf("%d",&english);
  total=hindi+math+science+history+english;
  percentage=total/5;
  printf("Total Marks of Student %d is: %d\n",student,total);
  printf("Total Percentage is %f\n",percentage);
  if (percentage>=90&&percentage<=100)
  {
    printf("Student %d got A Grade\n",student);
  }
   if (percentage<90&&percentage>=75)
  {
    printf("Student %d got B Grade\n",student);
  }
   if (percentage<75&&percentage>=50)
  {
    printf("Student %d got C Grade\n",student);
  }
 if (percentage<50)
  {
    printf("Student %d Fail\n",student);
  }
  student++;
}
    return 0;
}