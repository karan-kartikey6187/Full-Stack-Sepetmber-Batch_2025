import Student_Data_package

def user_menu():
     all_student_Data=[]
     while True:    
          print("\n>>>>>>>>>>>>>>>>>|Student-Menu|<<<<<<<<<<<<<<<<")
          print("1.Register a Student")
          print("2.Search a Student")
          print("3.Delete a Student")
          print("4.Exit")
          print("-----------------------------------------------\n")

          choice=int(input("Please Enter Your Choice: "))
          if choice==1:
               student=Student_Data_package.register_student()
               all_student_Data.append(student)
          elif choice==2:
               Student_Data_package.search_a_Student(all_student_Data)
          elif choice==3:     
               all_student_Data=Student_Data_package.delete_student(all_student_Data)
          elif choice==4:
               print("Exit Thank you...")
               break
          else:
               print("Invalid Choice! Please Select(1-4)")




          



     