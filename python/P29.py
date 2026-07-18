# Sandglass Pattern
'''
*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********
'''
print("\nSandglass Pattern\n")
row = 5
for i in range(row,0,-1):
    for sp in range(row-i):
        print(" ",end="")
    for j in range(2*i-1):
        print("*",end="")
    print()
for i in range(2,row+1):
    for sp in range(row-i):
        print(" ",end="")
    for j in range(2*i-1):
        print("*",end="")
    print()