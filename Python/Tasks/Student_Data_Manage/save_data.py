import json
def save_data_opration(json_file,students_data):
    with open(json_file, "w") as f:
        f.write(json.dumps(students_data, indent=4))