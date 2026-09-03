all_student_Data=[]

def user_menu():
     print("\n>>>>>>>>>>>>>>>>>|Student-Menu|<<<<<<<<<<<<<<<<")
     print("1.Register a Student")
     print("2.Search a Student")
     print("3.View All Student")
     print("4.Delete a Student")
     print("5.Exit")
     print("-----------------------------------------------\n")

     choice=int(input("Please Enter Your Choice: "))
     return choice

def register_student():
    number_of_qulification=1
    studentdict={}
    studentdict["Id"]=int(input("Please Enter Your ID: "))
    studentdict["Name"]=input("Please Enter Your Name: ")
    studentdict["Address"]=input("Please Enter Your Address: ")
    studentdict["Contact"]=int(input("Please Enter Your Contact: "))
    studentdict["Qualification"]=[]
    qulification={f"Qualification":input(f"Please Enter Your Qualification {number_of_qulification}: "),
                                  "Qualification Year":int(input("Please Enter Qualification Year: "))}
    studentdict["Qualification"].append(qulification)
    while True:
           print("1.Add More Qualification")
           print("2.Continue")
           choice=int(input("Please Enter Your Choice: "))
           if choice==1:       
              number_of_qulification+=1
              qulification={f"Qualification":input(f"Please Enter Your Qualification {number_of_qulification}: "),
                                   "Qualification Year":int(input("Please Enter Qualification Year: "))}
              studentdict["Qualification"].append(qulification)
           elif choice==2:
              number_of_qulification=1
              break
           else: print("Invalid Input!") 

    all_student_Data.append(studentdict)      

def search_a_Student():
      if len(all_student_Data)>0:
            
            print(">>>>>>>>>>>>>>}~Search-Menu~{<<<<<<<<<<<<<<<<")
            print("1.Search Student By Contact")
            print("2.Search Student By Qualification")

            searchchoice=int(input("Please Enter Your Choice: "))
            
            if searchchoice==1:
                contact=int(input("Please Enter Your Contact: "))
                found=False

                for data in all_student_Data:
                    if data["Contact"]==contact:
                        print(data)
                        found=True

                if not found:
                    print("No Record Found!")             

            elif searchchoice==2:
                print("1.Search By Year")
                print("2.Search By Qualification")
                searchbyqulification=int(input("Please Enter Your Choice: "))

                if searchbyqulification == 1:
                    year = int(input("Enter Qualification Year: "))
                    found=False

                    for data in all_student_Data:
                        for qualification_year in data["Qualification"]:
                            if qualification_year["Qualification Year"] == year:
                                print(data)
                                found=True

                    if not found:
                        print("No Record Found!")     

                elif searchbyqulification == 2:
                    qname = input("Enter Qualification Name: ")
                    found=False

                    for data in all_student_Data:
                        for qualification_name in data["Qualification"]:
                            if qualification_name["Qualification"].lower() == qname.lower():
                                print(data)
                                found=True

                    if not found:
                        print("No Record Found!")     

                else:
                    print("Invalid Option!")            

            else:
                print("Invalid Input! Please Enter Number Between(1-3)")   
      else: 
          print("\nSorry! No Data Avliable For Search")       

def view_all_student():
    if len(all_student_Data)>0:
         print(">>>>>>>>>>>>>All-Student-Data<<<<<<<<<<<<<<")
         for i in range(len(all_student_Data)):
             print(all_student_Data[i])
    else:
        print("\nSorry! No Data Avliable")         

def delete_student():
    if len(all_student_Data) > 0:
        print(">>>>>>>>>>>>>>}~Delete-Menu~{<<<<<<<<<<<<<<<<")
        print("1.Delete By ID")
        print("2.Delete By Name")
        print("3.Delete All Data")
        delete_choice = int(input("Please Enter Your Choice: "))

        if delete_choice == 1:
            user_id = int(input("Enter ID: "))
            found = False

            for i in range(len(all_student_Data)):
                if all_student_Data[i]["Id"] == user_id:
                    all_student_Data.pop(i)
                    found = True
                    print("Data Deleted!")
                    break

            if not found:
                print("No Record Found!")

        elif delete_choice == 2:
            user_name = input("Please Enter Name: ")
            found = False

            for i in range(len(all_student_Data)):
                if all_student_Data[i]["Name"].lower() == user_name.lower():
                    print(all_student_Data[i])
                    all_student_Data.pop(i)
                    print("\nThis Data Deleted Successfully")
                    found = True
                    break

            if not found:
                print("No Record Found!")

        elif delete_choice == 3:
            all_student_Data.clear()
            print("\nAll Data Deleted Successfully")

        else:
            print("Invalid Input! Please Enter The Number Between (1-3)")

    else:
        print("\nSorry! No Data Available For Delete")


while True:
    output=user_menu()

    if output==1:
        register_student()
    elif output==2:
        search_a_Student()
    elif output==3:
        view_all_student()
    elif output==4:
        delete_student()
    elif output==5:
        break
    else:
        print("Invalid Choice! Enter The Number Between(1-5)")     