# Full pyramid pattern
row=6
for i in range(row):
    for sp in range(row-i-1):
        print(" ", end="")
    for j in range(2*i+1):
        print("*",end="")
    print()
    
    
# The mos important formula for normal pyramid is 

# (sp)spaces = row - i - 1
# (j)stars  = 2*i + 1