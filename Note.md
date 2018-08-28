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
