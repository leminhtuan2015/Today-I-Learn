### Threading in React Native apps

* React Native apps have 3 threads are:
  * Main (UI) Thread 
    * (or Main thread or Native Thread): Android/iOS applications in the main thread, **display UI to the screen**
    * The Main Thread also listens to the UI events like 'press', 'touch', etc. These events are then passed to the Javascript thread via the RN Bridge
  * Shadow Thread: 
    * Threading **compute layout and compute UI interface**
  * Javascript Thread: 
    * JavaScript code that is executed in this thread, **execute business logic code**
    * Javascript Thread will use **Apple JavaScriptCore Javascript engine** for execute javascript code
    * react_native_javascript_engine => https://github.com/leminhtuan2015/Today-I-Learn/blob/master/mobile_react_native/react_native_javascript_engine.md

* React native workflow

  1. When the React nativ app starts up, the **Main thread** starts execution and start loading JS.
  2. When JavaScript code has been loaded main thread sends it to **Javascript Thread** to keep main thread response which is responsible for the UI. Having a separate thread for JavaScript is a good idea, because when JS does some heavy calculations freezing the thread for a while , the UI thread will not suffer.
  3. When React start rendering Reconciler starts "diffing", and when it generates a new virtual DOM(layout) it sends changes to **Shadow thread**.
  4. Shadow thread ("shadow" because it generates shadow nodes) calculates layout and then sends layout parameters/objects to the **Main(UI) thread**
  5. Since only the main thread is able to render something on the screen, shadow thread should send generated layout to the main thread, and only then UI renders. 
