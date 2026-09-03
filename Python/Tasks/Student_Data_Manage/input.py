def input_contact():
    while True:
            try: 
                contact =int(input("Please Enter Your Contact: "))
                if len(str(contact)) == 10:
                    break
                else:
                    print("Invalid contact! Enter 10 digit number.")
            except:
                 print("Enter Only Number Not Character.")  

    return contact 

def input_contact_update():
    while True:
            try: 
                contact =int(input("Please Enter Your New Contact: "))
                if len(str(contact)) == 10:
                    break
                else:
                    print("Invalid contact! Enter 10 digit number.")
            except:
                 print("Enter Only Number Not Character.")  

    return contact 

def input_contact_delete():
    try:
        contact = int(input("Please Enter Contact To Delete: "))
        if len(str(contact)) == 10:
            return contact
        else:
            print("Invalid contact! Enter 10 digit number.")
            return input_contact_delete()
    except:
        print("Enter Only Number Not Character.")
        return input_contact_delete()      