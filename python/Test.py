# left triangle upward and downward
print("left triangle")
r = 5
for i in range(1,r+1):
    for j in range(i):
        print("*",end="")
    print()

print("left triangle downward")
for k in range(r,0,-1):
    for l in range(k):
        print("*", end="")
    print()