row = 5
for i in range(row):
    for sp in range(row-i-1):
        print(" ",end="")
    for j in range(2*i+1):
        print("*",end="")
    print()
    
print("inverted full prymid")
for a in range(row,0,-1):
    for sps in range(row-a):
        print(" ",end="")
    for b in range(2*a-1):
        print("*",end="")
    print()
    
print("full pyramid in number format")
for c in range(row):
    for s in range(row-c-1):
        print(" ",end="")
    # increasing order(12345)
    for d in range(1,c+1):
        print(d,end="")
    # decreasing order(4321)
    for d in range(c-1,0,-1):
        print(d,end="")
    print()