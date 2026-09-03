#include <stdio.h>
int main (){
// In this program i take two number input from user and do substraction and division
int firstnumber;
int secondnumber;

printf("Enter First Number:"); 
scanf("%d",&firstnumber);

printf("Enter Second Number:");
scanf("%d",&secondnumber);

int finalsub;
int finaldiv;
finalsub=firstnumber-secondnumber;
printf(">>>>>>>>>>>>>>>>>>>>>>>>This Is Subtraction Of Two Number<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n");
printf("\t\t\t%d\t-\t%d\t=\t%d\n",firstnumber,secondnumber,finalsub);

finaldiv=firstnumber/secondnumber;
printf(">>>>>>>>>>>>>>>>>>>>>>>>This Is Division Of Two Number<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n");
printf("\t\t\t%d\t/\t%d\t=\t%d\n",firstnumber,secondnumber,finaldiv);

return 0;
}