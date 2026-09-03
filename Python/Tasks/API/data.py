import requests
import json

def api_data():
    json_response=requests.get("https://jsonplaceholder.typicode.com/users")
    json_response=json_response.json()
    client_data={
        "data":json_response
    }
    print(json.dumps(client_data,indent=4))
    
api_data()