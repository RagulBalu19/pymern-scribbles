print("2*6 Pattern")
for row in range(2):
    for col in range(6):
        print("*", end=" ")
    print()
    
print("6*4 pattern")
for i in range(6):
    for j in range(4):
        print("*", end=" ")
    print()

print("8col Pattern")
for k in range(8):
    print("*", end=" ")


print("\n custom pattern from user input")
n1=int(input("Enter a row:"))
m1=int(input("Enter a Column:"))
for l in range(n1):
    for m in range(m1):
        print("*",end=" ")
    print()
    
