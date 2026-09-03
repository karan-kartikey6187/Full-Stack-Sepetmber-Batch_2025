
def documents():
      documents_list=[]
      for i in range(3):
        document_dic={}
        document_dic={
        "document":input(f"Please Enter Your Document {i+1} Name: "),
        "image":input("Paste Your Image Link Here: ")
        } 
        documents_list.append(document_dic)  
      return documents_list

def ask_name():
    while True:
        first_name=input("Please Enter Your First Name: ")
        if first_name.isalpha()==True:
            break
        else: print("Invalid! Name Please Enter Only Latters.")
    while True:
        last_name=input("Please Enter Your Last Name: ")
        if last_name.isalpha()==True:
            break
        else: print("Invalid! Name Please Enter Only Latters.")    
    return first_name+" "+last_name

def ask_address():
    while True:
        email = input("Please Enter Your Email Address: ")
        if "@" in email and "." in email:
            break
        else: print("Invalid! Email Try Again.")
    return email

def review(data):
    i=1
    print(">>>>>>>>>>>>Client Details<<<<<<<<<<<<<")
    for key,value in data.items():
        if key != "document":
            print(f"{key}-{value}")        
    for doc in data["document"]:
        print(f"{key} {i}:",end="")
        print(f" name-{doc['document']} , image-{doc['image']}") 
        i+=1     
    while True:
        print("1.Submit") 
        print("2.Cancel")   
        choice=int(input("Enter Your Choice: "))
        if choice==1:
            print("Submitted Successfully.")
            break
        elif choice==2:
            print("Cancelled Successfully.") 
            break
        else: 
            print("Invalid! Choice.") 
    return data  