### Python Decorators

* A decorator is just a callable that **takes a function as an argument** and returns a replacement function. 

```sh
>>> def outer(some_func):
...     def inner():
...         print "before some_func"
...         ret = some_func() # 1
...         return ret + 1
...     return inner
>>> def foo():
...     return 1
>>> decorated = outer(foo) # 2
>>> decorated()
before some_func
2
```

### The @ symbol applies a decorator to a function

