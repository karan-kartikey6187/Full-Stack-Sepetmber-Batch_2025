#include <stdio.h>
int main()
{
int salary;
int loanamount;
int creditscore;
int exprience;

printf("Please Enter Your Monthly Salary: ");
scanf("%d",&salary);

if (salary>=40000)
{
    printf("Please enter Loan Amount: ");
    scanf("%d",&loanamount);

if (loanamount<=200000)
    {
       printf("Your Loan Amount And Income Is Pass\n");  
    
if ((salary>=40000)&&(loanamount<=200000))
{
   printf("Please Enter Your Credit Score: ");
   scanf("%d",&creditscore);

   if (creditscore>700&&salary>=40000&&loanamount<=200000)
   {
    printf("Please Enter Your Work Exprience in Years:");
    scanf("%d",&exprience);

    if (exprience>=2)
    {
        printf("Congratulations! You are eligible for a loan from Indixpert!");
    } 
    else{
        printf("You are not eligible for the loan because your working experience is less than 2 years");
    }   
} else
{
printf("Sorry, your credit score is below 700");
}
}
}
 else
    {
        printf("You cannot take a loan of more than 2 lakh rupees from our bank, I'm sorry!");
    }
}
else {
    printf("I'm sorry, your monthly salary is not sufficient for the loan.");
}
 return 0;
}