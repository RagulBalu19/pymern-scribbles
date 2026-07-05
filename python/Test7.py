print("Alphabet increase order")
r=5
for i in range(1,r+1):
    for j in range(i):
        print(chr(65+j), end=" ")
    print()

print("alphabet decrease order inverted pattern")
for a in range(r,0,-1):
    for b in range(a):
        print(chr(65+b), end=" ")
    print()
    
print("alphabet triangle pattern in E D C B A")
for c in range(1,r+1):
    for d in range(c):
        print(chr(69-d),end=" ")
    print()

print("alphabet inverted triangle A B C D E in decrease order")
for e in range(r):
    for f in range(e,r):
        print(chr(65+f),end=" ")
    print()