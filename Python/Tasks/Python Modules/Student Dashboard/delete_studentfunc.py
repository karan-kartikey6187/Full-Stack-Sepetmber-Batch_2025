
def delete_student(all_student):
    if len(all_student) > 0:
            while True:    
                print(">>>>>>>>>>>>>>}~Delete-Menu~{<<<<<<<<<<<<<<<<")
                print("1.Delete By ID")
                print("2.Delete By Name")
                print("3.Back")
                delete_choice=input("Please Enter Your Choice: ")

                if delete_choice == '1':
                    user_id=(input("Enter ID: "))
                    found = False

                    for i in range(len(all_student)):
                        if all_student[i]["id"] == user_id:
                            print(f"\nID {all_student[i]["id"]} Data Deleted Successfully")
                            all_student.pop(i)
                            found = True
                            break

                    if not found:
                        print("No Record Found!")

                elif delete_choice == '2':
                    user_name = input("Please Enter Name: ")
                    found = False

                    for i in range(len(all_student)):
                        if all_student[i]["name"].lower() == user_name.lower():
                            print(f"\nName {all_student[i]["name"]} Data Deleted Successfully")
                            all_student.pop(i)
                            found = True
                            break

                    if not found:
                        print("No Record Found!")

                elif delete_choice=='3':
                     break        

                else:
                    print("Invalid Input! Please Enter The Number Between (1-2)")

    else:
        print("\nSorry! No Data Available For Delete")
        
    return all_student
