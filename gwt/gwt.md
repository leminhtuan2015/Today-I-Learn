#1. Over view.
  - GWT is a development toolkit for building a high-performance web applications.

  - SDK
    - Java API libraries
    - compiler (Compile Java -> Javascript at client-side)
    - development server (Run web app)

  - GWT is NOT a web services as Rails, Express, (with SOAP, REST), it is just WEB Javascript contact with server by AJAX

  - If web traditional is "each request each html", with GWT, all page is one Javascript file, client just need only feach one file .js at first time

  - If web traditional need router to call controller so GWT need "ActivityMapper" to call controller (mapping action with controller).

  - All code at client-side will be compiled into Javascript (stand-alone JavaScript files), all logic of webpage is in Javascript.

  - All code at server-side will be runed as java servlet.

  - Client and Server interact by AJAX call SERVLET.

#2. Getting Started
##2.1. Overview, Project structure.
  - Server-side (Code java , run as servlet by JRE, run as Java bytecode on a server - Tomcat, Jboot, ....).

  - Client-side (Code Java will be compiled to JavaScript and run at browser).

##2.2. Learn more, How the SDK works
  - Client contact with server all by AJAX, you dont write AJAX by Javascript but you write AJAX by Java (RPC) and GWT compiler compiles Java into Javascript.

##2.3. Other interesting things
  - In the end, it’s just JavaScript :

    - With traditional web. All logic is handled on server-side (Client just have one work to do, **render** the html view) .
      But with GWT, all logic is at client-side (logic is in Javascript code).

    - Javascript at client-side => "build user interfaces and logic for the browser clien"

##2.4. Use the backend language of your choice:
  - You dont need to write backend (server-side) by Java, you can totaly use GWT client call RESTful Web services

    - http://stackoverflow.com/questions/4030969/how-to-call-restful-services-from-gwt

    - http://www.ibm.com/developerworks/web/library/wa-aj-gmt/

##2.5. Compilation.

  - All code of client-side will be compiled to Javascript, and run at web browser.

  - All code of server-side will be run as Java-bytecode on JRE and all server service is **java servlet**

#3. Tutorials
##3.1 Overview:
  - GWT, you can imagine that it just AJAX web app.

  - You can apply all your skill about OOP. Skills about Java Language, Skill about Java design partent to program you web app,
       but after that all you Java code will be compiler compiles into Javascript.

##3.2. Compilation:
  - Compiling all code at client-side (client package) from Java into JavaScript, GWT have its own compiler to compile Java into Javascript.

  - Server-side code (server package) run as Java-bytecode on JRE (server services is all Java servlet)

  - ant build

