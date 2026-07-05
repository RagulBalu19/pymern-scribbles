r=5

print("reverse order number pattern 5 4 3 2 1")
for i in range(r,0,-1):
    for j in range (i,0,-1):
        print(j,end=" ")
    print()
    
    
print("reverse order number pattern inverted pattern")
for k in range(r,0,-1):
    for l in range (k):
        print(r-l,end=" ")
    print()