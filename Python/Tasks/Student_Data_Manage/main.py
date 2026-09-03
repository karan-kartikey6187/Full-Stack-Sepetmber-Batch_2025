from Student_Data_Manage.menu import main_menu
from Student_Data_Manage.register import register_opration
from Student_Data_Manage.save_data import save_data_opration
from Student_Data_Manage.search import search_opration
from Student_Data_Manage.read_write_file import write
from Student_Data_Manage.read_write_file import read
from Student_Data_Manage.delete import delete_opration
from Student_Data_Manage.update import update_opration
student_data=[]
def main_opration():
    json_file = r"Student_Data_Manage\student_data.json"
    write(json_file)
    student_data=read(json_file)
    while True:
        choice = main_menu()

        if choice == 1:
            register_opration(student_data)
            save_data_opration(json_file,student_data) 
        elif choice==2:
            search_opration(student_data) 
        elif choice==3:
            update_opration(json_file,student_data)
            student_data = read(json_file) 
        elif choice==4:
            delete_opration(json_file,student_data)
            student_data = read(json_file) 
        elif choice == 5:
            print("Exiting program")
            break
        else:
            print("Invalid choice")