##3.3. Deploying the Application to a Web Server:
  - ant build (to build your web app to war file)

  - copy your war file to tomcat server (https://www.digitalocean.com/community/tutorials/how-to-install-apache-tomcat-7-on-ubuntu-14-04-via-apt-get)

##3.4 Ajax Communication: Introduction.

  - GWT web app totally do not need server-side, if client do not need to contact with server (that mean GWT can be a static web, just only HTML view)

  - All GWT applications run as JavaScript code in the end user’s web browser, Your application will need to communicate with a web server,
      sending requests and receiving updates. GWT JUST USE AJAX TO CONTACT WITH SERVER.

  - Each time traditional web applications request to the web server, they fetch a completely new HTML page, AJAX just request and receive only JSON data object.

  - ##NOTICE:
    - Traditional web applications: Get a html page each time they request

    - AJAX web (GWT):                    Only get JSON object (String data) each time they request

    - Your web app can be only need client-side (dont need server side if you done need to contact with server), You can remove all server-side (remove all servlet)
    if you web app dont need to update database,....

##3.5 Remote Procedure Calls (GWT RPC):

  - GWT RPC framework wrap AJAX request, if AJAX just only passing **JSON String** but RPC can pass **Java object** to server.

  - GWT RPC framework is a mechanism for passing **Java objects** to and from a server over standard HTTP.

  - GWT RPC framework make calls to Java servlets (GWT take care of low-level details like object serialization.)

  - Traditional WEB Service just pass **JSON, XML** (String data) but GWT can pass **Java object** by use GWT RPC framework

##3.6 Asynchronous:

  - Asynchronous calls are a core principle of AJAX (Asynchronous JavaScript And XML) development  => **RPC is 100% Asynchronous**

  - The JavaScript engines in web browsers are generally single-threade, Javascript have callback to handle every function.

  - You can Call lots of function in Javascript and wait for its own callback. => That will be not block you DOM at browser.

##3.7. Serializing Java objects:

  - Serialization is the process of packaging the contents of an object so that it can moved from one application to another application or pass throught HTTP.

  - Anytime you transfer an object over the network via GWT RPC, it must be serialized.

  - GWT RPC requires that all service method parameters is serializable and return types be serializable.

### A type is serializable and can be used in a service interface if one of the following is true:

  - All primitive types (int, char, boolean, etc.) and their wrapper objects are serializable by default.

  - An array of serializable types is serializable by extension.

### A class is serializable if it meets these three requirements:
  - It implements either Java Serializable or GWT IsSerializable interface, either directly, or because it derives from a superclass that does.

  - Its non-final, non-transient instance fields are themselves serializable
  - It has a default (zero argument) constructor with any access modifier (e.g. private Foo(){} will work)

##3.8 Cross-site Requests:
### Access Restrictions: Same Origin Policy:
  - The Same Origin Policy (SOP) is a browser security measure that restricts client-side JavaScript code from interacting with resources NOT originating from the      same domain name, protocol and port

### SOP (Same Origin Policy):
  - the same domain
  - the same port
  - the same protocol

#4. Documents
##4.1. API
  - Link Api : http://www.gwtproject.org/javadoc/latest/index.html
    - Build UI
    - Make RPC call to **Java servlet server** from **JavaScript client**
    - Internationalize (I18n)
    - Unit test

##4.2. JRE Emulation
  - GWT have a GWT compiler. that compiler compiles Java code into Javascript code to run at web browser. But that compiler **CAN NOT** translate everything of Java to Javascript.

### NOTICE: **GWT compiler CAN NOT compile everything of Java into Javascript** (GWT is not a God, it just compile some package of java into Javascript).
### Set of JRE packages, types and methods that GWT can translate automatically
  - java.lang
  - java.lang.annotation
  - java.math
  - java.io
  - java.sql
  - java.util
  - java.util.logging

  - http://www.gwtproject.org/doc/latest/RefJreEmulation.html

##4.3 Developer Guide
###4.3.1 Organizing Projects:
  - **src folder** - contains production Java source
    - Root package (place one or more module definitions).
    - Client package (which is translated into JavaScript)
    - If you have server-side code, create a server package (which is NOT translated into JavaScript)
    - Share package

  - **war folder** - your web app; contains static resources will be deployed on Java web servers, including Tomcat, Jetty, and other J2EE servlet containers.
    - A web.xml file that configures your web app and any servlets **(web.xml is mapping a url to a service).**
    - Java class files and jar files for server-side code
    - html, css, js, ... files.

  - **test folder** - (optional) JUnit test code would go here

###4.3.2 GWT-Modules configuration -> src/com/mycompany/mywebapp/MyWebApp.gwt.xml

  - GWT configuration are called modules, "GWT module configuration" is the same "android manifest configuration"

  - **"GWT module configuration" is the same "Android manifest configuration"**
    (http://www.gwtproject.org/doc/latest/DevGuideOrganizingProjects.html#DevGuideModuleXml)

  - GWT module configuration:
    - Inherited modules : Inherited other modules
    - Entry-Point Classes :  EntryPoint.onModuleLoad() will be call first of all.
    - Source Path
    - public path

### GWT-Modules defining

  - Defining a module : **src/com/mycompany/mywebapp/MyWebApp.gwt.xml**

```xml
#!xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE module PUBLIC "-//Google Inc.//DTD Google Web Toolkit 2.7.0//EN"
  "http://gwtproject.org/doctype/2.7.0/gwt-module.dtd">
<module rename-to='mywebapp'>
  <!-- Inherit the core Web Toolkit stuff.                        -->
  <inherits name='com.google.gwt.user.User'/>

  <!-- Inherit the default GWT style sheet.  You can change       -->
  <!-- the theme of your GWT application by uncommenting          -->
  <!-- any one of the following lines.                            -->
  <inherits name='com.google.gwt.user.theme.clean.Clean'/>
  <!-- <inherits name='com.google.gwt.user.theme.standard.Standard'/> -->
  <!-- <inherits name='com.google.gwt.user.theme.chrome.Chrome'/> -->
  <!-- <inherits name='com.google.gwt.user.theme.dark.Dark'/>     -->

  <!-- Other module inherits                                      -->
  <inherits name="com.google.gwt.logging.Logging"/>
  <set-property name="gwt.logging.enabled" value="TRUE"/>

  <!-- Specify the app entry point class.                         -->
  <entry-point class='com.mycompany.mywebapp.client.MyWebApp'/>

  <!-- Specify the paths for translatable code                    -->
  <source path='client'/>
  <source path='shared'/>

  <!-- allow Super Dev Mode -->
  <add-linker name="xsiframe"/>
</module>

```

###4.3.3 GWT modules inherit

![Screenshot.png](https://bitbucket.org/repo/LBgyxe/images/4285812950-Screenshot.png)

  - GWT libraries are organized into modules

  - Modules are always referred to by their logical names => when inherit, you use logical name

```
xml
<inherits name="com.google.gwt.junit.JUnit"/>
```

### The Bootstrap Sequence
  - The following principles the sequence of operations that will occur in this html page by browser:
    - script tags always block page until the script is fetched and evaluated. (Parsing of browser is blocked until nocache.js file is fetched totally)
    - img tags do not block page
    - The **body.onload()** event will only fire once all external resources are fetched, including images and frames.


##4.4 Compiling and Debugging
  - It is important to remember that the target language of your GWT application is ultimately JavaScript

  - The heart of GWT is a compiler that converts Java source into JavaScript, transforming your working Java application into an equivalent JavaScript application.

  - After running the GWT compiler, you’ll find the output in the WAR, everything are compiled will be put in **war file**

  - The Bootstrap File:
    - .nocache.js, This is the GWT bootstrap file

    - This file is responsible for choosing the correct version of your application to load for your client based on their browser and locale

  - Application Files:
    The <md5>.cache.html files generated in the war/<app_name> directory

##4.5 JRE Compatibility - HOW GWT compile Java into Javascript.

  - GWT CAN NOT convert all Java into Javascript, Why? because Java is not Javascript.

  - GWT just able to convert Java code into Javascript if Javascript support that technical.

  - THE LIMIT:
    - **Multithreading and Synchronization**: JavaScript interpreters are **single-threaded**, so Multithreading are not available in GWT, because GWT CAN NOT convert Java Multithreading code into Javascript code. (http://stackoverflow.com/questions/39879/why-doesnt-javascript-support-multithreading)
    - Finalization: JavaScript does not support object finalization during garbage collection, so GWT is not able to be honor Java finalizers in production mode.
    - ...
    - ...

##4.6: JSNI

  - http://www.gwtproject.org/doc/latest/DevGuideCodingBasicsJSNI.html

  - Java Native Interface (JNI) : https://en.wikipedia.org/wiki/Java_Native_Interface

  - JavaScript Native Interface (JSNI)

  - JSNI :
    - Support to mix handwritten JavaScript into your Java source code
    - Call from JavaScript code into Java code and vice-versa
    - Call from Java code into JavaScript code

  - Embedded JavaScript in Java:

```java
public static native void alert(String msg) /*-{
  $wnd.alert(msg);
}-*/;
```

##4.7: MVP design partten (Model-View-Presenter design pattern).
###4.7.1 Summary MVC - MVP

![mvc-mvp.png](https://bitbucket.org/repo/LBgyxe/images/1389906408-mvc-mvp.png)


  - **Model** : A model encompasses business objects
    - One model mapping to a table in database

  - **View** : A view contains all of the UI components that make up our application
    - Views are responsible for the layout of the UI components and have no notion of the model.

  - **Presenter** : A presenter contains all of the logic
    - Presenters are the bridge between View and Model.

  - The difference between MVC and MVP:

    - The difference is that the **model** and the **view** **SHOULD NOT** know each other.

    - The **view** is only the graphical representation of the component, just only view code.

    - All the behaviors and logic should be coded in the **presenter** and ***model*

    - the **view** contact with the **presenter** by **events**

###4.7.2 Activities and Places
  - https://ronanquillevere.github.io/2013/03/03/activities-places-intro.html#.VzWDW1R957g

  - http://www.gwtproject.org/doc/latest/DevGuideMvpActivitiesAndPlaces.html#Places

#### Activities:

  - Activities and Places framework allows you to create bookmarkable URLs within your application.

  - Activities and Places framework is a design pattern of Google for GWT.

  - Activities and Places framework are just an MVP design pattern (Activities and Places is implement by MVP, it is kind of MVP design pattern).
    - Activity is the Presenter in MVP. ( Activity = Presenter).

    - Activity are the bridge between **View** and **Model**.

    - Activity just contain the logic code.

    - An Activity contains no Widgets, no UI code.

    - Activities are started and stopped by an **ActivityManager**.

    - One activity associated with a view.

#### Places:
  - A place is a Java object representing a particular state of the UI.

  - Place is a object representing for a string URL

  - PlaceHistoryHandler automatically updates the browser URL corresponding to each Place in your app.

  - Place is not the view, its is just a object representing for a string URL

###4.7.3 GWT Activities and Places with MVP

  - MVP is the concept, and one of the ways to do it is the places-activities framework (places-activities framework is design for GWT of GOOGLE)

  - https://ronanquillevere.github.io/2013/03/03/activities-places-intro.html#.VzWDW1R957g

  - http://wpamm.blogspot.tw/2013/08/nested-activities-alternative-with.html

  - https://bitbucket.org/iheos/toolkit/wiki/tools/gwt-activities-places

  - Activities and Places is the design pattern developed by Google for GWT and this design following MVP design pattern.

  - Activities and Places  are Google's implementation of the MVP design pattern.

  - GWT Activities & Places contain:

    - Views : A view is simply the part of the UI associated with an Activity

    - ClientFactory : contain EventBus, PlaceController, all Views.

    - Activities : Is the Presenter, Contain logic code.

    - Places : Is a object representing fot a string URL.

    - PlaceHistoryMapper : Mapping a string ULR with a place object

    - ActivityMapper : Mapping an activity with a place

    - ActivityManager : manage the state af activities (start an activity, stop an activity)

![a.png](https://bitbucket.org/repo/LBgyxe/images/745790124-a.png)


**NOTICE** - In Web you have **router file** to mapping each URL with a Controller, In Android native app you can switch between activities by **intent object**. In GWT you have **ActivityMapper** to mapping a view with a place
---------------------------------------------------------------------------------------------------------------------------------------------------------

#5. MGWT
  - http://www.m-gwt.com/

  - http://googlewebtoolkit.blogspot.de/2012/07/gwt-support-for-mobile-app-development.html

  - MGWT is for Developing mobile applications with GWT

  - By using gwt-phonegap and mgwt you can write applications that can be deployed into the app store or the market place with GWT.

  - gwt-phonegap enables GWT apps to use Phonegap. With Phonegap, HTML5 applications can access the same device features that native apps can use via Javascript APIs, such as the camera, file system or contacts.

  - Support for GWT RPC in a Phonegap environment

  - MGWT contain 2 main components
    - **MGWT Showcase** - **mgwt** is an open source mobile widget frame work for GWT
    - **GWT-Phonegap**  - **gwt-phonegap** is a wrapper for phonegap (phonegap is Javascript API for mobile, GWT-Phonegap is Java API wrap Javascript API)

##5.1 mgwt
  - https://github.com/mgwt/mgwt

  - mgwt works on all kind of mobile devices that support webkit (like iPhone, iPad, iPod, Android, ...)

##5.2 gwt-phonegap
  - https://github.com/mgwt/gwtphonegap

  - gwt-phonegap is a wrapper for phonegap(Cordovar).

  - With phonegap you can call Javascript to interact with Android device system, with **gwt-phonegap** you can call Java API to interact with Android device system

#OTHER

## Convert javascript game to mobile game
  - https://github.com/cykod/AlienInvasion

  - With Cordova you can convert Javascript game on browser to Mobile game on Android, IOS

## Web appication vs Web services
  - http://stackoverflow.com/questions/10615136/difference-between-web-services-and-web-application

## Servlet java :
  - https://docs.oracle.com/cd/E19857-01/820-0261/abxay/index.html
