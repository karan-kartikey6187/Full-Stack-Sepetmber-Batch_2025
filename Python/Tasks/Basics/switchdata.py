studentdata=[]
dataone={ 
"Id":input("Enter Your ID: "),
"name":input("Enter Your Name: "),
"address":input("Enter Your Address: "),
"email":input("Enter Your email: ")
}
datatwo={
"Id":input("Enter Your ID: "),
"name":input("Enter Your Name: "),
"address":input("Enter Your Address: "),
"email":input("Enter Your email: ")
}
studentdata.append(dataone)
studentdata.append(datatwo)
name=dataone["name"]
address=dataone["address"]
email=dataone["email"]
dataone["name"]=datatwo["name"]
dataone["address"]=datatwo["address"]
dataone["email"]=datatwo["email"]
datatwo["name"]=name
datatwo["address"]=address
datatwo["email"]=email

print(studentdata)
