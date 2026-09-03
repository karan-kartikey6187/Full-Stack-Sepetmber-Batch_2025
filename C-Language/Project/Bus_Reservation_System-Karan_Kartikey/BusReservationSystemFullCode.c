#include <stdio.h>
#include <string.h>

int choice;
int choice_user_menu;
int bus_choice[100];
int bus_status_choice;
int busnumber[5] = {101, 102, 103, 104, 105};
int buscapicity[5] = {50, 50, 50, 50, 50};
int Booked_Ticket[100][5] = {0};
int cancel_menu_choice;
int cancel_Ticket_Number;
int userbuschoice;
int seat_book[100];
char name[100][60];
char email[100][60];
char mobilenumber[100][20];
char regestation_password[100][60];
char confirmpassword[100][60];
int indexofArray = 0;
char tempemail[50];
char temppassword[50];
int temp_user_index;

void menu_signin_signup();
void Register();
void ask_password();
void mobile_number_Check();
void loginmenu();
void bus_Menu();
void book_a_Ticket();
void Cancel_a_Ticket();
void Check_Bus_Status();
void receipt();

void menu_signin_signup()
{
    do
    {
        printf("\n=============User Menu===========\n");
        printf("\n1. Login\n");
        printf("\n2. Register\n");
        printf("\n3. Exit\n");

        printf("\nPlease Enter Your Choice: ");

        if (scanf("%d", &choice) != 1)
        {
            printf("\nInvalid input! Please enter a number Between(1-3).\n");
            while (getchar() != '\n');
            continue;
        }
        else
        {
            switch (choice)
            {
            case 1:
                loginmenu();
                break;

            case 2:
                Register();
                break;
            case 3:
                printf("\nExit Successful!...\n\n");
                break;
            default:
                printf("\nPlease Enter Valid Option Between(1-3).\n");
            }
        }

    } while (choice != 3);
}

void ask_password()
{
    while (1)
    {
        printf("\nCreate Password: ");
        scanf(" %[^\n]", regestation_password[indexofArray]);

        printf("\nConfirm Password: ");
        scanf(" %[^\n]", confirmpassword[indexofArray]);

        if (strcmp(regestation_password[indexofArray], confirmpassword[indexofArray]) == 0)
        {
            printf("\n\nRegistration Successfully! Welcome %s\n\n", name[indexofArray]);
            indexofArray++;
            return;
        }
        else
        {
            printf("\nPassword Not Match\nPlease Try Again...\n");
        }
    }
}

void mobile_number_Check()
{
    while (1)
    {
        printf("\nEnter Mobile Number: ");
        scanf(" %s", mobilenumber[indexofArray]);

        int valid = 1;
        for (int i = 0; i < strlen(mobilenumber[indexofArray]); i++)
        {
            if (mobilenumber[indexofArray][i] < '0' || mobilenumber[indexofArray][i] > '9')
            {
                valid = 0;
                break;
            }
        }

        if (!valid || strlen(mobilenumber[indexofArray]) != 10)
        {
            printf("\n\nInvalid Mobile Number! Must be 10 digits only.\n");
        }
        else
        {
            ask_password();
            break;
        }
    }
}

void Register()
{
    while (1)
    {
        printf("\n++++++++++Signup++++++++++\n");
        printf("\nEnter Your Full Name: ");
        scanf(" %[^\n]", name[indexofArray]);

        int email_exists = 0;
        while (1)
        {
            printf("\nEnter Your Email Address: ");
            scanf(" %[^\n]", email[indexofArray]);
            
            email_exists = 0;
            for (int i = 0; i < indexofArray; i++)
            {
                if (strcmp(email[indexofArray], email[i]) == 0)
                {
                    printf("\nThis Email Is Already Registered! Try With Another Email.\n");
                    email_exists = 1;
                    break;
                }
            }

            if (!email_exists)
                break;
        }

        mobile_number_Check();
        break;
    }
}

void loginmenu()
{
    if (indexofArray == 0)
    {
        printf("\nNo registered users yet. Please register first!\n");
        return;
    }

    printf("\n====================Login Menu==================\n\n");
    printf("\nEnter Email: ");
    scanf(" %[^\n]", tempemail);

    printf("\nEnter Password: ");
    scanf(" %[^\n]", temppassword);

    int found = 0;

    for (int i = 0; i < indexofArray; i++)
    {
        if (strcmp(tempemail, email[i]) == 0 &&
            strcmp(temppassword, regestation_password[i]) == 0)
        {
            printf("\nLogin Successful! Welcome, %s\n", name[i]);
            temp_user_index = i;
            bus_Menu();
            found = 1;
            return;
        }
    }
    if (!found)
    {
        printf("\nIncorrect Email or Password! Try Again...\n\n");
    }
}

