# Pascal right triangle pattern
'''
        1
      1 1
    1 2 1
  1 3 3 1
1 4 6 4 1
'''
rows= 5
# v=1
for i in range(rows):
    for sp in range(rows-i-1):
        print(" ",end="")
    v = 1
    for j in range(i+1):
        print(v,end=" ")
        v=v*(i-j)//(j+1)
    print()
    