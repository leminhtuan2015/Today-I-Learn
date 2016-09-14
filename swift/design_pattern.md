
## iOS frameworks design patterns

  - iOS frameworks rely on design patterns such as model-view-controller and delegation in their implementation
  - ViewController: https://developer.apple.com/library/content/featuredarticles/ViewControllerPGforiPhoneOS/index.html#//apple_ref/doc/uid/TP40007457
  
  - `Model:`
      - UIDocument
      - Data Objects
          - Data model objects store your app’s content and Data object for database.
  - `View`
      - UIWindown
      - UIView
      - UI Objects
  - `Controller`
      - UIViewController
          - The UIViewController class is the base class for all view controller objects.
          - it provides default functionality for loading views, presenting them, rotating them in response to device rotations
      - UIAppication
          - The UIApplication object manages the event loop and other high-level app behaviors.
          - UIApplication object to deliver events to your views and view controllers.
      - ViewController
          - View controller objects manage the presentation of your app’s content on screen.
          -  A view controller manages a single view and its collection of subviews.
          -  When presented, the view controller makes its views visible by installing them in the app’s window.
      - ApplicationDelegate 
          - The app delegate is the heart of your custom code. This object works in tandem with the UIApplication object to handle app initialization, state transitions, and many high-level app events. 
