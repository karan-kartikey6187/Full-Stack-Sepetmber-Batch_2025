#include<stdio.h>
int main()
{
char vowel;

printf("Enter any Vowel:");
scanf("%c",&vowel);

switch (vowel)
{
case 'a':
    printf("Almora");
    break;
case 'e':
    printf("Eyes");
    break;
case 'i':
    printf("ice cream");
    break;
case 'o':
    printf("olympic");
    break;
case 'u':
    printf("Uttrakhand");
    break;

default:
printf("it is not a vowel");
    break;
}

    return 0;
}