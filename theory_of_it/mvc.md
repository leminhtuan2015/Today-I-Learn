MVC In Android, IOS, Web

### What is MVC?
### The `Web controller` layer -VS- `Application controller` layer
### Life of `Web controller` layer and `Application controller` layer
### Example Android Activity (as controller)

-------


### What is MVC?

 - MVC stand for Model - View - Controller
 - That is a design pattern in programing used for building software system
    - Mantainable
    - Scalable
    - Easy to manage source code
    - Decrease bugs
    - Easy to teamwork
    
#### Controller is the brain in MVC
  - Updating the contents of the views, usually in response to changes to the underlying data.
  - Responding to user interactions with views
  - User will contact with **Sofware system** throught the **Controller layer**
  - All the action of User is handle by **Controller layer**
  - Controller layer is the main component of most framework such as Swift IOS, Java Android or Web framework.
  - Each **Controller** have one **View** to render that view
  - Each **Controller** mainly manage one **Model**

  
### `Web controller` layer -VS- `Application controller` layer
  - Web controller layer
     - In RoR **Controller** that is controller folder
    
  - Application controller layer
     - In Android the **Controller** is `Activity`
     - In IOS  **Controller** is `ViewController`
     
### Life of `Web controller` layer and `Application controller` layer

#### Life Circle Of **Web Controller** (`Controller`)

   - Controller of Web is manage by **Web Container (Nginx, Puma, Tomcat)**
   - Each request from client to server the **Web Container** will create a **new instance** of the **Controller class** and this **instance** will serve the request
   - After the request done (User receives the response) **Web Container** will delete that **instance** to save disk-memory
  
#### Life Circle Of **Android Controller** (`Activity`)

   - Controller of App is manage by **Opera System (OS)**
   - When user open one sence **OS** will create **a new Activity** that mean: Create **a new instance of the Activity**

   ```java
     class MyActivity extends AppCompatActivity{}
   ```

   - The OS will create: `MyActivity myActivity = new MyActivity()` and the **myActivity object** will be stored in **stack Activity**
   - The reason activities is just **created only one time** is for the best performent, memory, pin,....
   - You can create many instance of one Activity by start many time the same Activity BUT dont do it.
  
#### Life Circle Of **Swift-IOS Controller** (`ViewController`)
  
  - http://stackoverflow.com/questions/5562938/looking-to-understand-the-ios-uiviewcontroller-lifecycle
  
  
### Example Android Activity (as controller)

  - Everything is **objects**
  - Java Android **create the Activities** by: **Create object of Activity classes**
  - Java Android Activity life is that: `OS create instance object of that Activity class and store that object in stack`
  - Activity(Controller) live in memory is the **Object** of the Activity.
  
  - Đối với Web mỗi request sẽ tạo mới một **instance object** của một Controller, nhưng đối với App thì nó chỉ tạo ra **Duy nhất** một **instance object** cho một Controller.
  
  - Cơ chế của App (Android, IOS) thì lại **Chỉ khởi tạo duy nhất một instance object của mỗi Activity**, sau đó lưu các **instance object** trong stack để re-use khi cần.
  
  - Cơ chế hoạt động của App như vậy là do để tiết kiệm bộ nhớ, Pin, tăng performent, giảm tốn kém tài nguyên.
  
  - Vòng đời **instance object** của Controller được quản lý **Tự động** bởi Hệ điều hành.
  
  - Các trạng thái của các **Controller** sẽ được xác định và thay đổi tự động tại mỗi thời điểm khi user sử dụng
   app
   
  - Mỗi khi thay đổi trạng thái của Controller thì các hàm của object controller đó sẽ tự động được gọi.
    - onCreate, onRestart, onResum, ....
    
  - EACH **CONTROLLER (ACTIVITY)** SHOUD BE HAVE ONLY ONE **INSTANCE OBJECT**
  - **INSTANCE OBJECT** OF EACH **CONTROLLER (ACTIVITY)** JUST ONLY CREATE ONE TIME, AND BE STORED IN STACK