void bus_Menu()
{
    do
    {
        printf("\n\n====Bus Reservation System====\n");
        printf("\n1. Book a Ticket\n");
        printf("\n2. Cancel a Ticket\n");
        printf("\n3. Check Bus Status\n");
        printf("\n4. Logout\n");

        printf("\nEnter Your Choice: ");

        if (scanf("%d", &choice_user_menu) != 1)
        {
            printf("\nInvalid input! Please enter a number Between(1-4).\n");
            while (getchar() != '\n');
            continue;
        }
        else
        {
            switch (choice_user_menu)
            {
            case 1:
                book_a_Ticket();
                break;
            case 2:
                Cancel_a_Ticket();
                break;
            case 3:
                Check_Bus_Status();
                break;
            case 4:
                printf("\nLogged out successfully!\n");
                return;
            default:
                printf("\nInvalid Choice! Try again.\n");
                break;
            }
        }
    } while (choice_user_menu != 4);
}

void book_a_Ticket()
{
    while (bus_choice[temp_user_index] != 6)
    {
        printf("\n\n---------->>>>>>>...Bus Status....<<<<<<<<<<-----------\n\n");
        printf("\n1. Bus No.101 - Mumbai(Borivali) --->  Delhi(Janakpuri)\n");
        printf("\n2. Bus No.102 - Uttrakhand(Bageshwar) --->  Assam(Guwahati)\n");
        printf("\n3. Bus No.103 - Uttar Pradesh(Faizabad) --> Jharkhand(Ranchi)\n");
        printf("\n4. Bus No.104 - Haryana(Ambala) --> Odisha(Cuttack)\n");
        printf("\n5. Bus No.105 - Punjab(Jalandhar) --> Tamil Nadu(Chennai)\n");
        printf("\n6. Go Back\n");

        printf("\nPlease Enter Your Choice(1-6): ");

        if (scanf("%d", &bus_choice[temp_user_index]) != 1)
        {
            printf("\nInvalid input! Please enter a number Between(1-6).\n");
            while (getchar() != '\n');
            continue;
        }
        else
        {
            if (bus_choice[temp_user_index] == 6)
                return;

            userbuschoice = bus_choice[temp_user_index] - 1;

            if (userbuschoice < 0 || userbuschoice > 4)
            {
                printf("\nInvalid Choice! Choose From The Menu\n");
                continue;
            }

            if (buscapicity[userbuschoice] > 0)
            {
                printf("\n%d Seats Are Available on Bus Number %d\n\n", buscapicity[userbuschoice], busnumber[userbuschoice]);
                printf("\nEnter Number Of Seats You Want to Book: ");

                if (scanf("%d", &seat_book[temp_user_index]) != 1)
                {
                    printf("\nInvalid input! Please enter a valid seat number.\n");
                    while (getchar() != '\n');
                    continue;
                }

                if (seat_book[temp_user_index] <= 0)
                {
                    printf("\nInvalid number of seats.\n");
                    continue;
                }

                if (seat_book[temp_user_index] <= buscapicity[userbuschoice])
                {
                    printf("\nBooking Successful! %d seats booked on Bus Number %d\n", seat_book[temp_user_index], busnumber[userbuschoice]);
                    receipt();
                    buscapicity[userbuschoice] -= seat_book[temp_user_index];
                    Booked_Ticket[temp_user_index][userbuschoice] += seat_book[temp_user_index];
                    return;
                }
                else
                {
                    printf("\nYou Can't Book More Than %d Seats\n", buscapicity[userbuschoice]);
                }
            }
            else
            {
                printf("\nBus Is Full! No Seat Available\n");
            }
        }
    }
}

