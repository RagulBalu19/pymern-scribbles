# Character pyramid
'''
    A
   B B
  C C C
 D D D D
E E E E E
'''
row = 5
for i in range(1,row+1):
    for sp in range(row - i):
        print(" ", end="")
    for j in range(i):
        print(chr(64+i),end=" ")
    print()
    
# Reverse Character pyramid
'''
E E E E E
 D D D D
  C C C
   B B
    A
'''
print("Reverse Character pyramid")
for b in range(row,0,-1):
    for space in range(row-b):
        print(" ",end="")
    for c in range(b):
        print(chr(64+b),end=" ")
    print()