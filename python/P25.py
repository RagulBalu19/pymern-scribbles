# Alphabet Palindrome Pyramid
row = 5
for a in range(1,row+1):
    for space in range(row - a):
        print(" ", end = "")
    for b in range(1,a+1):
        print(chr(64+b), end = "")
    for b in range(a - 1, 0, -1):
        print(chr(64+b), end = "")
    print()