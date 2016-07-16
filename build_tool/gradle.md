## What is **Gradle** ?

- Like **Ant** or **Maven**, Gradle is a build tool.
- Gradle can build multiple languages such as :
  - Java
  - Python
  - JavaScript
  - Scala
  - C++
  - Android
  - IOS
  - Hadoop
  - ......

- Gradle is the official build system for Android.

## Gradle HelloWorld

- Step 1: Install **gradle** on system.

- Step 2: Create  a file calles **build.gradle**
  ```
    task helloWorld << { 
      println 'hello, world'
    }
  ```
- Step 3:
  ```
    gradle -q helloworld
    
    # hello, world
  ```
  
## Gradle Building A Java Program.

- Step 1: Create  a file calles **build.gradle**
  ```
    #This file is called build.gradle
    apply plugin: 'java'
  ```
  
- Step 2: Create folders source code.
  - A Java project source code must be placed at : **src/main/java**

  ```
  mkdir -p src/main/java/com/leminhtuan
  ```

- Step 3: Create source Java code.

  - src/main/java/com/leminhtuan/HelloWorld.java

  ```
    public class HelloWorld {
      public static void main(String args[]) {
        System.out.println("hello, world"); 
      }
    }
  ```
  
- Step 4: Build project

  ```
    gradle build
    
    # The results (Class file) will be generated at build/ folder.
  ```
  
- Step 5: Run project
  ```
    $ java -cp build/classes/main/ com.leminhtuan.HelloWorld
    
    hello, world
  ```



