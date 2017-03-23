## Java EE

http://docs.oracle.com/javaee/6/tutorial/doc/giqsx.html#gkcaw

## WEB structure.
- In the Java EE architecture, a web module is the smallest deployable and usable unit of web resources
- A web module has a specific structure
The document root contains a subdirectory named WEB-INF, which can contain the following files and directories:
  - classes: A directory that contains server-side classes: servlets, enterprise bean class files, utility classes, and JavaBeans components

  - lib: A directory that contains JAR files that contain enterprise beans, and JAR archives of libraries called by server-side classes

  - Deployment descriptors, such as web.xml (the web application deployment descriptor) and ejb-jar.xml (an EJB deployment descriptor)
  
- A web module needs a web.xml file if it uses JavaServer Faces technology.

- A web module can be deployed as an unpacked file structure or can be packaged in a JAR file known as a Web Archive (WAR) file
  - JAR: Java Archive
  - WAR: Wew Archive

##Configuring Web Applications
####Mapping URLs to Web Components.

- When it receives a request, the web container must determine which web component should handle the request.
- The web container does so by mapping the URL path contained in the request to a web application and a web component
- A URL path contains the context root and, optionally, a URL pattern:
  - **http://host:port/context-root[/url-pattern]**

EX:
```
@WebServlet("/greeting")
public class GreetingServlet extends HttpServlet {
```

- This annotation indicates that the URL pattern /greeting follows the context root. Therefore, when the servlet is deployed locally, it is accessed with the following URL:

=> http://localhost:8080/hello2/greeting

# The diffrent betwween Java web (Compiled) and Ruby-PHP-Nodejs (Script Language Web)

  - The **Script languagle** will be execute the source at run time (Have no compile time).
  - The **Compiled languagle** will be compiled first, after that system will execute the ***conpiled code*

## Java web run time.

                                              WAR(web archive)
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
          
  - **web.xml** : URL mapping
  - **classes** : .java compiled to .class and placed at classes folder  (THE MAPPING FORM **src** to the compiled file), 
    - **classes** = **src + compiled** 
  - *lib***     : contain all dependency for .class file
    - lib contain .jar (Java archive) files, jar is a collection of .class file.
  - **Static/Resource/JSP**: Contain css, js, html, jsp.....
          
  - At **RUN TIME** Java web container just only care and loooking for **war** folder. Web container (Tomcat, Jetty, Apache) DO NOT care about source (/src/*.java)
  - Web container (Tomcat, Jetty, Apache) Just only need .class file those compiled from .java file at war/WEB-INF/class
  


  #### =>>>>>>>> JAVA WEB MUST BE COMPILED BEFORE RUN **(classes = src + compile)**
