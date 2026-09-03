dictionary={"Id":121,"Name":"Karan"}
listwithdictionarydata=[{"Id":121,"Name":"Karan Kartikey","Address":"Bageshwar"},
{"Id":122,"Name":"Tara Koranga","Address":"Almora"}]
Data=["Karan","Tara","Rohit","Hema","Manoj","Babita","Kumkum","Ankita","Gitanjali"]
print(Data)
Data.append("Diya")
print(Data)

#We can also append the dictionary in the list

Data.append(dictionary)
print(Data)

Data.append(listwithdictionarydata)
print(Data)