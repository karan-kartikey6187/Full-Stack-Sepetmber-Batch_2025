import api_data

def user_menu():
    while True:
        print(">>>>>>>>>>Search Menu<<<<<<<<<<<<")
        print("1.Search By Id")
        print("2.Search By Email")
        print("3.Search By Address")
        print("4.Exit")
        choice=input("Enter Your Choice: ")
        if choice.isdigit():
            choice=int(choice)
            if choice==1:
                api_data.by_id()
            elif choice==2:
                api_data.by_email()
            elif choice==3:
                api_data.address_search()
            elif choice==4:
                print("Exit Done!")
                break     
            else:
                print("Invalid! Choice! Please Enter Number Between(1-4)")              
        else:
            print("Plesase Enter Only Number! Not Latter")

def address_search():
      while True:
        print(">>>>>>>>>>Address Search Menu<<<<<<<<<<<<")
        print("1.Search By City")
        print("2.Search By Zip Code")
        print("3.Search By Latitude")
        print("4.Search By Longitude")
        print("5.Back")
        choice=input("Enter Your Choice: ")
        if choice.isdigit():
            choice=int(choice)
            if choice==1:
                api_data.by_address_city()
            elif choice==2:
                api_data.by_address_zip_code()
            elif choice==3:
                api_data.by_addess_latitude()
            elif choice==4:
                api_data. by_addess_longitude()
            elif choice==5:
                break     
            else:
                print("Invalid! Choice! Please Enter Number Between(1-5)")              
        else:
            print("Plesase Enter Only Number! Not Latter") 
