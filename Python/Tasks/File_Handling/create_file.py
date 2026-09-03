import os

def Create_files():
    file=r"E:\Files\file"
    folder=r"E:\Files"
    try:
        data=os.listdir(folder)
        file_count=len(data)
        number=int(input("How Many File You Want To Create: "))
        for i in range(file_count+1,file_count+number+1):
            with open(f"{file}{i}.txt",'w') as f:
                f.write(f"This is File Number {i+1}")  
        print(f"All {number} Files Created Successfully.")

    except Exception:
        print("Invalid Input! Please Enter Only Numbers Not Character")
        Create_files()

Create_files()