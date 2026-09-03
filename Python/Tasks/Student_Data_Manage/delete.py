from Student_Data_Manage.input import input_contact_delete
from Student_Data_Manage.read_write_file import write_json

def delete_opration(json_file, students_data):
    if len(students_data)>0:    
        while True:
            print(">>>>>>>>>>>>>>Delete Menu<<<<<<<<<<<<<<")
            print("1. Delete By ID.")
            print("2. Delete By Contact.")
            print("3. Back.")

            choice = input("Please Enter Your Choice: ")

            if choice.isdigit(): 
                choice = int(choice)
            else:
                print("Enter Only Number, Not Character.")
                continue

            found = False    

            if choice == 1:
                i=0    
                delete_id = input("Please Enter ID: ")                    
                while i < len(students_data):
                    if students_data[i]["id"].lower() == delete_id.lower():
                        students_data.pop(i)
                        found = True
                    else:
                        i += 1
                write_json(json_file, students_data) 

                        

            elif choice == 2:
                i=0
                delete_contact = input_contact_delete()
                while i < len(students_data):
                    if students_data[i]["contact"] == delete_contact:
                        students_data.pop(i)
                        found = True
                    else:
                        i += 1
                write_json(json_file, students_data)    

            elif choice == 3:
                return

            if not found:
                print("User Not Found!.")
            if found:
                print("Deleted Successfully.")   
    else: 
        print("\nSorry! No Data Avliable For Delete") 