# 1. single star
print("single")
print("*")
print("\n vertical")
# 2. vertical stars
for i in range(5):
    print("*")
    
# 3. Horizontal stars
print("\n Horizontal")
for j in range(5):
    print("*", end="")

# 4. Square pattern
print("\n  Square")
rows=6
for k in range(rows):
    for l in range(rows):
        print("*",end="")
    print()
    
# 5. Rectangle pattern
print("\n Rectangle")
for m in range(3):
    for n in range(7):
        print("*",end="")
    print()
    
# 6. triangle pattern
print("\n triangle")
for o in range(1,rows+1):
    for p in range(o):
        print("*",end="")
    print()
    
# 7. reverse triangle pattern
print("\n Reverse Triangle")
for q in range(rows,0,-1):
    for r in range(q):
        print("*",end="")
    print()
    
# 8. right triangle Pattern
print("right triangle")
for s in range(1,rows+1):
    for sp in range(rows-s):
        print(" ", end="")
    for t in range(s):
        print("*",end="")
    print()
    
# 9. number increase in triangle pattern
print("Number triangle")
for u in range(1,rows+1):
    for v in range(1,u+1):
        print(v, end="")
    print()
# 10. number reverse triangle in increase order
print("Number reverse triangle")
for w in range(rows,0,-1):
    for x in range(1,w+1):
        print(x, end="")
    print()

# 11. Full pyramid pattern
print("Full pyramid")
for y in range(0,rows):
    for sp in range(rows-y-1):
        print(" ",end="")
    for z in range(2*y+1):
        print("*",end="")
    print()
    
# 12. Inverted full pyramid pattern
print("Inverted full pyramid")
for a in range(rows,0,-1):
    for sp in range(rows-a):
        print(" ",end="")
    for b in range(2*a-1):
        print("*",end="")
    print()
    
# 13. hollow square pattern
print("Hollow Square")
for c in range(rows):
    for d in range(rows):
        if c==0 or c==rows-1 or d==0 or d==rows-1:
            print("*",end="")
        else:
            print(" ",end="")
    print()
# 14. hollow rectangle pattern
print("hollow rectangle")
rows = 5
col = 7
for e in range(rows):
    for f in range(col):
        if e==0 or e==rows-1 or f==0 or f==col-1:
            print("*",end="")
        else:
            print(" ",end="")
    print()
    
# 15. Hollow right triangle pattern
print("Hollow right triangle")
for g in range(0, rows):
    for h in  range(g+1):
        if h==0 or g==rows-1 or g==h:
            print("*",end="")
        else:
            print(" ",end="")
    print()