#include <stdio.h>
int main()
{

    char vowel;

    printf("Enter any Vowel:");
    scanf("%c", &vowel);

    switch (vowel)
    {
    case 'A':
        printf("Application Programming Interface");
        break;
    case 'E':
        printf("Extension");
        break;
    case 'I':
        printf("IP Address");
        break;
    case 'O':
        printf("Operating System");
        break;
    case 'U':
        printf("UI (User Interface)");
        break;

    default:
        printf("it is not a vowel");
        break;
    }

    return 0;
}