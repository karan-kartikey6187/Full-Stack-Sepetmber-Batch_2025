print("-----------Student Data------------------")
id=int(input("Please Enter Your Id: "))
name=input("Please Enter Your Name: ")
email=input("Please Enter Your Email: ")
address=input("Please Enter Your Address: ")
qulification=[{"First Qualification":input("Please Enter Your First Qualification: "),
               "Passing Year":input("Please Enter Your Passing Year: ")},
              {"Second Qualification":input("Please Enter Your Second Qualification: "),
               "Passing Year":input("Please Enter Your Passing Year: ")}]
age=int(input("Please Enter Your Age: "))
gender=input("Please Enter Your Gender: ")

studentdata={
"Id":id,
"Name":name,
"Email":email,
"Address":address,
"Qualification":qulification,
"Age":age,
"Gender":gender
}

print(studentdata)