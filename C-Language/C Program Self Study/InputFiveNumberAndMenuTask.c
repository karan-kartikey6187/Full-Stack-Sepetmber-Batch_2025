#include <stdio.h>
int number[5];
int index_number = 4;
int choice;

int ask_five_number()
{
    for (int i = 0; i < 5; i++)
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
    printf("3-Exit\n\n");

    printf("\nSelect Any Option: ");
    scanf("%d", &choice);
}
int delete_item()
{
    printf("\nNumber %d Is Deleted Successfully....\n", number[index_number]);
    index_number--;
    if (index_number < 0)
    {
        printf("\nAll Number Are Deleted\nNo Number Left.......\n");
    }
}
int view_record()
{

    for (int i = 0; i <= index_number; i++)
    {
        printf("Number %d- %d\n", i + 1, number[i]);
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
            printf("Exit Thank you...\n");
            break;

        default:
            printf("\nYou Have Selected Invalid Option\n");
            break;
        }

        if (choice == 3)
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