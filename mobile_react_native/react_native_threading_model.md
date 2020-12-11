### Threading in React Native apps
### React native workflow


-------------------------------------


### React Native apps have 3 threads are:
  * **Main (UI) Thread**
    * **UI thread**
    * (or Main thread or Native Thread): Android/iOS applications in the main thread, **display UI to the screen**
    * The Main Thread also listens to the UI events like 'press', 'touch', etc. These events are then passed to the Javascript thread via the RN Bridge
  * **Shadow Thread** 
    * Threading **compute layout and compute UI interface**
  * **Javascript Thread (JS Thread)**
    * **Logic thread**
    * JavaScript code that is executed in this thread, **execute business logic code**
    * Javascript Thread will use **Apple JavaScriptCore Javascript engine** for execute javascript code
    * react_native_javascript_engine => https://github.com/leminhtuan2015/Today-I-Learn/blob/master/mobile_react_native/react_native_javascript_engine.md

### React native workflow
  * Step 1: When the React native app starts up, the **Main thread** starts execution and start loading JS.
  * Step 2: When JavaScript code has been loaded main thread sends it to **Javascript Thread** to keep main thread response which is responsible for the UI. Having a separate thread for JavaScript is a good idea, because when JS does some heavy calculations freezing the thread for a while , the UI thread will not suffer.
  * Step 3: When React start rendering Reconciler starts "diffing", and when it generates a new virtual DOM(layout) it sends changes to **Shadow thread**.
  * Step 4: Shadow thread ("shadow" because it generates shadow nodes) calculates layout and then sends layout parameters/objects to the **Main(UI) thread**
  * Step 5. Since only the main thread is able to render something on the screen, shadow thread should send generated layout to the main thread, and only then UI renders. 
  
  * Step 1: Khi chạy 1 ứng dụng RN, **Main thread** khởi tạo và thực thi việc loading JS code
  * Step 2: Sau khi Javascript code đã load hoàn toàn, **Main thread** sẽ chuyển tiếp sang cho **Javascript Thread (JS thread)**
  * Step 3: **Javascript Thread (JS thread)** sẽ convert JSX (HTML code) sang virtual DOM(layout) và chuyển cho **Shadow thread**.
  * Step 4: **Shadow thread** convert virtual DOM(layout) sang native UI (native Android/IOS ui) và chuyển cho **Main(UI) thread**
  * Step 5: **Main(UI) thread** sẽ nhận dữ liệu là native UI và render lên màn hình
  * Step 6: Khi user tương tác trên màn hình (bấm nút, ...) 
    * Các sự kiện sẽ được gửi xuống **Javascript Thread (JS thread)** để các mã nguồn logic sẽ thực hiện ở đó
    * Toàn bộ logic trong RN đều giữ nguyên là logic của JS code, Chỉ riêng JSX (HTML code) là được convert sang native UI
    * Vì thế trong RN toàn bộ logic code là như nhau trên Android/IOS và đều được execute bởi tool **Apple JavaScriptCore Javascript engine**, tool này được build kèm cùng các ứng dụng RN  

#### React native workflow diagram

![title](https://github.com/leminhtuan2015/Today-I-Learn/blob/master/mobile_react_native/react_native_app_thread%20workflow_00.png?raw=true)

![title](https://github.com/leminhtuan2015/Today-I-Learn/blob/master/mobile_react_native/react_native_app_thread%20workflow_01.png?raw=true)

![title](https://github.com/leminhtuan2015/Today-I-Learn/blob/master/mobile_react_native/react_native_app_thread%20workflow_02.jpg?raw=true)
