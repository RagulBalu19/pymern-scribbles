# Butterfly pattern

'''
*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *

'''
print("\nButterfly Pattern")
row = 5
for i in range(1,row+1):
    for j in range(i):
        print("*",end="")
    for sp in range(2*(row-i)):
        print(" ", end="")
    for j in range(i):
        print("*",end="")
    print()
for i in range(row-1,0,-1):
    for j in range(i):
        print("*",end="")
    for sp in range(2*(row-i)):
        print(" ",end="")
    for j in range(i):
        print("*",end="")
    print()