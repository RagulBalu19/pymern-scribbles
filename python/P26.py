# diamond pattern
'''
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
'''
row = 5 
for i in range(1,row+1):
    for space in range(row - i):
        print(" ", end = "")
    for j in range(2*i-1):
        print("*",  end = "")
    print()
for i in range(row - 1, 0, -1):
    for space in range(row - i):
        print(" ",end = "")
    for j in range(2 * i - 1):
        print("*", end = "")
    print()
    
# Hollow Diamond
'''
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
'''
print("\n\n Hollow Diamond Pattern\n\n")
for a in range(row):
    for sps in range(row - a -1):
        print(" ", end = "")
    for b in range(2 * a + 1):
        if b == 0 or b == a*2:
            print("*",end = "")
        else:
            print(" ", end = "")
    print()
for a in range(row - 2, -1, -1):
    for sps in range(row - a -1):
        print(" ", end = "")
    for b in range(2 * a+1):
        if b == 0 or b == a * 2:
            print("*",end = "")
        else:
            print(" ", end = "")
    print()