#include <stdio.h>
int main()
{
    int student[3][5];
    int count = 1;
    int studenttotal[3] = {0, 0, 0};
    int max;
    char studentname[3][50];
    for (int i = 0; i < 3; i++)
    {
        printf("\n***************************************************************************\n");
        printf("Enter Student %d Name: ", count);
        scanf(" %[^\n]", &studentname[i]);

        printf("Enter Marks of %s in Hindi: ", studentname[i]);
        scanf("%d", &student[i][0]);

        printf("Enter Marks of %s in English: ", studentname[i]);
        scanf("%d", &student[i][1]);

        printf("Enter Marks of %s in Maths: ", studentname[i]);
        scanf("%d", &student[i][2]);

        printf("Enter Marks of %s in Science: ", studentname[i]);
        scanf("%d", &student[i][3]);

        printf("Enter Marks of %s in Computer: ", studentname[i]);
        scanf("%d", &student[i][4]);

        count++;
    }
    for (int i = 0; i < 3; i++)
    {
        for (int v = 0; v < 5; v++)
        {
            studenttotal[i] += student[i][v];
        }
    }
    for (int i = 0; i < 3; i++)
    {
        printf("Name: %s\n", studentname[i]);
        printf("Total Marks: %d\n", studenttotal[i]);
        printf("*************************************************************************************\n");
    }
    max = studenttotal[0];

    for (int i = 1; i < 3; i++)
    {
        if (studenttotal[i] > max)
        {
            max = studenttotal[i];
        }
    }
    for (int i = 0; i < 3; i++)
        if (max == studenttotal[i])
        {
            printf("Topper Name : %s\n Marks: %d\n", studentname[i], max);
        }
    return 0;
}