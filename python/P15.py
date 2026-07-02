# Hollow right triangle
row=5 
for i in range(row):
    for j in range(i+1):
        if j==0 or i==row-1 or i==j:
            print("*",end="")
        else:
            print(" ",end="")
    print()