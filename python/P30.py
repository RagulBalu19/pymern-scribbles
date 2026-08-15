# Hollow Sandglass Pattern
'''
*********
 *     *
  *   *
   * *
    *
   * *
  *   *
 *     *
*********
'''

row = 5
print("\nHollow SandGlass Pattern")
for i in range(row,0,-1):
    width = 2*i-1
    for sp in range(row-i):
        print(" ",end="")
    for j in range(width):
        if i == row or j == 0 or j == width-1:
            print("*",end="")
        else:
            print(" ",end="")
    print()
for i in range(2,row+1):
    width = 2*i-1
    for sp in range(row-i):
        print(" ",end="")
    for j in range(width):
        if i == row or j == 0 or j == width-1:
            print("*",end="")
        else:
            print(" ",end="")
    print()