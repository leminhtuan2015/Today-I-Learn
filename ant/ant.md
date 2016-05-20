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

![helloant.png](https://bitbucket.org/repo/LBgyxe/images/3514926731-helloant.png)
