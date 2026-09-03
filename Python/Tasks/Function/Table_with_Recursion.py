def print_table(number,num2):
    if num2==11:
        return
    print(f"{number} X {num2} = {number*num2}")
    print_table(number,num2+1)

tableof=int(input("Enter a Number: "))

print_table(tableof,1)