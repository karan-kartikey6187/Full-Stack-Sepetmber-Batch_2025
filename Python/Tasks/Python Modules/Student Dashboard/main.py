import registation
import search_student
import view_student
import delete_studentfunc
all_student_Data=[]
while True:
    print("\n>>>>>>>>>>>>>>>>>|Student-Menu|<<<<<<<<<<<<<<<<")
    print("1.Register a Student")
    print("2.Search a Student")
    print("3.View All Student")
    print("4.Delete a Student")
    print("5.Exit")
    print("-----------------------------------------------\n")
    choice=input("Please Enter Your Choice: ")
    output=choice

    if output=='1':
        student=registation.register_student()
        all_student_Data.append(student)
    elif output=='2':
        search_student.search_a_Student(all_student_Data)
    elif output=='3':
        view_student.view_all_student(all_student_Data)
    elif output=='4':
        all_student_Data=delete_studentfunc.delete_student(all_student_Data)
    elif output=='5':
        print("Exit Successfull Thanku...")
        break
    else:
        print("\nInvalid Choice! Enter The Number Between(1-5)") 
