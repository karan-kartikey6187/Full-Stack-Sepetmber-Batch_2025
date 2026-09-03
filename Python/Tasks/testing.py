import json
path=r"Student Registation\student.json"
data={"id":32312,
      "name":"karan"}
with open(path,'r') as file:
    all_data=file.read()
    total_data=json.loads(all_data) if all_data else []
    total_data.append(data)
with open(path,'w') as file:
    file.write(json.dumps(total_data,indent=4))
