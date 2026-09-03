
import uuid

def register_opration(student_data):
    print("\n>>>>>>>>>> Registration Details <<<<<<<<<<")

    student = {}
    student["id"] = uuid.uuid4().hex[:6]
    student["name"] = input("Please Enter Your Name: ")
    student["address"] = input("Please Enter Your Address: ")

    while True:
        try:
            contact = int(input("Please Enter Your Contact: "))

            if len(str(contact)) != 10:
                print("Invalid contact! Enter 10 digit number.")
                continue

            duplicate = False
            for data in student_data:
                if data["contact"] == contact:
                    print("This Number Already Registered. Enter Another Number.")
                    duplicate = True
                    break

            if duplicate:
                continue  

            student["contact"] = contact
            break 

        except ValueError:
            print("Enter Only Number Not Character.")

    student_data.append(student)
    print("Registration Successful.")
