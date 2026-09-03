list=[12,56,87,54,4,65,3,55,23,67,12,67,2]
print(list)
x=int(input("Enter Number You Want To Search: "))
i=0
found=0
while i<len(list):
    if list[i]==x:
      print(f"{x} Found at {i} Index")
      found=1    
    i+=1
if found==0:
   print(f"{x} Not Found in List!")  