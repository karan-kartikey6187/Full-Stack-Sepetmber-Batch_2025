student_list=[]

usercount=int(input("How Many User You Want To Register: "))

for student in range(usercount):
    number_of_qulification=1
    print(f">>>>>>>>>>>>>>>>Give Student {student+1} Details<<<<<<<<<<<<<<<<")
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

    student_list.append(studentdict)      
       
while True:
     print(">>>>>>>>>>>>>>Search Menu<<<<<<<<<<<<<<<<")
     print("1.Search Student By Contact")
     print("2.Search Student By Qualification")
     print("3.Exit")
     searchchoice=int(input("Please Enter Your Choice: "))
     
     if searchchoice==1:
        contact=int(input("Please Enter Your Contact: "))
        found=False

        for data in student_list:
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

            for data in student_list:
                for qualification_year in data["Qualification"]:
                    if qualification_year["Qualification Year"] == year:
                        print(data)
                        found=True

            if not found:
                print("No Record Found!")     

        elif searchbyqulification == 2:
            qname = input("Enter Qualification Name: ")
            found=False

            for data in student_list:
                for qualification_name in data["Qualification"]:
                    if qualification_name["Qualification"].lower() == qname.lower():
                        print(data)
                        found=True

            if not found:
                print("No Record Found!")     

        else:
            print("Invalid Option!")

     elif searchchoice==3:
        print("Exit Thanku....")
        break             

     else:
        print("Invalid Input! Please Enter Number Between(1-3)")
