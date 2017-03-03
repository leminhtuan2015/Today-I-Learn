### MVC
### `Web controller` layer -VS- `Application controller` layer
### Life of `Web controller` layer and `Application controller` layer

-------


### What is MVC?

 - MVC stand for Model - View - Controller
 - That is a design pattern in programing used for building software system
    - Mantainable
    - Scalable
    - Easy to manage source code
    - Decrease bugs
    - Easy to teamwork
  - User will contact with **Sofware system** throught the **Controller layer**
  - All the action of User is handle by **Controller layer**
  - Controller layer is the main component of most framework such as Swift IOS, Java Android or Web framework.
  - Each **Controller** have one **View** to render that view
  - Each **Controller** mainly manage one **Model**
  
### Where is it used for
  - Web (Java Spring, Ruby on Rail, Play - Scala, Php)
  - Application (Java - Android, Swift - IOS)
  
### Web controller layer -VS- Application controller layer
  - Web controller layer
     - In RoR **Controller** that is controller folder
    
  - Application controller layer
     - In Android the **Controller** is `Activity`
     - In IOS  **Controller** is `ViewController`
     
### Life of Web controller layer and Application controller layer
  - Life Circle Of **Web Controller** (`Controller`)
    - Controller of Web is manage by **Web Container (Nginx, Puma, Tomcat)**
    - Each request from client to server the **Web Container** will create a **new instance** of the **Controller class** and this **instance** will serve the request
    - After the request done (User receives the response) **Web Container** will delete that **instance** to save disk-memory
  
  - Life Circle Of **Android Controller** (`Activity`)
    - Controller of App is manage by **Opera System (OS)**
    - When user open one sence **OS** will create **a new Activity** that mean: Create **a new instance of the Activity**
    
    ```java
      class MyActivity extends AppCompatActivity{}
    ```
    
    - The OS will create: `MyActivity myActivity = new MyActivity()` and the **myActivity object** will be stored in **stack Activity**
    - The reason activities is just **created only one time** is for the best performent, memory, pin,....
    - You can create many instance of one Activity by start many time the same Activity BUT dont do it.
  
  
  
