import json
from Student_Data_Manage.input import input_contact

def search_opration(students_data):
    if len(students_data)>0:
        while True: 
            print(">>>>>>>>>>Search<<<<<<<<<<<")
            print("1.Search By ID")    
            print("2.Search By Contact")
            print("3.View All Records")
            print("4.Back")

            choice = input("Please Enter Your Choice: ")

            if choice.isdigit(): 
                choice = int(choice)
            else:
                print("Enter Only Number, Not Character.")  

            if choice==1:    
                search_id=input("Please Enter ID: ")                   
                found=False
                for data in students_data:
                    if data["id"].lower()==search_id.lower():
                        print(json.dumps(data,indent=4))
                        found=True
                if not found:
                    print("ID not Found")       

            elif choice==2:    
                search_contact=input_contact()                     
                found=False
                for data in students_data:
                    if data["contact"]==search_contact:
                        print(json.dumps(data,indent=4))
                        found=True
                if not found:
                    print("Contact not Found")
            elif choice==3:
                print(json.dumps(students_data,indent=4))        

            elif choice==4:
                break  

            else:
                print("Enter The Number Between(1-4).")
                     
    else: 
        print("\nSorry! No Data Avliable For Search") 
                