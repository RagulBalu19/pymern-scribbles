# left triangle pattern using "#"
row=int(input("Enter a number of rows:"))
for i in range(1,row+1):
    for j in range(i):
        print("#", end=" ")
    print()
    
print("decreasing order in numeric")
for k in range(row,0,-1):
    for l in range(k):
        print(k-l,end=" ")
    print()
    
print("increasing order in alphabet")
for a in range(1,row+1):
    for b in range(a):
        print(chr(65+b),end=" ")
    print()
    
print("decreasing order in * right triangle")
for c in range( row):
    for sp in range(c):
        print(" ",end="")
    for d in range(row-c):
        print("*",end=" ")
    print()