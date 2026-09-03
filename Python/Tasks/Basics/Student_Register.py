student_list=[]


usercount=int(input("How Many User You Want To Register: "))

for student in range(usercount):
    number_of_qulification=1
    print(f">>>>>>>>>>>>>>>>Give Student {student+1} Details<<<<<<<<<<<<<<<<")
    studentdict={}
    studentdict["Id"]=int(input("Please Enter Your ID: "))
    studentdict["Name"]=input("Please Enter Your Name: ")
    studentdict["Address"]=input("Please Enter Your Address: ")
    studentdict["Qualification"]=[]
    qulification={f"Qualification {number_of_qulification}":input(f"Please Enter Your Qualification {number_of_qulification}: "),
                                  "Qualification Year":input("Please Enter Qualification Year: ")}
    studentdict["Qualification"].append(qulification)
    for add in range(4):
           
           print("1.Add More Qualification")
           print("2.Continue")
           choice=int(input("Please Enter Your Choice: "))
           if choice==1:       
              number_of_qulification+=1
              qulification={f"Qualification {number_of_qulification}":input(f"Please Enter Your Qualification {number_of_qulification}: "),
                                   "Qualification Year":input("Please Enter Qualification Year: ")}
              studentdict["Qualification"].append(qulification)
              if add==3:
                 print("5 Qualification Registered!")
                 break
           elif choice==2:
              number_of_qulification=1
              break
           else: print("Invalid Input!") 

    student_list.append(studentdict)      
       
print(student_list)
