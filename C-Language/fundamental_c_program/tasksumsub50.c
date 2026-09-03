#include <stdio.h>
int main()
{
int firstno;
int secondno;
int sum;
int sub;
    printf("Enter any number:");
    scanf("%d",&firstno);

     printf("Enter any number:");
    scanf("%d",&secondno);

    sum=firstno+secondno;
    sub=firstno-secondno;

    if ((sum>50&&sub>50)&&(firstno>secondno))
    {
        printf("You have entered right number\n sum:%d sub:%d",sum,sub);
    }
    
    else{

        printf("Please Enter Valid Number");
    }

    return 0;
}