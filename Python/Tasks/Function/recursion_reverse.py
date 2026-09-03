# print number in desending order
def print_numbers(number):
    if number==0:
        return
    print(number)
    print_numbers(number-1)

print_numbers(100)