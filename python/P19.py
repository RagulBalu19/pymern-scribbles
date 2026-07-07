# Number full pyramid
row = 5
for i in range(1,row+1):
    for space in range(row-i):
        print(" ",end="")
    for j in range(i):
        print(i,end=" ")
    print()
    
# Inverted number pyramid
print("\nInverted Number Pyramid \n")
for a in range(row,0,-1):
    for sp in range(row-a):
        print(" ",end="")
    for b in range(a):
        print(a,end=" ")
    print()