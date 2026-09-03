#include <stdio.h>
int main()
{
    for (int i = 1; i <= 35; i++)
    {
        if (i == 30)
        {
            break;
        }
        printf("%d\n", i);
    }
    printf("End");

    return 0;
}