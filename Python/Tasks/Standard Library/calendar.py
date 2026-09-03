import calendar
print("----------------Which Month Calendar You Want To See--------------------")
year=int(input("Year:"))
month=int(input("Which Month:"))
print(calendar.month(year,month))

year=int(input("Which Year Hole Calendar You Want To See:"))
print(calendar.calendar(year))