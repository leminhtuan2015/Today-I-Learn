### Documents
### Programming paradigm (Coding style)
### OOP vs FP
### OOP Stateless/Stateful Class
### OOP Stateless/Stateful Class = React Native Stateless/Stateful Component

--------------

### Documents
  - http://www.codenewbie.org/blogs/object-oriented-programming-vs-functional-programming

### Programming paradigm (Coding style) [IMPORTANT]
  - ***Dù là OOP hay FB thì mục đích cũng chỉ là tạo ra phần mềm tốt nhất, dễ debug, dễ mở rộng*** 
  - (Both OOP and FP have the shared goal of creating understandable, flexible programs that are free of bugs. But they have two different approaches for how to best create those programs.)
  - ***Programming paradigm có trước và các ngôn ngữ lập trình có sau, Programming paradigms là bản thiết kế của các ngôn ngữ lập trình.***
  - Dev có thể code lẫn lộn FP và OOP trong cùng 1 project, nhưng mục đích cuối cùng của FP hay OOP vẫn là làm code giảm bugs hơn.
  - Programming paradigm (Coding style) là lý thuyết về lập trình, một tập hợp các quy định và tính năng của ngôn ngữ lập trình.
  - Programming paradigm sinh ra để dev hạn chế tối đa bug trong quá trình coding, dễ mở rộng và maintain app project.
  - ***Functional*** code ***co-exists*** very well with code written in other styles (for example OOP).
  - Programming paradigms are a way to classify programming languages based on the features of various programming languages
  - One programming language may have many programming paradigm (1 - n)
  - A multi-paradigm programming language is a programming language that supports more than one programming paradigm, one language may have many paradigm is to allow programmers to use the most suitable programming style
  - In programing we have many ***Programming paradigm (Coding style)*** , Common programming paradigms such as
    - OOP: object-oriented which groups code together with the state the code modifies
    - FP: functional which disallows side effects
    - IP: imperative which allows side effects
    - DP: declarative which does not state the order in which operations execute
    
### OOP vs FP
  - **Functional programming** is a form of **declarative programming**
  - **Object-oriented programming** primarily support **imperative (procedural) programming**
  - Object-oriented programming (OOP) languages such as C#, Visual Basic, C++, and Java, were designed to primarily support imperative (procedural) programming
  
  - The functional programming paradigm was explicitly created to support a **pure functional** approach to problem solving.
  
  - **imperative programming (OOP)**, a developer writes code that describes in exacting detail the steps that the computer must take to accomplish the goal. This is sometimes referred to as algorithmic programming
  - **functional programming (FP)** involves composing the problem as a set of functions to be executed. You define carefully the input to each function, and what each function returns.
  - Although most languages were designed to support a specific programming paradigm, many general languages are flexible enough to support multiple paradigms
    - Such as : Javascript, Scala, Swift support both OOP and FP
  - For example, most languages that contain **function pointers** can be used to credibly support **functional programming**
  
  ![](https://github.com/leminhtuan2015/Wiki/blob/master/images/oop_fp.png)



### OOP Stateless/Stateful Class

#### OOP Stateless Class

* **OOP Stateless Class** is avoid **side effect**
* Any change of instance or class field values is a **side effect**
* **Stateless Class** if the class/object doesn't have any instance fields
* Also it can be stateless if it has some fields, but their values are known and don't change.
* **OOP Stateless Class** = **Functional Programing** 

```java

class Stateless {
    void test() {
        System.out.println("Test!");
    }
}

class Stateless {
    //No static modifier because we're talking about the object itself
    final String TEST = "Test!";

    void test() {
        System.out.println(TEST);
    }
}

```

#### OOP Statefull Class

* Just normal Class have instance or class field values


### OOP Stateless/Stateful Class = React Native Stateless/Stateful Component

* **OOP Stateless Class** is the same **React Native Stateless Component**
  * OOP Stateless Class => 
      * `Do not` have property or just only **final** properties
  * React Native Stateless Component => 
      * `Do not` have **state (state in RN is private property)**
      * Always have **props (props in React Native is public final)** 
  
* **OOP Stateful Class** is the same **React Native Stateful Component**
  * OOP Stateful Class => 
      * Have properties
  * React Native Stateful Component =>
      * Have **state (state in RN is private property)**
      * Always have **props (props in React Native is public final property)** 

  




























