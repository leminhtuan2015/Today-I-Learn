### Python OOP and FP
### Python Programing Language
### Python Features
### Functions are first class objects in Python

------------------------------------------------------------------------

### Python OOP and FP

* Python support both Object Oriented Programing and Functional Programming

* **main.py**

```python
import person
import my_function

p1 = person.Person("John", 34)

print(p1.name)
print(p1.age)
print("-----------")

p2 = p1
p2.name = "haha"
p2.age = 99

print(p1.name)
print(p1.age)
print("-----------")

print("x: ", my_function.x)
my_function.change_x()
print("x: ", my_function.x)
my_function.change_x()
print("x: ", my_function.x)



John
34
-----------
haha
99
-----------
x:  1
x changed to:  2
x:  1
x changed to:  2
x:  1
```


* **my_function.py**

```python
x = 1

def change_x():
    x = 2
    print("x changed to: ", x)
```

* **person.py**

```python
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

```



### Python Programing Language

* Python is a **high-level**, **interpreted**, **interactive** and **object-oriented scripting** language
  * Python is **Interpreted** : Python is processed at runtime by the interpreter. You do not need to compile your program before executing it. This is similar to PERL and PHP.
  * Python is **Interactive** : You can actually sit at a Python prompt and interact with the interpreter directly to write your programs.
  * Python is **Object-Oriented** : Python supports Object-Oriented style or technique of programming that encapsulates code within objects.
  * Python is a **Beginner's Language** : Python is a great language for the beginner-level programmers and supports the development of a wide range of applications from simple text processing to WWW browsers to games.
  
### Python Features

* It supports **functional programming(FP)** and **structured programming** methods as well as **Object-oriented OOP**.
* It can be used as a **scripting language** or can be **compiled to byte-code** for building large applications.
* It provides very high-level **dynamic data types** and supports dynamic type checking.
* It supports **automatic garbage collection**.
* It can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java.

### Functions are first class objects in Python
* Can use functions as function parameters
