#include <stdio.h>
int Number_Entry(int number[], int size)
{
    for (int i = 0; i < size; i++)
    {
        printf("please enter number %d: ", i + 1);
        scanf("%d", &number[i]);
    }
}
int Menu()
{
    int choice;
    printf("\n\n***************************MENU****************************\n");
    printf("1.Delete Last Entry\n");
    printf("2.View Records\n");
    printf("3.Exit\n");
    printf("4.Insert\n\n");
    printf("Please Enter Your Choice: ");
    scanf("%d", &choice);
    return choice;
}

int delete(int number[], int size)
{
    if (size > 0)
    {
        printf("\nNumber %d deleted successfully.", number[size - 1]);
        size--;
    }
    return size;
}

int View_Records(int number[], int size)
{
    if (size > 0)
    {
        printf("\nRECORDS : ");
        for (int i = 0; i < size; i++)
        {
            printf("\n%d", number[i]);
        }
    }
    else
    {
        printf("\nRecord is Empty");
    }
}

int insert(int number[], int size)
{
    if (size < 5)
    {
        printf("Insert the value: ");
        scanf("%d", &number[size]);
        size++;
        printf("\nValue inserted successfully.");
    }
    else
    {
        printf("You are already inserted 5 numbers");
    }
    return size;
}

int Operations(int number[], int size)
{
    int choice;
    do
    {
        choice = Menu();
        if (choice == 1)
        {
            size = delete(number, size);
        }
        else if (choice == 2)
        {
            View_Records(number, size);
        }
        else if (choice == 4)
        {
            size = insert(number, size);
        }
        else if (choice != 3)
        {
            printf("Invalid Input");
        }
    } while (choice != 3);
    return size;
}
int main()
{
    int number[5];
    int choice;
    int size = 5;
    Number_Entry(number, size);
    Operations(number, size);

    return 0;
}