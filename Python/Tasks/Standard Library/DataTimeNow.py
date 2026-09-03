import datetime

now=datetime.datetime.now()
expected=now+datetime.timedelta(30)
print("30 Days From Now:",expected)

now=datetime.datetime.now()
expected=now+datetime.timedelta(-30)
print("30 Days Back From Now:",expected)

now=datetime.datetime.now()
print("Date Time:",now.strftime("%y/%m/%d,%H:%M:%S"))

now=datetime.datetime.now()
print("Date Time:",now.strftime("%Y/%b/%d,%H:%M:%S")) #small b for months like.jan feb mar 

now=datetime.datetime.now()
print("Date Time:",now.strftime("%Y/%B/%d,%H:%M:%S")) #capital B for Month Like. January february march