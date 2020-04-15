### Python Modules
### Python Packages (__init__.py)

---------------------------------------------------------------------------------------------

### Python Modules

* A module is a file containing Python definitions and statements (functions and variables).
* The file name is the module name with the suffix .py appended.
* Within a module, the module’s name (as a string) is available as the value of the global variable `__name__`.
* For instance, create abc_module.py:

```python
#  abc_module module, create file abc_module.py

def hello(name):
    print("Hello " + name)
    
def hello1(name):
    print("Hello 1 " + name)
```

```sh
#  Open the Terminal

cd path/to/the/folder/contain/abc_module.py
python3

import abc_module
from abc_module import hello1

abc_module.hello("TuanLe")
# result: Hello TuanLe

hello1("TuanLe 01") # no need to call abc_module.hello1

abc_module.__name__
# result: abc_module

```


### Python Packages (__init__.py)
* Files named `__init__.py` are used to **mark directories on disk as Python package directories**

* Python defines two types of packages: 
  * Regular packages
  * Namespace packages
  
* Regular packages are traditional packages as they existed in Python 3.2 and earlier.
* A regular package is typically implemented as a directory containing an `__init__.py` file.
* When a regular package is imported, this `__init__.py` file is implicitly executed, and the objects it defines are bound to names in the package’s namespace.
* The `__init__.py` file can contain the same Python code that any other module can contain, and Python will add some additional attributes to the module when it is imported.
