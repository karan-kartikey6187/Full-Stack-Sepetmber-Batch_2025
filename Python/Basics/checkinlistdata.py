data=[12,56,898,33,45,24,88,56,88]
found=0
print(data)
check=int(input("Which Number You Want To Search: "))

for number in data:
    if number==check:
        print(f"Yes {check} Found")
        found=1
if found==0:
    print(f"NO {check} Not Found")    