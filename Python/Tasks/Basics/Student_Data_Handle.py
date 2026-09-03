all_student_Data=[]

def user_menu():
     print("\n>>>>>>>>>>>>>>>>>|Student-Menu|<<<<<<<<<<<<<<<<")
     print("1.Register a Student")
     print("2.Search a Student")
     print("3.View All Student")
     print("4.Delete a Student")
     print("5.Exit")
     print("-----------------------------------------------\n")

     choice=input("Please Enter Your Choice: ")
     return choice

def register_student():
    studentdict={}
    number_of_qulification=1
    print("\n>>>>>>>>>>>>>>>>}~Registration-Details~{<<<<<<<<<<<<<<<")
    studentdict["id"]=input("Please Enter Your ID: ")
    studentdict["name"]=input("Please Enter Your Name: ")
    studentdict["address"]=input("Please Enter Your Address: ")
    while True:
        studentdict["contact"]=int(input("Please Enter Your Contact: "))
        if len(str(studentdict["contact"]))==10:
           break
        else:
           print("Invalid Contact Number! Please Enter 10 Digits Number")                
    studentdict["qualification"]=[]
    qulification={f"qualification":input(f"Please Enter Your Qualification {number_of_qulification} (10th/12th/B.Tech/BCA): "),
                                "year":input("Please Enter Qualification Year: ")}
    studentdict["qualification"].append(qulification)
    while True:
        print("1.Add More Qualification")
        print("2.Continue")
        choice=input("Please Enter Your Choice: ")
        if choice=="1":       
            number_of_qulification+=1
            qulification={f"qualification":input(f"Please Enter Your Qualification {number_of_qulification} (10th/12th/B.Tech/BCA): "),
                                "year":input("Please Enter Qualification Year: ")}
            studentdict["qualification"].append(qulification)
        elif choice=="2":
            number_of_qulification=1
            print("\nRegistation Successfully Thank You....")
            break
        else: print("Invalid Input!") 

    all_student_Data.append(studentdict)        

def search_a_Student():
      if len(all_student_Data)>0:
            
            while True:        
                print(">>>>>>>>>>>>>>}~Search-Menu~{<<<<<<<<<<<<<<<<")
                print("1.Search Student By Contact")
                print("2.Search Student By Qualification")
                print("3.Back")

                searchchoice=input("Please Enter Your Choice: ")
                
                if searchchoice=="1":
                    contact=int(input("Please Enter Your Contact: "))
                    found=False

                    for data in all_student_Data:
                        if data["contact"]==contact:
                            print(data)
                            found=True

                    if not found:
                        print("No Record Found!")             

                elif searchchoice=="2":
                    print("1.Search By Year")
                    print("2.Search By Qualification")
                    searchbyqulification=input("Please Enter Your Choice: ")

                    if searchbyqulification == "1":
                        year =input("Enter Qualification Year: ")
                        found=False

                        for data in all_student_Data:
                            for qualification_year in data["qualification"]:
                                if qualification_year["year"] == year:
                                    print(data)
                                    found=True

                        if not found:
                            print("No Record Found!")     

                    elif searchbyqulification == "2":
                        qname = input("Enter Qualification Name (10th/12th/B.Tech/BCA): ")
                        found=False

                        for data in all_student_Data:
                            for qualification_name in data["qualification"]:
                                if qualification_name["qualification"].lower() == qname.lower():
                                    print(data)
                                    found=True

                        if not found:
                            print("No Record Found!")     

                    else:
                        print("Invalid Option!")  

                elif searchchoice=="3":
                    break                  

                else:
                    print("Invalid Input! Please Enter Number Between(1-3)")   
      else: 
            print("\nSorry! No Data Avliable For Search")       

def view_all_student():
    if len(all_student_Data)>0:
         print(">>>>>>>>>>>>>All-Student-Data<<<<<<<<<<<<<<")
         print(all_student_Data)
    else:
        print("\nSorry! No Data Avliable")         

def delete_student():
    if len(all_student_Data) > 0:
            while True:    
                print(">>>>>>>>>>>>>>}~Delete-Menu~{<<<<<<<<<<<<<<<<")
                print("1.Delete By ID")
                print("2.Delete By Name")
                print("3.Back")
                delete_choice=input("Please Enter Your Choice: ")

                if delete_choice == '1':
                    user_id=(input("Enter ID: "))
                    found = False

                    for i in range(len(all_student_Data)):
                        if all_student_Data[i]["id"] == user_id:
                            print(f"\nID {all_student_Data[i]["id"]} Data Deleted Successfully")
                            all_student_Data.pop(i)
                            found = True
                            break

                    if not found:
                        print("No Record Found!")

                elif delete_choice == '2':
                    user_name = input("Please Enter Name: ")
                    found = False

                    for i in range(len(all_student_Data)):
                        if all_student_Data[i]["name"].lower() == user_name.lower():
                            print(f"\nName {all_student_Data[i]["name"]} Data Deleted Successfully")
                            all_student_Data.pop(i)
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

def menu():
    while True:
        output=user_menu()

        if output=='1':
            register_student()
        elif output=='2':
            search_a_Student()
        elif output=='3':
            view_all_student()
        elif output=='4':
            delete_student()
        elif output=='5':
            print("Exit Successfull Thanku...")
            break
        else:
            print("\nInvalid Choice! Enter The Number Between(1-5)")     

menu()