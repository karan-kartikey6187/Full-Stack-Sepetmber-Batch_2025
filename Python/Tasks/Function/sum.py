def calculate_sum(a,b):
    sum=a+b
    return sum


first=int(input("Enter First Number: "))
second=int(input("Enter Second Number: "))

output=calculate_sum(first,second)

print(f"Sum of {first} and {second} is {output}")