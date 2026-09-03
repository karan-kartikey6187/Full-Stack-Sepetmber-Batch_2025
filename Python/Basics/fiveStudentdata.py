studentone={}
studenttwo={}
studentthree={}
studentfour={}
studentfive={}
st1=[]
st2=[]
st3=[]
st4=[]
st5=[]

studentone["Id"]=int(input("Enter Your Id: "))
studentone["Name"]=input("Enter Your Name: ")
studentone["Hindi"]=int(input("Enter Marks in Hindi: "))
studentone["English"]=int(input("Enter Marks in English: "))
studentone["Maths"]=int(input("Enter Marks in Maths: "))
studentone["Science"]=int(input("Enter Marks in Science: "))
studentone["Computer"]=int(input("Enter Marks in Computer: "))

st1.append(studentone["Hindi"])
st1.append(studentone["English"])
st1.append(studentone["Maths"])
st1.append(studentone["Science"])
st1.append(studentone["Computer"])

studenttwo["Id"]=int(input("Enter Your Id: "))
studenttwo["Name"]=input("Enter Your Name: ")
studenttwo["Hindi"]=int(input("Enter Marks in Hindi: "))
studenttwo["English"]=int(input("Enter Marks in English: "))
studenttwo["Maths"]=int(input("Enter Marks in Maths: "))
studenttwo["Science"]=int(input("Enter Marks in Science: "))
studenttwo["Computer"]=int(input("Enter Marks in Computer: "))

st2.append(studenttwo["Hindi"])
st2.append(studenttwo["English"])
st2.append(studenttwo["Maths"])
st2.append(studenttwo["Science"])
st2.append(studenttwo["Computer"])

studentthree["Id"]=int(input("Enter Your Id: "))
studentthree["Name"]=input("Enter Your Name: ")
studentthree["Hindi"]=int(input("Enter Marks in Hindi: "))
studentthree["English"]=int(input("Enter Marks in English: "))
studentthree["Maths"]=int(input("Enter Marks in Maths: "))
studentthree["Science"]=int(input("Enter Marks in Science: "))
studentthree["Computer"]=int(input("Enter Marks in Computer: "))

st3.append(studentthree["Hindi"])
st3.append(studentthree["English"])
st3.append(studentthree["Maths"])
st3.append(studentthree["Science"])
st3.append(studentthree["Computer"])

studentfour["Id"]=int(input("Enter Your Id: "))
studentfour["Name"]=input("Enter Your Name: ")
studentfour["Hindi"]=int(input("Enter Marks in Hindi: "))
studentfour["English"]=int(input("Enter Marks in English: "))
studentfour["Maths"]=int(input("Enter Marks in Maths: "))
studentfour["Science"]=int(input("Enter Marks in Science: "))
studentfour["Computer"]=int(input("Enter Marks in Computer: "))

st4.append(studentthree["Hindi"])
st4.append(studentthree["English"])
st4.append(studentthree["Maths"])
st4.append(studentthree["Science"])
st4.append(studentthree["Computer"])

studentfive["Id"]=int(input("Enter Your Id: "))
studentfive["Name"]=input("Enter Your Name: ")
studentfive["Hindi"]=int(input("Enter Marks in Hindi: "))
studentfive["English"]=int(input("Enter Marks in English: "))
studentfive["Maths"]=int(input("Enter Marks in Maths: "))
studentfive["Science"]=int(input("Enter Marks in Science: "))
studentfive["Computer"]=int(input("Enter Marks in Computer: "))

st5.append(studentfive["Hindi"])
st5.append(studentfive["English"])
st5.append(studentfive["Maths"])
st5.append(studentfive["Science"])
st5.append(studentfive["Computer"])

totalst1=sum(st1)
totalst2=sum(st2)
totalst3=sum(st3)
totalst4=sum(st4)
totalst5=sum(st5)

prcentagest1=totalst1/5
prcentagest2=totalst2/5
prcentagest3=totalst3/5
prcentagest4=totalst4/5
prcentagest5=totalst5/5

percentages=[prcentagest1, prcentagest2, prcentagest3, prcentagest4, prcentagest5]

top=max(percentages)

if top == prcentagest1:
    print(f"Top Student is: {studentone["Name"]} And Precentage is {top}")

elif top == prcentagest2:
   print(f"Top Student is: {studenttwo["Name"]} And Precentage is {top}")

elif top == prcentagest3:
  print(f"Top Student is: {studentthree["Name"]} And Precentage is {top}")

elif top == prcentagest4:
    print(f"Top Student is: {studentfour["Name"]} And Precentage is {top}")

else:
    print(f"Top Student is: {studentfive["Name"]} And Precentage is {top}")