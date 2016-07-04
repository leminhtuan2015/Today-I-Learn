
#Spring MVC

- http://krams915.blogspot.com/2010/12/spring-3-mvc-using-modelattribute-in.html

##1. Overview
- http://spring.io/
- http://docs.spring.io/spring/docs/current/spring-framework-reference/
- http://docs.spring.io/spring/docs/current/spring-framework-reference/pdf/spring-framework-reference.pdf
- Spring is the framework for Java, Support create MVC web app
- The Spring Framework is a Java platform that provides comprehensive infrastructure support for
developing Java applications. Spring handles the infrastructure so you can focus on your application.

- The Web layer consists of the spring-web, spring-webmvc, spring-websocket, and springwebmvc-portlet
modules.
- The spring-web module provides basic web-oriented integration features such as multipart file upload
functionality and the initialization of the IoC container using Servlet listeners and a web-oriented
application context.

##2. Create Java web - Spring Project.
  - http://docs.spring.io/spring/docs/current/spring-framework-reference/html/mvc.html
  - Step 1: Create Java web app (Java EE http://docs.oracle.com/javaee/6/tutorial/doc/geysj.html)
  - The spring-webmvc module (also known as the Web-Servlet module) contains Spring’s modelview-controller
(MVC) and REST Web Services implementation for web applications

### Create a Java web app by Maven/ Ant / Eclipse ........

                                       ___src/
                                      |
                                      |    
                                      |___WAR(web archive)
                                                  |
                                                  |
                           __________________________________________
                           |                                        |
                           |                                        |
                           |                                        |
                        WEB-INF                          Static/Resource/JSP
                           |
                           |
          _________________|__________________
          |                |                  |
          |                |                  |
          |                |                  |
      web.xml             lib             classes


  - Step 2: User maven/ gradle/ ant dowload lib from Maven repository : https://mvnrepository.com/tags/spring
    - https://mvnrepository.com/artifact/org.springframework/spring-context-support/4.3.0.RELEASE
    - https://mvnrepository.com/artifact/org.springframework/spring-core/4.3.0.RELEASE
    - ........
    - ........
  - Step 3: Copy Spring libs in war/WEB-INF/lib
  - step 4: Config web.xml
  - step 5: Config spring-svelet.xml
  - Step 6: Enjoin coding in **src** (All your .java in src/ will be compiled to .class files and put in war/WEB-INF/classes)
  

###====>>>> WEB container (tomcat, jetty) just execute the war file.

##3. Java WEB Structure

                                       ___src/
                                      |
                                      |    
                                      |___WAR(web archive)
                                                  |
                                                  |
                           __________________________________________
                           |                                        |
                           |                                        |
                           |                                        |
                        WEB-INF                          Static/Resource/JSP
                           |
                           |
          _________________|__________________
          |                |                  |
          |                |                  |
          |                |                  |
      web.xml             lib             classes
      
      
##4. Java web app Spring configtion

###Create web.xml

- The web.xml file contains several elements that are required for a Facelets application

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://java.sun.com/xml/ns/javaee 
              http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"
         version="2.5"
         xmlns="http://java.sun.com/xml/ns/javaee">

  <!-- Servlets --> 
	
<!-- SPRING -->
   <servlet>
        <servlet-name>spring</servlet-name>
        <servlet-class>
            org.springframework.web.servlet.DispatcherServlet
        </servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>spring</servlet-name>
        <url-pattern>/hello/*</url-pattern>
        <!--<url-pattern>/</url-pattern>-->
    </servlet-mapping>

    <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>/WEB-INF/spring-servlet.xml</param-value>
    </context-param>

    <listener>
        <listener-class>
	    org.springframework.web.context.ContextLoaderListener
        </listener-class>
    </listener>
    
      <!-- Default page to serve -->
  <welcome-file-list>
    <welcome-file>index.html</welcome-file>
  </welcome-file-list>

</web-app>
```

###Create war/WEB-INF/spring-servlet.xml

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:context="http://www.springframework.org/schema/context"
    xmlns:mvc="http://www.springframework.org/schema/mvc" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="
	    http://www.springframework.org/schema/beans 
	    http://www.springframework.org/schema/beans/spring-beans-4.0.xsd
	    http://www.springframework.org/schema/context 
	    http://www.springframework.org/schema/context/spring-context-4.0.xsd
	    http://www.springframework.org/schema/mvc
	    http://www.springframework.org/schema/mvc/spring-mvc-4.0.xsd ">

    <!-- Point to the controllers of web app (Define the controller layer)-->
    <context:component-scan base-package="com.koolsoft.audiostories.server.spring.controllers" />
    <mvc:annotation-driven />
    <mvc:default-servlet-handler />

    <!-- Define the view layer-->
    <bean
       class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix">
            <value>/jsp/</value>
        </property>
        <property name="suffix">
            <value>.jsp</value>
        </property>
    </bean>
    
    <mvc:resources mapping="/resources/**" location="/resources/" />
    <mvc:resources mapping="/audiostories/**" location="/audiostories/" />
    <mvc:resources mapping="/components/**" location="/components/" />
    <mvc:resources mapping="/css/**" location="/css/" />
    <mvc:resources mapping="/js/**" location="/js/" />
    <mvc:resources mapping="/rollups/**" location="/rollups/" />
    <mvc:resources mapping="/images/**" location="/images/" />
    <mvc:annotation-driven />
</beans>
```
# Dependency Management

|GroupId               |ArtifactId     |Description                                                                     |
|----------------------|---------------|--------------------------------------------------------------------------------|
|org.springframework   |pring-aop      |Proxy-based AOP support								|
|org.springframework   |spring-context |Application context runtime,including scheduling an				|
|org.springframework   |spring-core    |Core utilities, used by many other Spring modules				|
|org.springframework   |spring-jdbc    |JDBC support package, including DataSource setup and JDBC access support	|
|org.springframework   |spring-orm     |Object/Relational Mapping,including JPA and Hibernate support			|
|org.springframework   |spring-web     |Web support packages, including client and web remoting				|
|org.springframework   |spring-webmvc  |REST Web Services and model-view-controller implementation for web applications |

## Spring MVC – @RequestBody and @ResponseBody
 - Source: spring-web.jar
   - org.springframework.web.bind.annotation.RequestBody
   - org.springframework.web.bind.annotation.ResponseBody

 - Spring can convert the incoming **JSON** to **Java Object** and **vice versa**
 
 - JSON object:

```json
{ "id" : "1", "name" : "Fudd" }
``` 

 - Java object:

```java
public class Person{
    private String id;
    private String name;
    // + getters, setters
}
```

 - Spring controller:

```
@RequestMapping("/test")
public @ResponseBody Person getPerson(@RequestBody Person person, ModelMap model){
    return new Person("1", person.getName() + "Hello");
}
```

- Step 1:
  Client send JSON object to Spring controller:
```js
var person = {"id" : "1", "name": "tuan"}  // JSON OBJECT

// SEND JSON OBJECT TO SPRING CONTROLLER
$.ajax({
	type : 'POST',
	url : '/test',
	dataType : 'json',
	data : JSON.stringify(person),
	contentType : 'application/json',
	processData : false,
	success : function(data) {
	  // DATA IS JSON OBJECT
	},
	error : function(e) {
	}
});
```

- Step 2: Spring controller will convert **JSON object** to **Java object** with **@RequestBody**

- Step 3: Spring controller will convert **Java object** to ***JSON object* with  **@ResponseBody**

## What if the properties of **JSON object** and **Java object** DO NOT match with each other

###`JSON OBJECT AND JAVA OBJECT HAVE TO HAVE THE SAME NAME IF WANT TO MATCH WITH EACH OTHER`

- For example: 

```json
<!--JSON object-->
var person = {"id": 1, "age": 25, "sex": "male"}
```

```java
public class Person{
    private String id;
    private String name;
    // + getters, setters
}
```

=> 
```
// After convert form JSON to JAVA
Person(id = 1, name = null)
```

=> JSON have 3 properties **(id, age, sex)**, Java have 2 properties **(id, name)**

When convert between JSON to JAVA, Spring will match the properties with **THE SAME ** name to assign the value.

## Spring MVC - @RequestParam vs @PathVariable
  - @PathVariable is to obtain some placeholder from the uri
  - @RequestParam is to obtain an parameter
  
Step 1: Request to URl Assume this Url 

**http://localhost:8080/MyApp/user/1234/invoices?type=candy**

```java
@RequestMapping(value="/users/{userId}/invoices", method = RequestMethod.GET)
public List<Invoice> listUsersInvoices(@PathVariable("userId") int uId, @RequestParam("type") String) {
  // uid = 1234
  // type = candy
  ...
  ...
}
```
 
 
 
 
 
 
 
 
 
 
 
 





