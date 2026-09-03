import json

def Create_files():
    file=r"E:\All Files\\"
    json_file=r'File_Handling\all_files.json'
    try:
        with open(json_file,'r') as f:
            files=f.read()
            data=json.loads(files)
            if data==[]:
                file_count=0
            else:    
                file_count=data[0]
        number=int(input("How Many File You Want To Create: "))
        for i in range(file_count+1,file_count+number+1):
            with open(f"{file}{i}.txt",'w') as f:
                f.write(f"This is File Number {i+1}")
                with open(json_file,'w') as f:
                     f.write(json.dumps([file_count+number]))
        print(f"All {number} Files Created Successfully.")

    except Exception:
        print("Invalid Input! Please Enter Only Numbers Not Character")
        Create_files()

Create_files()