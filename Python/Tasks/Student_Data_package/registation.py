def register_student():
    all_student_Data=[]
    studentdict={}
    number_of_qulification=1
    print("\n>>>>>>>>>>>>>>>>}~Registration-Details~{<<<<<<<<<<<<<<<")
    studentdict["id"]=input("Please Enter Your ID: ")
    studentdict["name"]=input("Please Enter Your Name: ")
    studentdict["address"]=input("Please Enter Your Address: ")
    while True:
        contact = input("Please Enter Your Contact: ")
        if contact.isdigit() and len(contact) == 10:
            studentdict["contact"] = int(contact)
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

    return studentdict