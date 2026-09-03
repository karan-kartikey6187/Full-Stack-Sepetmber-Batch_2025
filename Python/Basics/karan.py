data={
# This is the keys and values. where left side is we write keys and right side values
"id":1012,
"Name":"Karan Kartikey",
"Address":"Kathayatbara,Bageshwar",
"Email":"karankartikey108@gmail.com",
"MobileNumber":8575449327
}
name=data["Name"]
address=data["Address"]
email=data["Email"]
contact=data["MobileNumber"]

# f is used to create an f-string, which allows you to directly insert variable values inside a string using { }.
print(f"My Name is {name} My Address is {address} Email is {email} and Phone Numeber is {contact}") 
