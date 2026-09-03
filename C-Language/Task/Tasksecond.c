#include <stdio.h>
int main()
{
    int first;
    int second;
    int tablefirst;
    int tablesecond;

    printf("First table: ");
    scanf("%d", &first);
    printf("Second table: ");
    scanf("%d", &second);

    for (int i = 1; i <= 10; i++)
    {
        tablefirst = first * i;

        for (int k = 1; k <= 10; k++)
        {
            tablesecond = second * k;
            
            if (tablefirst == tablesecond)
            {
                printf("%d * %d = %d\n", first, i, tablefirst);
                printf("%d * %d = %d\n", second, k, tablesecond);
            }
        }
    }
    return 0;
}