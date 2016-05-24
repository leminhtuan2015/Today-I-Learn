#1 Apache Ant.

##1.1 Overview.

  - https://ant.apache.org/manual/index.html

  - Apache Ant is a Java based build tool from Apache Software Foundation.

  - It is a build and deployment tool that can be executed from the command line.

  - **Ant** is a build tool the same:

    - Maven (Java)
    - Gradle (Android)
    - SBT (Scala)
    - Bundle (Ruby)
    - Npm (Javascript)
    - Activator (Php)

## 1.2 Why we need a build tool such as ant?
  - When develop a project dev spend much of time doing tasks like build and deployment that include:
    - Compiling the code
    - Packaging the binaries
    - Deploying the binaries to the test server
    - Testing the changes
    - Copying the code from one location to another

  - To automate and simplify the above tasks, Apache Ant is useful.

## 1.3 Ant tutorial

### build.xml

  - https://ant.apache.org/manual/tutorial-HelloWorldWithAnt.html

  - http://www.tutorialspoint.com/ant/ant_build_files.htm

  - Ant's build file is written in XML.

  - Ant's build file, called **build.xml** is located at base directory of the project.

### Demo

```sh
mkdir ant_demo
cd ant_demo
vim build.xml      // (:put+) to copy code to file
ant [target_name]
// ant (will run the default target)
```

**File build.xml***

```xml
<?xml version="1.0"?>
   <project name="Hello World Project" default="info">

   <target name="info">
      <echo>Hello World - Welcome to Apache Ant!</echo>
   </target>

</project>
```

  - build.xml

    - **name:** The Name of the project. (Optional)

    - **default:** The default target for the build script (Required)

    - **basedir:** The base directory (or) the root folder for the project. (Optional)

  - A target is a collection of tasks that you want to run as one unit

### Ant property
  - We can define a variable by <property> tag : <property name="sitename" value="www.tutorialspoint.com"/>

=> We have a variable name **sitename** with the value is **www.tutorialspoint.com**

```xml
<?xml version="1.0"?>
<project name="Hello World Project" default="info">

   <property name="sitename" value="www.tutorialspoint.com"/>
   <target name="info">
      <echo>Apache Ant version is ${ant.version} - You are at ${sitename} </echo>
   </target>

</project>
```

### Ant - Data Types

  - Path: The **path** data type is commonly used to represent a class-path

  - Fileset: The **fileset** data types represents a collection of files. It is used as a filter to include or exclude files that match a particular pattern

### Summarize
  - Ant is just a build tood, ant is just a collection of command for build, deploy....for Java project

# Ant with Ivy.

## Difference between **Ant** and **Ivy**

  - **Ant** : Just a build tool for Java project, it can not manage the dependentcies(lib)
  
  - **Ivy** is a tool allow you to manage the dependencies for Java project, Ivy can not build project, it just manage the dependencies

## Ivy
### what is Ivy?
  - Apache Ivy is a transitive dependency manager. It is a sub-project of the Apache Ant project
  
  - Ivy downloads resources from an cloud repository to your local machine.
  
  - Every Java library is located at http://mvnrepository.com/  that like every Ruby lib is locate at https://rubygems.org/
  
  - If **bundle** of Ruby download from  https://rubygems.org/ to your local, **ivy** of Apache will  download from http://mvnrepository.com/ to your local.
  
### How to use Ivy

- step 1: Download Ivy binary
- step 2: Extract
- step 3: Copy ivy-xxx.jar to /usr/share/ant/lib  (http://superuser.com/questions/452192/how-to-install-ant-ivy)
- step 4: Create ivy.xml http://ant.apache.org/ivy/history/latest-milestone/tutorial/start.html


```xml
<ivy-module version="2.0">
    <info organisation="org.apache" module="hello-ivy"/>
    <dependencies>
        <dependency org="commons-lang" name="commons-lang" rev="2.0"/>
        <dependency org="commons-cli" name="commons-cli" rev="1.0"/>
    </dependencies>
</ivy-module>
```

- step 5: create build.xml for ant build

```xml
<project xmlns:ivy="antlib:org.apache.ivy.ant" name="hello-ivy" default="resolve">
    <!-- ================================= 
          target: resolve              
         ================================= -->
    <target name="resolve" description="--> retrieve dependencies with ivy">
        <ivy:retrieve />
    </target>
</project>
```

- step 6: 

```sh
$ ant resolve
```
  

  
