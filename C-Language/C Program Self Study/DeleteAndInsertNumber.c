#include <stdio.h>
int number[5];
int index_number = 5;
int choice;

int ask_five_number()
{
    for (int i = 0; i < index_number; i++)
    {
        printf("Enter Five Number %d: ", i + 1);
        scanf("%d", &number[i]);
    }
}
int menu()
{
    printf("\n**************Menu****************\n");
    printf("\n1-Delete Item\n");
    printf("2-View Item\n");
    printf("3-Insert\n");
    printf("4-Exit\n\n");

    printf("\nSelect Any Option: ");
    scanf("%d", &choice);
}
int delete_item()
{
    if (index_number > 0)
    {

        printf("\nNumber %d Is Deleted Successfully....\n", number[index_number - 1]);
        index_number--;
    }

    else
    {
        printf("\nAll Number Are Deleted\nNo Number Left.......\n");
    }
}
int view_record()
{
    if (index_number > 0)
    {
        printf("\n");
        for (int i = 0; i < index_number; i++)
        {
            printf("\nNo.%d= %d\n", i + 1, number[i]);
        }
    }
    else
    {
        printf("\n\nSorry No Record Available\nRecord Is Empty....\n\n");
    }
}
int insert()
{

    if (index_number < 5)
    {
        printf("\n\nEnter Number to Insert: ");
        scanf("%d", &number[index_number]);
        index_number++;
    }
    else
    {

        printf("\nFive Item Already Inserted....\nCan,t Insert More Item\n");
    }
}

int main()
{

    ask_five_number();

    while (1)
    {
        menu();
        switch (choice)
        {
        case 1:
            delete_item();
            break;

        case 2:
            view_record();
            break;

        case 3:
            insert();
            break;

        case 4:
            printf("\n\nExit Successfull.....\nThank you\n\n");
            break;

        default:
            printf("\n\nYou Have Selected Invalid Option\n\n");
            break;
        }

        if (choice == 4)
        {
            break;
        }
    }
    return 0;
}