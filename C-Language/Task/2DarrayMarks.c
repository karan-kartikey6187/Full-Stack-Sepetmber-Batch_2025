#include <stdio.h>
int main ()
{
int m;
printf("Enter Total Number of student: ");
scanf("%d",&m);
int student[m][3];

for ( int i = 0; i < m; i++)
{
    printf("\nEnter marks of Student %d",i+1);

    for (int j = 0; j<=2 ; j++)
    {
       scanf("%d",&student[i][j]);
    }
}

for ( int i = 0; i < m; i++)
{ 
    printf("\nMarks of Student %d: ",i+1);
    for (int j = 0; j<=2 ; j++)
    {
       printf(" %d",student[i][j]);
    }
}

    return 0;
}