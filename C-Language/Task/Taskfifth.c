#include <stdio.h>
int main()
{
    int hours;
    int second;
    double totalsec;

    printf("Enter Time in Hours: ");
    scanf("%d", &hours);

    for (int i = 1; i <= hours; i++)
    {
        second = 3600;
        totalsec = second * i;
    }
    printf("%d hours is = %.2lf second", hours, totalsec);

    return 0;
}