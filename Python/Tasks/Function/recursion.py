# print 1-100 numbers
def print_numbers(number):
    if number==101:
        return
    print(number)
    print_numbers(number+1)

print_numbers(1)

