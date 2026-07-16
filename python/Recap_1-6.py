# golden rule for pattern:
# 1. How many rows?
# 2. How many parts are in each row?
# 3. what changes every row?

# Simple Formula for patterns:
# spaces = Number of rows - i;
# Stars = 2*i-1;

# UNIVERSAL PATTERN FORMULA
'''
1.

How many rows?

↓

Outer Loop


2.

How many parts?

↓

Spaces

Stars

Numbers

Letters


3.

Solid or Hollow?

↓

Boundary


4.

Increasing or Decreasing?

↓

Outer Loop


5.

Can I split it?

↓

Upper

+

Lower

OR

Increasing

+

Decreasing

'''

'''
    *
   ***
  *****
 *******
*********
'''
print("\nPyramid pattern")
rows = 5
for i in range(1,rows+1):
    for space in range(rows-i):
        print(" ", end = "")
    for j in range(i):
        print("*", end = " ")
    print()
    
'''
*
**
***
****
'''
print("\nleft triangle")
for k in range(1,rows+1):
    for l in range(k):
        print("*",end=" ")
    print()
    
'''
1
12
123
1234
12345
'''
print("\nleft triangle Number Pattern")
for a in range(1,rows+1):
    for b in range(1,a+1):
        print(b,end=" ")
    print()
        
'''
1
22
333
4444
55555
'''
print("\nleft triangle same number pattern")
for c in range(1,rows+1):
    for d in range(c):
        print(c, end=" ")
    print()
    
'''
54321
5432
543
54
5

keep the starting number fixed 
rows-f
'''
print("\ninverted left triangle in decreasing number pattern")
for e in range(rows,0,-1):
    for f in range(e):
        print(rows-f,end=" ")
    print()
    
'''
5
54
543
5432
54321
'''
print("\nleft triangle in Decreasing number pattern")
for g in range(1,rows+1):
    for h in range(g):
        print(rows-h,end="")
    print()
    
'''
ABCDE
ABCD
ABC
AB
A
'''
print("\nInverted Alphabetic left triangle")
for m in range(rows,0,-1):
    for n in range(m):
        print(chr(65+n), end="")
    print()
    
'''
123454321
'''
print("\nPalindrome triangle pattern")
for o in range(1,rows+1):
    for p in range(1,o+1):
        print(p,end="")
    for p in range(o-1,0,-1):
        print(p,end="")
    print()
    
'''
    *
   * *
  *   *
 *     *
*********
'''
print("\nHallow Triangle")
for q in range(1,rows+1):
    for s in range(rows-q):
        print(" ", end="")
    for r in range(2*q-1):
        if r==0 or r==2*q-2 or q==rows:
            print("*",end="")
        else:
            print(" ",end="")
    print()
    
'''
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
'''
print("\nDiamond pattern")
for s in range(1,rows+1):
    for sp in range(rows-s):
        print(" ",end="")
    for t in range(2*s-1):
        print("*",end="")
    print()
for s in range(rows-1,0,-1):
    for sp in range(rows-s):
        print(" ",end="")
    for t in range(2*s-1):
        print("*",end="")
    print()
