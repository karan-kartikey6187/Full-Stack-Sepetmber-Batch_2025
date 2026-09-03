dictionary=[
            {
            "Id":101,
            "Name":"Karan",
            "Address":"Bageshwar",
            "Email":"karankartikey108@gmail.com"
            },
            {
            "Id":102,
            "Name":"Hema",
            "Address":"Kapkot",
            "Email":"Hemamatha098@gmail.com"
            },
            {
            "Id":103,
            "Name":"Tara",
            "Address":"Bilona",
            "Email":"Tarasingh932@gmail.com"
            },
            {
            "Id":104,
            "Name":"Ankita",
            "Address":"Uttrakhand",
            "Email":"Ankitafartiyal34@gmail.com"
            },
            {
            "Id":105,
            "Name":"Kumkum",
            "Address":"Noida",
            "Email":"Kumkumsahi76@gmail.com"
            }
            ]
search=input("Which Address Data You Want to Search: ")
for item in dictionary:
    if item["Address"].lower()==(search).lower():
        print(item)
