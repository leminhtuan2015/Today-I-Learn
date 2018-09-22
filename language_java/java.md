# 1. Overview

## What is the difference between `classpath` in Java and `build path` in eclipse?

#### When run/compile a Java project use IDE like Eclipse we need to add libraries (.jar files) to `build path` of Eclipse

```
- Right click on .jar file

- Select add to build path
```


#### When run/compile a Java project by console (terminal) like `java/ant/maven` we need point out where is class path (For Java Virtual Machine can see where is classpath)

```sh
$ java -cp /path/to/libs   org.mypackage.HelloWorld             // Linux

or

$ java -classpath  /path/to/libs   org.mypackage.HelloWorld     // Windown
```

## Detail `classpath` vs `build path`

### classpath
  - **classpath**  => Just for Java
    
  - classpath point to a folder where all .jar files those need to run/compile Java project
    
  - **The Java Virtual Machine** will look at the **classpath** to find out the dependencies of project.
  
  - Each time we run/compile a Java project by console **java/ant/maven** we need to point out where is **classpath**
  
```sh
// First way
// In .bashrc file add the below line
export CLASSPATH=/home/myaccount/myproject/lib/CoolFramework.jar:/home/myaccount/myproject/output/

```

```sh
//Second way
// When run Java project by java
# java -cp "/home/myaccount/myproject/lib/CoolFramework.jar:/home/myaccount/myproject/output/"  MyMainClass

```

```
// When use ant to run/compile a Java project we need to point out where is classpath
<path id="project.classpath">
		<fileset dir="${lib.dir}">
			<include name="**/*.jar" />
		</fileset>
		<fileset dir="${lib.dir}" includes="*.jar" />
		<pathelement location="war/WEB-INF/classes" />
		<pathelement location="${gwt.sdk}/gwt-user.jar" />
		<pathelement location="${gwt.sdk}/gwt-dev.jar" />
	</path>
	
	<target name="javac" depends="libs" description="Compile java source to bytecode">
		<javac srcdir="src" includes="**" encoding="utf-8" destdir="war/WEB-INF/classes" source="1.7" target="1.7" nowarn="true" debug="true" debuglevel="lines,vars,source">
			<classpath refid="project.classpath" />
		</javac>
	</target>
```
    

### build path

  - **build path**  => Just For Eclipse
    
  - The Build Path is just an Eclipse thing.
    
  - It's where Eclipse finds the classes, .jar files needed to compile and run the classes of the project.
    
  - The build path is used when Eclipse is running/compiling a Java program.
    
  - Eclipse automatically create a **.classpath** file to define the **build path**.
    
  - When we add a **.jar** file to build path, Eclipse automaticlly add the below line to **.classpath** file.

```xml
<classpathentry kind="lib" path="lib/objectify-5.0.jar"/>
```

```xml
 <?xml version="1.0" encoding="UTF-8"?> 
   <classpath> 
     <classpathentry kind="src" path="src"/> 
     <classpathentry kind="src" output="test-classes" path="test"/> 
     <classpathentry kind="con" path="com.google.appengine.eclipse.core.GAE_CONT    AINER"/> 
     <classpathentry kind="con" path="com.google.gwt.eclipse.core.GWT_CONTAINER"    /> 
     <classpathentry kind="con" path="org.eclipse.jdt.launching.JRE_CONTAINER"/
     
     <classpathentry kind="lib" path="lib/mgwt-2.0.0.jar"/> 
     <classpathentry kind="lib" path="lib/gwtphonegap-3.5.0.0.jar"/> 
    <classpathentry kind="lib" path="lib/objectify-5.0.jar"/> 
    
    <classpathentry kind="output" path="war/WEB-INF/classes"/> 
  </classpath>
```
    
  - **Java Web Application**
    - In the case of a webapp, the webapp runs inside a Java EE web container, all the file in WEB-INF/classes are automatically included in the classpath of the web app
