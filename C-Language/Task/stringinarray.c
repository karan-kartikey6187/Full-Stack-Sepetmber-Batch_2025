#include <stdio.h>
int main (){

char name[20];

printf("Enter Your Full Name: ");\
scanf("%[^\n]",&name);

printf("Your Name Is: %s",name);

    return 0;
}