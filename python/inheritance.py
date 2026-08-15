class father:
    h_c='white'
class mom:
    h_c='black'
    e_c='blue'
class child(father,mom):
    no_of_legs=2
child=child()
print(child.h_c)
print(child.e_c)
print(child.no_of_legs)