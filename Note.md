### JAVA - ANDROID

* 1 **What is static variable (class variable), when we use static variable** [Biến static là gì? khi nào sử dụng biến static]
  * Là biến share của tất cả các instance trong class, Sử dụng khi 1 tài nguyên là cố định với tất cả các object của class

* 2 **What is pointer? Object is the pointer? what is the diffrent between reference variable vs value variable?**
  * Con trỏ là gì? , Object có phải con trỏ không, Object là biến tham trị hay tham chiếu, kiểu biến tham chiếu va tham trị khác nhau như thế nào?

* 3 **Data structures, When use List, when use Set**
   * List (countable number of ordered values, where the same value may occur more than once), 
   * Map (k-v)
   * Set (without any particular order, and no repeated values)
   * Stack
   * Queue
 
* Kể tên các loại cấu trúc dữ liệu hay dùng? Khi nào dùng List, khi nào dùng Set

* 4 **Toán tử == và hàm equals() khác nhau như thế nào, How to compare 2 object?**

  * The default implementation uses == operator to compare two objects, Toán tử == dành cho việc so sánh tham chiếu (so sánh địa chỉ lưu trữ) 
  * method .equals() compare the values of two objects, dành cho việc so sánh nội dung
  * => Khi so sánh kiểu dữ liệu String, ng ta dùng .equals()
  
* 5 **Activity Lifecycle in Android Applications, When onResume called :  Vòng đời của một Activity, khi nào onResume() được gọi?**
  * onResume : This event is called whenever the user returns to the activity after leaving the activity — such as receiving a call, pressing the home button, turning off the screen, or transitioning to another activity.
  
* 6 Diffrent between fragment và activity là gì ?
  * Fragment is a sub-activity
  * You can combine multiple fragments in a single activity to build a multi-pane UI and reuse a fragment in multiple activities
  
* 7 What’s the difference between onCreate() and onStart()?
  * The onCreate() method is **called once** during the Activity lifecycle, either when the application starts, or when the Activity has been destroyed and then recreated, for example during a configuration change.
  * The onStart() method is called **whenever** the Activity becomes visible to the user, typically after onCreate() or onRestart().
  
* 8 Why would you do the setContentView() in onCreate() of Activity class?
  * As **onCreate() of an Activity is called only once**, this is the point where most initialisation should go. It is inefficient to set the content in onResume() or onStart() (which are called multiple times) as the setContentView() is a heavy operation.
  
* 9 Difference between AsyncTasks & Threads?
  * Thread should be used to separate long running operations from main thread so that performance is improved. But it can’t be cancelled elegantly and it can’t handle configuration changes of Android. **You can’t update UI from Thread**.
  * AsyncTask can be used to handle work items shorter than 5ms in duration. With AsyncTask, **you can update UI** unlike java Thread. But many long running tasks will choke the performance.
  
* 10 cách loại bỏ permission 
  * Vào file manifest: 
  ```<uses-permission android:name="android.permission.READ_PHONE_STATE" tools:node="remove" />```

------------------------------------------------------------------------------------------------------------

### JAVASCRIPT - REACT-NATIVE

* 1 **What is First-class functions ?**

  * A programming language is said to have First-class functions when functions in that language are treated like any other variable
  * A function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.
  
* 2 **What is Hoited in JS**  
  * Hoisting is JavaScript's default behavior of moving declarations to the top.
  * Variables and function declarations are moved to the top of their scope before code execution.

* 3 **What is strict mode in JS**
  
  * The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables.
  * You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.


* 4 : componentWillReceiveProps when it called: 
  * Before our component does anything with the new props, componentWillReceiveProps is called
  
 
------------------------------------------------------------------------------------------------------------

### Swift - IOS

0. 33- What is Pointer ?
  
1. Mô tả vòng đời của ViewController (Explain View Controller Lifecycle events order ?), Phân biệt viewDidLoad và viewDidAppear?

* https://stackoverflow.com/questions/5562938/looking-to-understand-the-ios-uiviewcontroller-lifecycle

LoadView()

loadViewIfNeeded()

viewDidLoad()  **Only called Once**

viewWillAppear(_ animated: Bool)

viewWillLayoutSubviews()

viewDidLayoutSubviews()

viewDidAppear(_ animated: Bool)

viewWillDisappear(_ animated: Bool)

viewDidDisappear(_ animated: Bool)

2. Auto-layout là gì?

