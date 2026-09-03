import uuid
import os
import json

json_file = r"Student Registation\student.json"

if not os.path.exists(json_file):
    with open(json_file, "w") as f:
        f.write("[]")

with open(json_file, "r") as f:
    students_data = json.loads(f.read())   

def main_menu():
    while True:
        print("\n>>>>>>>>>>>>> Menu <<<<<<<<<<<<<")
        print("1. Register")
        print("2. Exit")
        choice = input("Please Enter Your Choice: ")

        if choice.isdigit():
            return int(choice)
        else:
            print("Please enter number only.")

def register():
    print("\n>>>>>>>>>> Registration Details <<<<<<<<<<")

    student = {}
    student["id"] = uuid.uuid4().hex[:6]
    student["name"] = input("Please Enter Your Name: ")
    student["address"] = input("Please Enter Your Address: ")

    while True:
        contact = input("Please Enter Your Contact: ")
        if contact.isdigit() and len(contact) == 10:
            student["contact"] = contact
            break
        else:
            print("Invalid contact! Enter 10 digit number.")

    students_data.append(student) 

    print("Registration Successful")

def save_data():
    with open(json_file, "w") as f:
        f.write(json.dumps(students_data, indent=4))  

def main():
    while True:
        choice = main_menu()

        if choice == 1:
            register()
            save_data()   
        elif choice == 2:
            print("Exiting program")
            break
        else:
            print("Invalid choice")

main()
