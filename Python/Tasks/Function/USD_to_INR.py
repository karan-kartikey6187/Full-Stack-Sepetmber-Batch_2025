def usd_to_inr(usd):
    inr=usd*89.64 #Value As 22/Nov/2025
    return inr

usd_given=int(input("Enter The Amount Of USD: "))
final_inr=usd_to_inr(usd_given)

print(f"{usd_given} USD is Equal To {final_inr} Indian Rupee")