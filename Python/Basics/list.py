data=[1,3,4,2,6,89,7,43,67,53,22,89] 
#A list in Python is a collection of ordered and changeable (mutable) items.
#It can store multiple values of different data types in a single variable, written inside square brackets [ ].
#We can use same value multiple time
print(data)

jsondata=[{"id":121,"Name":"Karan"},{"id":122,"Name":"Pawan"},{"id":123,"Name":"Tara"}]

print(jsondata[1]) #it print 1 index


data=jsondata[1]
print(data["Name"])

#Another option

print(jsondata[1]["Name"])
