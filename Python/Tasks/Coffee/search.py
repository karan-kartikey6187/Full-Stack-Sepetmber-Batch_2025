import requests
import Coffee
import json

def search_by_id():
    json_response=requests.get("https://api.sampleapis.com/coffee/hot")
    json_response=json_response.json()
    id=input("Please Enter ID: ")
    found=False
    for data in json_response:
        if str(data["id"])==id:
            print(json.dumps(data,indent=4))
            found=True

    if not found:
       print("No Record Found!")

def search_by_ingredient():
    json_response=requests.get("https://api.sampleapis.com/coffee/hot")
    json_response=json_response.json()
    ingredient=input("Please Enter Ingredient Name: ")
    found=False
    for data in json_response:
        for item in data["ingredients"]:
            if item.lower()==ingredient.lower():
                print(json.dumps(data,indent=4))
                found=True

    if not found:
       print("No Record Found!") 

def menu():
    while True:
        print(">>>>>>>>>>Search Menu<<<<<<<<<<<<")
        print("1.search By Id")
        print("2.search By Ingredient")
        print("3.Exit")
        choice=input("Enter Your Choice: ")
        if choice.isdigit():
            choice=int(choice)
            if choice==1:
                Coffee.search_by_id()
            elif choice==2:
                Coffee.search_by_ingredient()
            elif choice==3:
                print("Exit Done!")
                break     
            else:
                print("Invalid! Choice! Please Enter Number Between(1-3)")              
        else:
            print("Plesase Enter Only Number! Not Latter")