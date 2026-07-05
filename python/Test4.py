r=5
print("number pattern")
for i in range(1,r+1):
    for j in range(1,i+1):
        print(j,end="")
    print()

print("reverse number pattern")
for a in range(r,0,-1):
    for b in range(1,a+1):
        print(b,end="")
    print()