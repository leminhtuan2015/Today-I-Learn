## MVN file .pom

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                      http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	
	<groupId>org.koolsoft.intro</groupId>
	<artifactId>intro</artifactId>
	<version>1.0</version>
	
	<build> 
	  <plugins> 
	  </plugins> 
	</build> 
  
	<dependencies>  
		<!-- https://mvnrepository.com/artifact/aopalliance/aopalliance -->
		<dependency>
		    <groupId>aopalliance</groupId>
		    <artifactId>aopalliance</artifactId>
		    <version>1.0</version>
		</dependency>
		
		<!-- https://mvnrepository.com/artifact/commons-logging/commons-logging -->
		<dependency>
		    <groupId>commons-logging</groupId>
		    <artifactId>commons-logging</artifactId>
		    <version>1.2</version>
		</dependency>
	</dependencies>
</project>
```

## MVN for manager dependencies

```sh
mvn dependency:resolve
//OR
mvn clean install
```

## Copy dependencies to the directory

- All the dependencies will be download at **target/dependency**

```
  mvn dependency:copy-dependencies
  
  //OR
  
  mvn dependency:copy-dependencies -DoutputDirectory=[OUTPUT_DIR]
```
