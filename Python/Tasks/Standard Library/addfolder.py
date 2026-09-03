import os
def Folder():
    num=int(input("How many folder do you want create:"))
    for i in range(num):
        os.mkdir(input(f"Please enter the folder {i+1} name:"))
        print("Folder created Successfully")
Folder()