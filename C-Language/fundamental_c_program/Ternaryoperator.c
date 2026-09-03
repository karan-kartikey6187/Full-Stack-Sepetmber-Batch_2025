#include <stdio.h>
int main()
{

int age;

printf("enter your age: ");
scanf("%d",&age);
//ismai sabse phale condition ati hai ? agar condition shai hai to ye print hoga : Varna ye print hoga ;
age>=18 ? printf("You Are Adult") : printf("Not Adult");

    return 0;
}