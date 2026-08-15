# Alphabet pattern in increase 
row = 6
num = 65
for i in range(1, row+1):
    for j in range(i):
        print(chr(num),end=" ")
        num +=1
    print()
    
# number pattern start from 6 and decrease order like 6 5 4 3 2 1 
print("number pattern start from 6")
for a in range(1, row+1):
    for b in range(a):
        print(row-b,end=" ")
    print()
    
# The value printed is the row number, repeated row times.
print("printed is the row number, repeated row times")
for c in range(1,row+1):
    for d in range(c,0,-1):
        print(c,end=" ")
    print()