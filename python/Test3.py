r=int(input("Enter a row: "))
for i in range(1,r+1):
    for space in range(r-i):
        print(" ",end="")
    for j in range(i):
        print("*",end="")
    print()