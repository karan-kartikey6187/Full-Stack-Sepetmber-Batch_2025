data=[]

firststudent={
    "id":int(input("Please Enter Your Id: ")),
"name":input("Please Enter Your Name: "),
"qulification":{"First Qualification":input("Please Enter Your First Qualification: "),
               "Passing Year":input("Please Enter Your Passing Year: ")}
               }
data.append(firststudent)

secondstudent={
    "id":int(input("Please Enter Your Id: ")),
"name":input("Please Enter Your Name: "),
"qulification":[{"First Qualification":input("Please Enter Your First Qualification: "),
               "Passing Year":input("Please Enter Your Passing Year: ")
               },
               {"Second Qualification":input("Please Enter Your Second Qualification: "),
               "Passing Year":input("Please Enter Your Passing Year: ")}
               ]}
data.append(secondstudent)

print(data)