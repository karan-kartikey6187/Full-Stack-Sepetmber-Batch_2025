import requests
import json

def by_id():
    try:
        json_response=requests.get("https://jsonplaceholder.typicode.com/users")
        json_response=json_response.json()
        id=input("Please Enter ID: ").strip()
        found=False
        for data in json_response:
            if str(data["id"])==id:
                print(json.dumps(data,indent=4))
                found=True
                return

        if not found:
           print("No Record Found!")

    except Exception:
        print("Something went wrong while fetching data. Please try again later.")


def by_email():
    try:
        json_response=requests.get("https://jsonplaceholder.typicode.com/users")
        json_response=json_response.json()
        email=input("Please Enter Email: ").strip()
        found=False
        for data in json_response:
            if str(data["email"])==email:
                print(json.dumps(data,indent=4))
                found=True
                return

        if not found:
            print("No Record Found!")
    
    except Exception:
        print("Something went wrong while fetching data. Please try again later.")


def by_address_city():
    try:
        json_response=requests.get("https://jsonplaceholder.typicode.com/users")
        json_response=json_response.json()
        city=input("Please Enter City Name: ").strip()
        found=False
        for data in json_response:
                if data["address"]["city"].lower()==city.lower():
                    print(json.dumps(data,indent=4))
                    found=True
                    return
        if not found:
           print("No Record Found!") 

    except Exception:
        print("Something went wrong while fetching data. Please try again later.")

def by_address_zip_code():
    try:
        json_response=requests.get("https://jsonplaceholder.typicode.com/users")
        json_response=json_response.json()
        zipcode=input("Please Enter Zip Code: ").strip()
        found=False
        for data in json_response:
                if data["address"]["zipcode"]==zipcode:
                    print(json.dumps(data,indent=4))
                    found=True
                    return

        if not found:
           print("No Record Found!")

    except Exception:
        print("Something went wrong while fetching data. Please try again later.")


def by_addess_longitude():
    try:
        json_response=requests.get("https://jsonplaceholder.typicode.com/users")
        json_response=json_response.json()
        longitude=input("Please Enter Longitude: ").strip()
        found=False
        for data in json_response:
                if data["address"]["geo"]["lng"]==longitude:
                    print(json.dumps(data,indent=4))
                    found=True
                    return

        if not found:
           print("No Record Found!")

    except Exception:
        print("Something went wrong while fetching data. Please try again later.")       


def by_addess_latitude():
    try:    
        json_response=requests.get("https://jsonplaceholder.typicode.com/users")
        json_response=json_response.json()
        latitude=input("Please Enter Latitude: ").strip()
        found=False
        for data in json_response:
                if data["address"]["geo"]["lat"]==latitude:
                    print(json.dumps(data,indent=4))
                    found=True
                    return

        if not found:
           print("No Record Found!") 

    except Exception:
        print("Something went wrong while fetching data. Please try again later.")            
