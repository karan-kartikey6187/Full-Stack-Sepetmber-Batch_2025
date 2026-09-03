#include <stdio.h>

int number[5];
int index_number = 5;

int ask_five_number(int number[5])
{
    for (int i = 0; i < 5; i++)
    {
        printf("Enter Five Number %d: ", i + 1);
        scanf("%d", &number[i]);
    }
}
int menu()
{
    int choice;
    printf("\n**************Menu****************\n");
    printf("\n1-Delete Item\n");
    printf("2-View Item\n");
    printf("3-Insert\n");
    printf("4-Exit\n\n");

    printf("\nSelect Any Option: ");
    scanf("%d", &choice);
    return choice;
}
int delete_item()
{
    if (index_number > 0)
    {
        printf("\nNumber %d Is Deleted Successfully....\n", number[index_number - 1]);
        index_number--;

        if (index_number == 0)
        {
            printf("\nAll Number Are Deleted\nNo Number Left.......\n");
        }
    }
    else
    {
        printf("\nNo Number Left To Delete.......\n");
    }
}
int view_record()
{
    for (int i = 0; i < index_number; i++)
    {
        printf("Number %d- %d\n", i + 1, number[i]);
    }
}
int insert()
{
    if(index_number < 5)
    {
        printf("Enter Number to Insert: ");
        scanf("%d", &number[index_number]);
        index_number++;
    }
    else
    {
        printf("\nAlredy 5 Number Exist\nYou Can,t Insert More Than Five Numbers\n");
    }
}


int main()
{
    int choice;
    ask_five_number(number);

    while (1)
    {
        choice=menu();
        switch (choice)
        {
        case 1:
            delete_item();
            break;

        case 2:
            view_record();
            break;

        case 3: insert();
            break;
        case 4:
            printf("Exit Thank you...\n");
            break;

        default:
            printf("\nYou Have Selected Invalid Option\n");
            break;
        }
        if (choice == 4)
        {
            break;
        }
        if (index_number < 0)
        {
            break;
        } 
    }
    return 0;
}

