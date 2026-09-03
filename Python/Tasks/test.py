import os
import uuid
import json

path = "E:\\MyFolder/"
filename = "file.json"

def register():
    if os.path.exists(path + filename):
        with open(path + filename, "r") as file:
            content = file.read()
            if content:
                existing_data = json.loads(content)
            else:
                existing_data = []
    else:
        existing_data = []

    data = {
        "id": uuid.uuid4().hex[:5],
        "name": input("Please enter the name: "),
        "Address": input("Please enter the address: "),
        "Contact": input("Please enter the contact number: ")
    }

    existing_data.append(data)

    with open(path + filename, "w") as file:
        
        json.dump(existing_data, file, indent=4)

    print("Registration successful!")