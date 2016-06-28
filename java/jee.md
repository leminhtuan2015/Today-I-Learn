#Java EE

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
