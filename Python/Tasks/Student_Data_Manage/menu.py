def main_menu():
    while True:
        print("\n>>>>>>>>>>>>> Menu <<<<<<<<<<<<<")
        print("1. Register")
        print("2. Search")
        print("3. Update")
        print("4. Delete")
        print("5. Exit")
        choice = input("Please Enter Your Choice: ")

        if choice.isdigit():
            return int(choice)
        else:
            print("Please enter number only.")