#include <stdio.h>
int main()
{

    float percentage;
    printf("Enter Your Percentage:");
    scanf("%f", &percentage);
    if (percentage >= 60)
    {
        printf("You are Pass In Exam");
    }
    else
        printf("You are Fail in Exam");

    return 0;
}