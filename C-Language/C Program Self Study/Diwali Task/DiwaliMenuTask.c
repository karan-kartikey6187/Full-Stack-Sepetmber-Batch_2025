#include <stdio.h>
int number[5];
int deletedcount = 0;
int insertcount = 0;
int deleted[100];
int inseted[100];
int index_number = 5;
int choice = 0;
int reportchoice = 0;

int ask_five_number()
{
    for (int i = 0; i < index_number; i++)
    {
        printf("Enter Five Number %d: ", i + 1);
        scanf("%d", &number[i]);
        inseted[insertcount] = number[i];
        insertcount++;
    }
}
int menu()
{
    printf("\n**************Menu****************\n");
    printf("\n1-Delete Item\n");
    printf("2-View Item\n");
    printf("3-Insert\n");
    printf("4-Exit\n");
    printf("5-Report\n");

    printf("\nSelect Any Option: ");
    scanf("%d", &choice);
}
int delete_item()
{
    if (index_number > 0)
    {

        printf("\nNumber %d Is Deleted Successfully....\n", number[index_number - 1]);
        deleted[deletedcount] = number[index_number - 1];
        deletedcount++;
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
        inseted[insertcount] = number[index_number];
        insertcount++;
        index_number++;
    }
    else
    {

        printf("\nFive Item Already Inserted....\nCan,t Insert More Item\n");
    }
}

int report()
{

    while (1)
    {

        printf("\n\n1-Total Inserted Item\n");
        printf("\n2-Total Deleted Item\n");
        printf("\n3-Back\n");

        printf("\nSelect Any Option: ");
        scanf("%d", &reportchoice);

        if (reportchoice == 1)
        {
            printf("\n\n*************Total Inserted Item*******************\n");
            for (int i = 0; i < insertcount; i++)
            {
                printf("\nNo.%d= %d", i + 1, inseted[i]);
            }
            report();
        }
        else if (reportchoice == 2)
        {
            if (deletedcount > 0)
            {
                printf("\n\n*************Total Deleted Item*******************\n");

                for (int i = 0; i < deletedcount; i++)
                {
                    printf("\nNo.%d= %d", i + 1, deleted[i]);
                }
            }
            else
            {
                printf("\nNo Data Available\n");
            }
        }
        else if (reportchoice == 3)
        {
            printf("\nReturning to Main Menu.....\n");
        }
        else
        {

            printf("\nInvalid Option try Again!\n");
        }
        if (reportchoice == 3)
        {

            break;
        }
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

        case 5:
            report();
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