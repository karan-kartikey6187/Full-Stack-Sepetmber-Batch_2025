def find_factorial(number):
    factorial=1
    for i in range(number,0,-1):
        factorial*=i
    return factorial   

number=int(input("Enter a Number: "))
output=find_factorial(number)
print(f"Factorial is: {output}")