row=5
for i in range(1,row+1):
    for space in range(i - i):
        print(" ",end="")
    for col in range(i):
        print("*",end="")
    print()