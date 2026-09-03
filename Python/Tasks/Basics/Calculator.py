
numone=input("Enter First Number:")

numtwo=input("Enter Second Number:")

numone=int(numone)
numtwo=int(numtwo)

oprtration=input("What operation do you want to perform?(+,-,*,/,%):")

if oprtration=='+':
     print("Sum is:",numone+numtwo)
elif oprtration=='-':
     print("Subtract is:",numone-numtwo)

elif oprtration=='*':
     print("Multiply is:",numone*numtwo)

elif oprtration=='/':
     print("Divide is:",numone/numtwo)

elif oprtration=='%':
     print("Remainder is:",numone%numtwo)

else : print("Invalid Operation")   