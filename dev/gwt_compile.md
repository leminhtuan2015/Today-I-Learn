#1. GWT tools
- gwt-dev.jar
  - com.google.gwt.dev.DevMode
  - com.google.gwt.dev.Compiler

#2. Create build.xml for ant 

##Step1: Create build.xml file.

```xml
  <?xml version="1.0"?>
  <project name="PROJECT_NAME" basedir="." default="gwt-compile">
  
  </project>
```

##Step2: Add a property for the GWT SDK directory.

```xml
  <!-- Configure path to GWT SDK -->
  <property name="gwt.sdk" location="_Path to GWT_SDK" />
```

##Step3: Add a property for a GWT tools class path.
```xml
  <path id="project.class.path">
    <pathelement location="war/WEB-INF/classes"/>
    <pathelement location="${gwt.sdk}/gwt-user.jar"/>
    <fileset dir="${gwt.sdk}" includes="gwt-dev*.jar"/>
      <!-- Add any additional non-server libs (such as JUnit) -->
    <fileset dir="war/WEB-INF/lib" includes="**/*.jar"/>
  </path>
```

##Step4: Modify the “libs” ant target so that the required jar files are copied to WEB-INF/lib.
```xml
  <target name="libs" description="Copy libs to WEB-INF/lib">
    <mkdir dir="war/WEB-INF/lib" />
    <copy todir="war/WEB-INF/lib" file="${gwt.sdk}/gwt-servlet.jar" />
  </target>
```

##Step5: Compile .java to .class file

```xml
  <target name="javac" depends="libs" description="Compile java source">
    <mkdir dir="war/WEB-INF/classes"/>
    <javac srcdir="src" includes="**" encoding="utf-8"
        destdir="war/WEB-INF/classes"
        source="1.5" target="1.5" nowarn="true"
        debug="true" debuglevel="lines,vars,source">
      <classpath refid="project.class.path"/>
    </javac>
    <copy todir="war/WEB-INF/classes">
      <fileset dir="src" excludes="**/*.java"/>
    </copy>
  </target>
```

##Step6: Modify the “devmode” ant target to use the App Engine development server instead of the servlet container which comes with GWT.
```xml
  <target name="devmode" depends="javac" description="Run development mode"">
    <java failonerror="true" fork="true" classname="com.google.gwt.dev.DevMode"">
      <classpath>
        <pathelement location="src"/>
        <path refid="project.class.path"/>
      </classpath>
      <jvmarg value="-Xmx256M"/>
      <arg value="-startupUrl"/>
      <arg value="StockWatcher.html"/>
      <!-- Additional arguments like -style PRETTY or -logLevel DEBUG -->
      <arg value="-server"/>
      <arg value="com.google.appengine.tools.development.gwt.AppEngineLauncher"/>
      <arg value="com.google.gwt.sample.stockwatcher.StockWatcher"/>
    </java>
  </target>
```

##Step 7: Compile Java to JavaScript

```xml
    <!-- Invoke the GWT compiler to create the Javascript for us -->
    <target name="gwt-compile" depends="compile">
        <java failonerror="true" fork="true" classname="com.google.gwt.dev.Compiler">
            <classpath>
                <!-- src dir is added to ensure the module.xml file(s) are on the classpath -->
                <pathelement location="${src.dir}"/>
                <pathelement location="${build.dir}"/>
                <path refid="project.classpath"/>
            </classpath>
            <jvmarg value="-Xmx1024m"/>
            <jvmarg value="-Dfile.encoding=UTF-8"/>
            <!--<arg value="-compileReport"/>-->
            <arg value="${gwt.audiostories}"/>
        </java>
    </target>
```


#NOTICE

