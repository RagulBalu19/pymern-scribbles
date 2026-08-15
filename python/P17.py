# numbers pattern in increase and decrease order
row =5
num = 1
for i in range(1,row+1):
    for j in range(i):
        print(num,end="")
        num+=1
    print()
    
print("reverse number pattern")
for k in range(row,0,-1):
    for l in range(k):
        print(k-l,end="")
        num-=1
    print()