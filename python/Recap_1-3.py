# single star
print("single")
print("*")
print("\n vertical")
# vertical stars
for i in range(5):
    print("*")
    
# Horizontal stars
print("\n Horizontal")
for j in range(5):
    print("*", end="")

# Square pattern
print("\n  Square")
rows=5
for k in range(rows):
    for l in range(rows):
        print("*",end="")
    print()
    
# Rectangle pattern
print("\n Rectangle")
for m in range(3):
    for n in range(7):
        print("*",end="")
    print()
    
# triangle pattern
print("\n triangle")
for o in range(1,rows+1):
    for p in range(o):
        print("*",end="")
    print()
    
# reverse triangle pattern
print("\n Reverse Triangle")
for q in range(rows,0,-1):
    for r in range(q):
        print("*",end="")
    print()
    
# right triangle Pattern
print("right triangle")
for s in range(1,rows+1):
    for sp in range(rows-s):
        print(" ", end="")
    for t in range(s):
        print("*",end="")
    print()
    
# number increase in triangle pattern
print("Number triangle")
for u in range(1,rows+1):
    for v in range(1,u+1):
        print(v, end="")
    print()
    
print("Number reverse triangle")
for w in range(rows,0,-1):
    for x in range(1,w+1):
        print(x, end="")
    print()