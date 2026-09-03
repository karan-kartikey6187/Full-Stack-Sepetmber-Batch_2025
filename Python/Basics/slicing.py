data=[1,2,3,4,5,6,7,8,9,10]

output=data[0::3] #slicing[Starting Index : Ending Index : Step/Jump]

#in jump/step it start with 0 index and skip the element that is given in step ex. data[0::3]

print(output)
# Starting Index will include in start but ending index will not include in end

output=data[0:2:]  # it not print 2nd index when we give ending point  it print only 0 and 1 index

print(output)

output=data[1::] #it is the starting index from where the element will start

print(output)