* Auto Layout là cơ chế tự động tính toán size và vị trí của tất các view nằm trong ứng dụng của bạn, nó dựa trên một hệ thống điều kiện gọi là constraint đặt trên từng view.

3. Hàm nào được gọi khi application chuyển sang chạy background (nhấn nút home), và hàm nào được gọi khi chuyển lên chạy foreground.

Trả lời :

– Chuyển sang background: applicationDidEnterBackground (Trong AppDelegate class)

– Chuyển lên foreground: applicationWillEnterForeground (Trong AppDelegate class)

4. Delegate là gì ?

Delegate là một pattern rất phổ biến trong công việc truyển dữ liệu giữa các View. Cơ chế hoạt động của nó là View B ủy quyền cho View A thực thi một hành động nào đó, View A sau khi nhận dữ liệu View.B trả về, sẽ dismiss View B và thực thi hành động mà view B đã ủy quyền trước đó

5. Trong IOS có 2 cấu trúc dữ liệu NSSet, NSArray, Sự khác biệt là gì? Khi nào sử dụng NSSet/NSArray ? Duyệt NSSet/NSArray cái nào nhanh hơn.

Khi thứ tự của các phần tử không quan trọng thì quá trình duyệt phần tử tại NSSet sẽ nhanh hơn vì NSSet sử dụng hash value để tìm phần tử, giống như từ điển. Còn NSArray sẽ duyệt qua nội dung của từng phần tử một.


6.  What is the difference strong, weak pointer?

Strong pointer là một con trỏ, trỏ đến một đối tượng và sở hữu (own) đối tượng đó. 
Weak pointer là một con trỏ, trỏ đến một đối tượng nhưng không sở hữu (own) đối tượng đó.

* Strong pointer: quyết định đến sự tồn tại của đối tượng.

7. Khái niệm "higher order functions?" trong Swift là gì?
  * Giống như first class functions trong JS
  * Functions that take another function as a parameter, or return a function, as a result, are known as higher-order functions. 
  
8: Tuple in swift là gì?
  * là 1 kiểu Kiểu dữ liệu 
  * Tuple is a group of different values represented as one
  * The type of a tuple is determined by the values it has. So ("tuple", 1, true) will be of type (String, Int, Bool).
  
9: - What is bitcode ?
  * Bitcode refers to to the type of code: “LLVM Bitcode” that is sent to iTunes Connect. This allows Apple to use certain calculations to re-optimize apps further (e.g: possibly downsize executable sizes). If Apple needs to alter your executable then they can do this without a new build being uploaded.
  
10- What’s the difference between a xib and a storyboard?
Both are used in Xcode to layout screens (view controllers). A xib defines a single View or View Controller screen, while a storyboard shows many view controllers and also shows the relationship between them.
  
11. 28- What is the difference Delegates and Callbacks ?

------------------------------------------------------------------------------------------------------------

### C# - ASP.NET

* 0. Descript .net architecture the name of Components in each layer in dot net framework

* 1. What is the difference between the ASP and ASP.NET?

  * ASP.Net is the next generation of ASP technology platform
  * The main difference between ASP and ASP.Net is that ASP is interpreted, while ASP.Net is compiled. 
  * ASP uses VBScript, therefore when the ASP page is executed, it is interpreted. 
  * On the other hand, ASP.Net uses .Net languages like C# and VB.NET, which is compiled to Microsoft intermediate language.


* 2. What is the ASP.NET page life Cycle?
 
  * **Page request.** The user requests a page. ASP.NET decides whether to compile it or serve it from a cache.
  * **Start.** The page’s beginning conditions are set.
  * **Initialization.** On-page controls become available, and any themes are applied.
  * **Load.** ASP.NET uses the view state and control state properties to set the control properties.
  * **Postback** event handling. When applicable, user input is handled.
  * **Rendering.** ASP.NET saves the view state for the page and writes the output of rendering to the output stream.
  * **Unload.** The rendered page gets sent to the client. ASP.NET unloads page properties and performs cleanup.
  
* 3. What is the difference between **ASP.NET Webforms** and **ASP.NET MVC**?

  * ASP.NET Webforms uses the page controller approach for rendering layout. In this approach, every page has its controller.
  * On the other hand, ASP.NET MVC uses the Front Controller approach. In this approach, there is a common controller for all pages.
  
  * **ASP.NET Web Forms** were one of the first ways to create web apps with ASP.NET. They utilize a designer and server controls to make it easy to design a form with a point and click interface like Windows Forms applications.

  * **ASP.NET MVC** or the Model View Controller separates a web app into data, display, and actions. Proponents of MVC point to its simplicity, reusability, and “less buggy” nature.

  * **In reality, both ASP.NET MVC and ASP.NET Web Forms are tools with different strengths for different applications**
  

