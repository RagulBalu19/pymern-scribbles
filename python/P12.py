# Inverted full pyramid
row = 6
for i in range(row, 0, -1):
    for sp in range(row - i):
        print(" ", end="")
    for j in range(2 * i - 1):  # this line is used to get
        print("*", end="")
    print()


# for Inverted full pyramid we can use space formula is no.of.rows - i
# for full pyramid we can use space formula as no.of.rows - i - 1

# The most important formula for inverted pyramid is
# (sp)spaces = row - i
# (j)stars  = 2*i - 1