void Cancel_a_Ticket()
{
    do
    {
        printf("\n\n---------->>>>>>>...Cancel Bus Ticket....<<<<<<<<<<-----------\n\n");
        printf("\n1. Bus No.101 - Mumbai(Borivali) --->  Delhi(Janakpuri)\n");
        printf("\n2. Bus No.102 - Uttrakhand(Bageshwar) --->  Assam(Guwahati)\n");
        printf("\n3. Bus No.103 - Uttar Pradesh(Faizabad) --> Jharkhand(Ranchi)\n");
        printf("\n4. Bus No.104 - Haryana(Ambala) --> Odisha(Cuttack)\n");
        printf("\n5. Bus No.105 - Punjab(Jalandhar) --> Tamil Nadu(Chennai)\n");
        printf("\n6. Go Back\n");

        printf("\nEnter Bus Choice To Cancel Ticket (1-6): ");
        if (scanf("%d", &cancel_menu_choice) != 1)
        {
            printf("\nInvalid input! Please enter a number Between(1-6).\n");
            while (getchar() != '\n');
            continue;
        }
        else
        {
            if (cancel_menu_choice == 6)
                return;

            if (cancel_menu_choice < 1 || cancel_menu_choice > 5)
            {
                printf("\nInvalid Choice\n");
                continue;
            }

            int busIndex = cancel_menu_choice - 1;

            if (Booked_Ticket[temp_user_index][busIndex] > 0)
            {
                printf("\nYou Have Booked %d Seats on Bus %d", Booked_Ticket[temp_user_index][busIndex], busnumber[busIndex]);
                printf("\nHow Many Seats You Have To Cancel: ");

                if (scanf("%d", &cancel_Ticket_Number) != 1)
                {
                    printf("\nInvalid input! Please enter a valid seat number.\n");
                    while (getchar() != '\n');
                    continue;
                }

                if (cancel_Ticket_Number > 0 && cancel_Ticket_Number <= Booked_Ticket[temp_user_index][busIndex])
                {
                    Booked_Ticket[temp_user_index][busIndex] -= cancel_Ticket_Number;
                    buscapicity[busIndex] += cancel_Ticket_Number;
                    printf("\n%d Seats Are Cancelled Successfully! %d Rupees Credited To Your Account Within 24 Hours.\n", cancel_Ticket_Number, cancel_Ticket_Number * 1500);
                }
                else
                {
                    printf("\nInvalid Number Of Seats To Cancel!\n");
                }
            }
            else
            {
                printf("\nYou Don't Have Any Booked Tickets On This Bus!\n");
            }
        }
    } while (cancel_menu_choice != 6);
}

void Check_Bus_Status()
{
    do
    {
        printf("\n---------->>>>>>>...Check Bus Status....<<<<<<<<<<-----------\n\n");
        printf("\n1. Bus No.101 - Mumbai(Borivali) --->  Delhi(Janakpuri)\n");
        printf("\n2. Bus No.102 - Uttrakhand(Bageshwar) --->  Assam(Guwahati)\n");
        printf("\n3. Bus No.103 - Uttar Pradesh(Faizabad) --> Jharkhand(Ranchi)\n");
        printf("\n4. Bus No.104 - Haryana(Ambala) --> Odisha(Cuttack)\n");
        printf("\n5. Bus No.105 - Punjab(Jalandhar) --> Tamil Nadu(Chennai)\n");
        printf("\n6. Check Status Of All Buses\n");
        printf("\n7. Go Back\n\n");

        printf("Please Enter Your Choice: ");
        if (scanf("%d", &bus_status_choice) != 1)
        {
            printf("\nInvalid input! Please enter a number Between(1-7).\n");
            while (getchar() != '\n');
            continue;
        }
        else
        {
            switch (bus_status_choice)
            {
            case 1:
                printf("\nBus No.%d\nTotal Seat- 50\nAvailable Seats- %d\nFrom- Mumbai(Borivali)\nTo- Delhi(Janakpuri)\n", busnumber[0], buscapicity[0]);
                break;
            case 2:
                printf("\nBus No.%d\nTotal Seat- 50\nAvailable Seats- %d\nFrom- Uttrakhand(Bageshwar)\nTo- Assam(Guwahati)\n", busnumber[1], buscapicity[1]);
                break;
            case 3:
                printf("\nBus No.%d\nTotal Seat- 50\nAvailable Seats- %d\nFrom- Uttar Pradesh(Faizabad)\nTo- Jharkhand(Ranchi)\n", busnumber[2], buscapicity[2]);
                break;
            case 4:
                printf("\nBus No.%d\nTotal Seat- 50\nAvailable Seats- %d\nFrom- Haryana(Ambala)\nTo- Odisha(Cuttack)\n", busnumber[3], buscapicity[3]);
                break;
            case 5:
                printf("\nBus No.%d\nTotal Seat- 50\nAvailable Seats- %d\nFrom- Punjab(Jalandhar)\nTo- Tamil Nadu(Chennai)\n", busnumber[4], buscapicity[4]);
                break;
            case 6:
                for (int i = 0; i < 5; i++)
                {
                    printf("\nBus No.%d\nTotal Seat- 50\nAvailable Seats- %d\n", busnumber[i], buscapicity[i]);
                }
                break;
            case 7:
                return;
                break;
            default:
                printf("\nInvalid Choice! Try Again.\n");
            }
        }
    } while (bus_status_choice != 7);
}

void receipt()
{
    printf("\n>>>>>>>>>>>>>>>>Receipt<<<<<<<<<<<<<<<<\n");
    printf("\nName- %s", name[temp_user_index]);
    printf("\nEmail- %s", email[temp_user_index]);
    printf("\nPhone Number- %s", mobilenumber[temp_user_index]);
    printf("\nBus No.%d\nTotal Seat Booked- %d\nBus One Seat Fare- 1500\nTotal Fare You Have To Pay- %d\n", busnumber[userbuschoice], seat_book[temp_user_index], seat_book[temp_user_index] * 1500);
    printf("\n\nThank You For Using This Bus......\n");
}

int main()
{
    menu_signin_signup();
    return 0;
}
