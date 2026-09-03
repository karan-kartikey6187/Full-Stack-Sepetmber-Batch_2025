#include <stdio.h>

int first, second, option;

int add()
{

    printf("Add: %d", first + second);
}

int sub()
{

    printf("Sub: %d", first - second);
}

int multiply()
{

    printf("Multiply: %d", first * second);
}

int division()
{
    float x = first;
    float y = second;
    float Division;
    Division = x / y;

    printf("Division: %f", Division);
}

int Option()
{

    printf("Enter First Number: ");
    scanf("%d", &first);

    printf("Enter Second Number: ");
    scanf("%d", &second);
}

int menu()
{
    printf("\n==============================Menu==============================\n");
    printf("\n1-Addition");
    printf("\n2-Subtraction");
    printf("\n3-Multiplication");
    printf("\n4-Division");

    printf("\nSelect Any Option: ");
    scanf("%d", &option);
}

int output()
{

    if (option == 1)
    {
        add();
    }

    else if (option == 2)
    {
        sub();
    }

    else if (option == 3)
    {
        multiply();
    }
    else if (option == 4)
    {
        division();
    }
}

int main()
{
    Option();

    menu();

    output();

    return 0;
}