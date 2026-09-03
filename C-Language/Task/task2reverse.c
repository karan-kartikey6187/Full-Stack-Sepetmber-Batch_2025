#include <stdio.h>
int main(){

    int num[10];

printf("..........Enter 10 Number........\n");

for (int i = 0; i < 10; i++)
{
   scanf("%d",&num[i]);
}

for (int i = 9; i >=0; i--)
{
    printf("%d\n",num[i]);
}
    return 0;
}