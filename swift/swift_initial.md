
### How IOS load and run Swift Application

--------------------

### How IOS load and run Swift Application

  - Step 1: Loading all file .swift to memory
  
  - Step 2: Finding main class ***@UIApplicationMain*** -> setup configs app
  
  - Step 3: Loading .storyboard -> Find the ***enty-point ViewController*** in StoryBoard, StoryBoard declare the entry-point ViewController by ***initialViewController*** property in document tag

  ```xml
    <document
     ...
     initialViewController="veM-9P-u2A">
     
     // veM-9P-u2A : is a ID of ViewController 
  ```

 - Step 4: Run code in ViewController of the sence (viewDidLoad, viewWillAppear, ...)
 
 - Step 5: Render UI to screen
