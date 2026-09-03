import json
import os
def write(json_file): 
    if not os.path.exists(json_file):
        with open(json_file, "w") as f:
             f.write("[]")

def read(json_file):
    with open(json_file, "r") as f:
        return json.loads(f.read())

def write_json(json_file,student_list):
    with open(json_file,'w') as file:
                file.write(json.dumps(student_list,indent=4))