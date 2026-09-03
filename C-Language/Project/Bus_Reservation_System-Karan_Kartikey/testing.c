#include<stdio.h>
int main(){

    char name[20];
    int count=0;
    printf("Enter Name: ");
    scanf("%[^\n]",&name);

    for (int i = 0; name[i] != '\0'; i++)
{    
        count++;
}
printf("\nYour Name Have %d Charaters\n",count);

    return 0;
}