```xml
<target name="devmode" depends="javac" description="Run development mode">
  <java failonerror="true" fork="true" classname="com.google.gwt.dev.DevMode">
.......
.......
  </java>
</target>
```
**THE SAME**
```java
java -Xmx256M -cp "src;war/WEB-INF/classes;\gwt-2.0.0\gwt-user.jar;\gwt-2.0.0\gwt-dev.jar"
  com.google.gwt.dev.DevMode -startupUrl Hello.html com.google.gwt.sample.hello.Hello
```



#=>

build.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project name="gae_gwt" basedir="." default="gwt-compile">

	<property name="gwt.sdk"
		location="/Users/leminhtuan/Documents/GAE/GWT/SDK/gwt-2.7.0" />
	<property name="gae.sdk"
		location="/Users/leminhtuan/Documents/GAE/SDK/Java/appengine-java-sdk-1.9.38" />
	<property name="gwt.args" value="" />

	<path id="project.classpath">
		<pathelement location="war/WEB-INF/classes" />
		<pathelement location="${gwt.sdk}/gwt-user.jar" />
		<pathelement location="${gwt.sdk}/gwt-dev.jar" />
		<pathelement location="${gwt.sdk}/gwt-codeserver.jar" />
		<fileset dir="war/WEB-INF/lib" includes="*.jar" />
	</path>

	<!-- Invoke the GWT compiler to create the Javascript for us -->
	<target name="prepare">
		<mkdir dir="build" />
	</target>

	<target name="clean">
		<delete dir="build" />
	</target>

	<!-- Compile the java source code using javac -->
	<target name="compile" depends="prepare">
		<javac srcdir="src" destdir="build">
			<classpath refid="project.classpath" />
		</javac>
	</target>

	<target name="gwt-compile" depends="compile">
		<java failonerror="true" fork="true" classname="com.google.gwt.dev.Compiler">
			<classpath>
				<!-- src dir is added to ensure the module.xml file(s) are on the classpath -->
				<pathelement location="src" />
				<pathelement location="build" />
				<pathelement location="${gwt.sdk}/gwt-codeserver.jar"/>
				<path refid="project.classpath" />
			</classpath>
			<jvmarg value="-Xmx1024m" />
			<jvmarg value="-Dfile.encoding=UTF-8" />
			<!--<arg value="-compileReport"/> -->
			<arg value="com.lmt.gae_gwt" />
		</java>
	</target>


	<!-- DEV MODE -->
	<target name="libs" description="Copy libs to WEB-INF/lib">
		<mkdir dir="war/WEB-INF/lib" />
		<copy todir="war/WEB-INF/lib" file="${gwt.sdk}/gwt-servlet.jar" />
		<copy todir="war/WEB-INF/lib" file="${gwt.sdk}/gwt-servlet-deps.jar" />
		<!-- Add any additional server libs that need to be copied -->
	</target>

	<target name="javac" depends="libs" description="Compile java source to bytecode">
		<mkdir dir="war/WEB-INF/classes" />
		<javac srcdir="src" includes="**" encoding="utf-8" destdir="war/WEB-INF/classes"
			source="1.7" target="1.7" nowarn="true" debug="true" debuglevel="lines,vars,source">
			<classpath refid="project.classpath" />
		</javac>
		<copy todir="war/WEB-INF/classes">
			<fileset dir="src" excludes="**/*.java" />
		</copy>
	</target>

	<target name="devmode" depends="javac"
		description="Run development mode (pass -Dgwt.args=-nosuperDevMode to fallback to classic DevMode)">
		<java failonerror="true" fork="true" classname="com.google.gwt.dev.DevMode"
			maxmemory="1g">
			<classpath>
				<pathelement location="src" />
				<path refid="project.classpath" />
			</classpath>
			<arg value="-startupUrl" />
			<arg value="index.html" />
			<arg line="-war" />
			<arg value="war" />
			<!-- Additional arguments like -style PRETTY, -logLevel DEBUG or -nosuperDevMode -->
			<arg line="${gwt.args}" />
			<arg value="com.lmt.Gae_gwt" />
			<arg value="com.lmt.Gae_gwt" />
		</java>
	</target>

</project>

```