* 4. Explain what LINQ is.

  * Language-Integrated Query (LINQ) is the name for a set of technologies based on the integration of query capabilities directly into the C# language
  
* 5. Boxing and Unboxing

  * **Boxing** is the process of converting a **value type** to the **type object**
  * **Boxing** copy the value of the value-type variable to object reference-type
  
  ```c#
   int i = 123;
   
   object o = i;  // implicit boxing i
   object o = (object)i;  // explicit boxing
   i = (int)o;  // explicit unboxing i
  
  ```
  
  ```c#
   int i = 123;
   
   object o = i;  // Boxing copies the value of i into object o.
   i = 456;  // Change the value of i.
   
   System.Console.WriteLine("The value-type value = {0}", i);
   System.Console.WriteLine("The object-type value = {0}", o);
   
    //The value-type value = 456
    //The object-type value = 123
   
  ```
  
* 6. Diffrent between Structure and Class
  * Structure: Value type
  * Class: Reference type
  
* 7. What is Serialization?

  * Serialization is the process of converting the **state of an object instance** to a **stream of data**
  * Deserialization is its reverse process, that is unpacking stream of bytes to their original form
  
  
  ```c#
  Product product = new Product();

  product.Name = "Apple";
  product.ExpiryDate = new DateTime(2008, 12, 28);
  product.Price = 3.99M;
  product.Sizes = new string[] { "Small", "Medium", "Large" };

  // SerializeObject
  string output = JsonConvert.SerializeObject(product);
  //{
  //  "Name": "Apple",
  //  "ExpiryDate": "2008-12-28T00:00:00",
  //  "Price": 3.99,
  //  "Sizes": [
  //    "Small",
  //    "Medium",
  //    "Large"
  //  ]
  //}

  // DeserializeObject
  Product deserializedProduct = JsonConvert.DeserializeObject<Product>(output);
  ```
  
* 8. What are the types of Serialization?
  * The different types of Serialization are: 
    * XML serialization
    * SOAP
    * Binary
    
    * XML serialization – It serializes all the public properties to the XML document. Since the data is in XML format, it can be easily read and manipulated in various formats. The classes reside in System.sml.Serialization.
    * SOAP – Classes reside in System.Runtime.Serialization. Similar to XML but produces a complete SOAP compliant envelope which can be used by any system that understands SOAP.
    * Binary Serialization – Allows any code to be converted to its binary form. Can serialize and restore public and non-public properties. It is faster and occupies less space.
    
 * 9. What is the difference between dynamic type variables and object type variables?



------------------------------------------------------------------------------------------------------------

### JD

* React native

- At least 1 - 2 years of experience working in a full-time software development role
- Experience working with Front-End libraries such as React/React Native, Redux
- Strong knowledge of MVP, MVVM design pattern.
- Database Design
- Familiarity with RESTful or GraphQL, and how to connect to APIs to back-end services
- A passion for technology and the ability to learn new concepts quickly
- Strong skill in Debugging, Optimization in React Native
- Thorough understanding of ReactNative and their core principles
- Familiarity with RESTful APIs
- Experience with Version control (GIT)
- Good English reading and writing skills
- Having existing mobile apps on app store is a plus
- UI / UX Knowledge in mobile is a plus


* Android

- At least 2 years experiences in programming with Android.
- Extensive knowledge of UI elements & layout, advanced animation techniques.
- Strong knowledge of MVP, MVVM design pattern.
- Database Design
- Experience on Android Studio, Android SDK.
- Familiarity with RESTful APIs
- Experience with Version control (GIT)
- Have good knowledge in OOP and Java programming language.
- Have experience working with Firebase, Crashlytics and other libraries will be a plus
- UI / UX Knowledge in mobile is a plus

* IOS
- 2+ years building complex applications for the iPhone or iPad using Objective-C/C++/Swift with Cocoa and other frameworks
- Experience with code bases, including API design techniques
- Strong knowledge of MVP, MVVM design pattern.
- Database Design
- Experience building in the iPhone SDK
- Experience with Version control (GIT)
- Familiarity with RESTful APIs
- Experience with multithreading programming
- Experience writing unit tests and testable code
- UI / UX Knowledge in mobile is a plus
