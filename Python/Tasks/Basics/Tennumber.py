one=int(input("Enter 1st Number: "))
two=int(input("Enter 2nd Number: "))
three=int(input("Enter 3d Number: "))
four=int(input("Enter 4th Number: "))
five=int(input("Enter 5th Number: "))
six=int(input("Enter 6th Number: "))
seven=int(input("Enter 7th Number: "))
eight=int(input("Enter 8th Number: "))
nine=int(input("Enter 9th Number: "))
ten=int(input("Enter 10th Number: "))

Datalist=[]
positive=[]
negitive=[]

Datalist.append(one)
Datalist.append(two)
Datalist.append(three)
Datalist.append(four)
Datalist.append(five)
Datalist.append(six)
Datalist.append(seven)
Datalist.append(eight)
Datalist.append(nine)
Datalist.append(ten)

if Datalist[0]>0:
    positive.append(Datalist[0])
else:
    negitive.append(Datalist[0])

if Datalist[1]>0:
    positive.append(Datalist[1])
else:
    negitive.append(Datalist[1])  

if Datalist[2]>0:
    positive.append(Datalist[2])
else:
    negitive.append(Datalist[2])

if Datalist[3]>0:
    positive.append(Datalist[3])
else:
    negitive.append(Datalist[3])    

if Datalist[4]>0:
    positive.append(Datalist[4])
else:
    negitive.append(Datalist[4])

if Datalist[5]>0:
    positive.append(Datalist[5])
else:
    negitive.append(Datalist[5])

if Datalist[6]>0:
    positive.append(Datalist[6])
else:
    negitive.append(Datalist[6])

if Datalist[7]>0:
    positive.append(Datalist[7])
else:
    negitive.append(Datalist[7]) 

if Datalist[8]>0:
    positive.append(Datalist[8])
else:
    negitive.append(Datalist[8])

if Datalist[9]>0:
    positive.append(Datalist[9])
else:
    negitive.append(Datalist[9])   

print("All Data: ",Datalist)
print("Positive: ",positive) 
print("Negative",negitive)  

