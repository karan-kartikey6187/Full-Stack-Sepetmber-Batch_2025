data=[]

studendone={
    "Id":input("Enter Your ID: "),
    "Name":input("Enter Your Name: "),
    "Address":input("Enter Your Address: "),
    "Email":input("Enter Your Email: ")
}

studendtwo={
    "Id":input("Enter Your ID: "),
    "Name":input("Enter Your Name: "),
    "Address":input("Enter Your Address: "),
    "Email":input("Enter Your Email: ")
}

data.append(studendone)
data.append(studendtwo)

name=studendone["Name"]
address=studendone["Address"]
email=studendone["Email"]

studendone["Name"]=studendtwo["Name"]
studendone["Address"]=studendtwo["Address"]
studendone["Email"]=studendtwo["Email"]

studendtwo["Name"]=name
studendtwo["Address"]=address
studendtwo["Email"]=email

print(data)