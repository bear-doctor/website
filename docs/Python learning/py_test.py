class Person:
    __kind = 'human'
    def __init__(self, name, age, height, weight) -> None:
        self.name = name
        self.age = age
        self.height = height
        self.weight = weight
    def print_person(self):
        print(self.name, self.age, self.height, self.weight)

class student(Person):
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.data = []
        self.index = len(student)
    def __iter__(self):
        return self
    def __next__(self):
        



