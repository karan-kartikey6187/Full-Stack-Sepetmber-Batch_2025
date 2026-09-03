import os

for root,dirs,file in os.walk("."):#"." this is current folder
    print(f"Root-{root}")#The current folder path that Python is scanning.
    print(f"Dirs-{dict}")#A list of all folders (directories) inside the root.
    print(f"File-{file}")#A list of all files inside the root.