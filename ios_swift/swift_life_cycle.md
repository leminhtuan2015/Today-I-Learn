
### The App Life Cycle  - Execution States for Apps
### ViewDidLoad - ViewWillAppear - ViewDidAppear

--------------

  - **Not running :**
    - The app has not been launched or was running but was terminated by the system.
  - **Inactive    :**
    - The app is running in the foreground but is currently not receiving events. (It may be executing other code though.)
    - An app usually stays in this state only briefly as it transitions to a different state.
  - **Active :**
    - The app is running in the foreground and is receiving events. This is the normal mode for foreground apps.
  - **Background:**
    - The app is in the background and executing code. 
    - Most apps enter this state briefly on their way to being suspended. 
    - However, an app that requests extra execution time may remain in this state for a period of time. 
    - In addition, an app being launched directly into the background enters this state instead of the inactive state. 
    - For information about how to execute code while in the background, see Background Execution.
  - **Suspended :**
    - The app is in the background but is not executing code. 
    - The system moves apps to this state automatically and does not notify them before doing so. 
    - While suspended, an app remains in memory but does not execute any code.
    - When a low-memory condition occurs, the system may purge suspended apps without notice to make more space for the foreground app.

### ViewDidLoad - ViewWillAppear - ViewDidAppear
  - ViewDidLoad: Call only one time in NavigationViewController (it not be call when click back in NavigationViewController)
  - ViewWillAppear - ViewDidAppear: Call each time view render
