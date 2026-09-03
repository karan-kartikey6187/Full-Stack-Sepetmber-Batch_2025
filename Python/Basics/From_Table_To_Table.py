fromtable=int(input("Table From: "))
TableTo=int(input("Table To: "))
to=TableTo+1
if fromtable<TableTo:
    for t in range(fromtable,to):
        for i in range(1,11):
           table=t*i
           print(f"{t} * {i} = {table}")

else:
    print("Error! Fist Number Is Greater Than Second Number")