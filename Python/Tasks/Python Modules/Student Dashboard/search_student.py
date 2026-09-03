
def search_a_Student(all_student_data):
      if len(all_student_data)>0:
            while True:        
                print(">>>>>>>>>>>>>>}~Search-Menu~{<<<<<<<<<<<<<<<<")
                print("1.Search Student By Contact")
                print("2.Search Student By Qualification")
                print("3.Back")

                searchchoice=input("Please Enter Your Choice: ")
                
                if searchchoice=="1":
                    contact=int(input("Please Enter Your Contact: "))
                    found=False

                    for data in all_student_data:
                        if data["contact"]==contact:
                            print(data)
                            found=True

                    if not found:
                        print("No Record Found!")             

                elif searchchoice=="2":
                    print("1.Search By Year")
                    print("2.Search By Qualification")
                    searchbyqulification=input("Please Enter Your Choice: ")

                    if searchbyqulification == "1":
                        year =input("Enter Qualification Year: ")
                        found=False

                        for data in all_student_data:
                            for qualification_year in data["qualification"]:
                                if qualification_year["year"] == year:
                                    print(data)
                                    found=True

                        if not found:
                            print("No Record Found!")     

                    elif searchbyqulification == "2":
                        qname = input("Enter Qualification Name (10th/12th/B.Tech/BCA): ")
                        found=False

                        for data in all_student_data:
                            for qualification_name in data["qualification"]:
                                if qualification_name["qualification"].lower() == qname.lower():
                                    print(data)
                                    found=True

                        if not found:
                            print("No Record Found!")     

                    else:
                        print("Invalid Option!")  

                elif searchchoice=="3":
                    break                  

                else:
                    print("Invalid Input! Please Enter Number Between(1-3)")   
      else: 
            print("\nSorry! No Data Avliable For Search")        