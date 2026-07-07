row = 5
print("left triangle in numbers pattern ")
'''
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
'''
for i in range(1,row+1):
    for j in range(i):
        print(i,end=" ")
    print()


print("reverse number left triangle")
'''
5
5 4
5 4 3
5 4 3 2
5 4 3 2 1
'''

for k in range(1,row+1):
    for l in range(k):
        print(row-l,end=" ")
    print()


print("left triangle in alphabet pattern ")
'''
A
BB
CCC
DDDD
EEEEE
'''
for a in range(1,row+1):
    for b in range(a):
        print(chr(65+a),end="")
    print()
    
print("Right Triangle pattern using number")
'''
    1
   22
  333
 4444
55555
'''
for c in range(1,row+1):
    for sps in range(row-c):
        print(" ",end="")
    for d in range(c):
        print(c,end="")
    print()

print("left triangle in Descending order number pattern")
'''
1
21
321
4321
54321
'''
for e in range(1,row+1):
    for f in range(e,0,-1):
        print(f,end="")
    print()