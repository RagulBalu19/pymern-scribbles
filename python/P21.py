# Continuous Number Pyramid
row = 5 
num = 1
for i in range(1,row+1):
    for space in range(row - i):
        print(" ",end="")
    for j in range(i):
        print(num,end=" ")
        num+=1
    print()