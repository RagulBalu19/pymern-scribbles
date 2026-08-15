# Alphabet pattern in increase and decrease
row = 5
for i in range(1,row+1):
    for j in range(i):
        print(chr(65+j),end="")
    print()
    
# decrease order
print("Decrease order")
for k in range(row,0,-1):
    for l in range(k):
        print(chr(65+l), end="")
    print()