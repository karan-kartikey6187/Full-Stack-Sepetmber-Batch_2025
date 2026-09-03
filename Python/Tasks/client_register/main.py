import uuid
import validation
clint_all_data=[]

def register_data():
    client={
    "id":uuid.uuid4().hex[:13],
    "name":validation.ask_name(),
    "email":validation.ask_address(),
    "document":validation.documents()
    }
    return client

client_data=register_data()
client_all_data=validation.review(client_data)

