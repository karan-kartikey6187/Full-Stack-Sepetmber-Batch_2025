#include <stdio.h>
#include <string.h>
int countvowels(char name[50])
{
    int count = 0;

    for (int i = 0; i < strlen(name); i++)
    {
        if (name[i] == 'a' || name[i] == 'A' || name[i] == 'e' || name[i] == 'E' || name[i] == 'i' || name[i] == 'I' ||
            name[i] == 'o' || name[i] == 'O' || name[i] == 'u' || name[i] == 'U')
        {
            count++;
        }
    }
    return count;
}

int main()
{

    int num = 0;
    char name[50];
    printf("Enter Your Name: ");
    scanf(" %[^\n]", name);

    num = countvowels(name);

    printf("%s Have %d Vowles", name, num);

    return 0;
}