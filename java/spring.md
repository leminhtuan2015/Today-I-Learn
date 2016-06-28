
#Spring MVC

- http://krams915.blogspot.com/2010/12/spring-3-mvc-using-modelattribute-in.html

##1. Overview

- Spring is the framework for Java, Support create MVC web app
- http://spring.io/

##2. Create Java web - Spring Project.

  - Step 1: Create Java web app (Java EE http://docs.oracle.com/javaee/6/tutorial/doc/geysj.html)
    - Create a Java web app by Maven/ Ant / Eclipse ........
    
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
  
  - Step 4: Enjoin coding in **src** (All your .java in src/ will be compiled to .class files and put in war/WEB-INF/classes)
  

###====>>>> WEB container (tomcat, jetty) just execute the war file.

##3. Structure - Configtion

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
      
      
####web.xml

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
