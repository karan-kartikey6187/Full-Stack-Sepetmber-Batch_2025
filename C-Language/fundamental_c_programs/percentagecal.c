#include <stdio.h>
int main()
{
    int hindi;
    int english;
    int math;
    int science;
    int total;
    float percentage;
    printf("Enter Marks of Hindi:");
    scanf("%d", &hindi);

    printf("Enter Marks of English:");
    scanf("%d", &english);

    printf("Enter Marks of Math:");
    scanf("%d", &math);

    printf("Enter Marks of Science:");
    scanf("%d", &science);

    total = hindi + english + math + science;
    printf("Total:%d\n", total);
    percentage = total / 4;
    printf("Percentage:%.2f", percentage);

    return 0;
}