
## iOS frameworks design patterns

#### MVC design pattern

  - iOS frameworks rely on design patterns such as `model-view-controller` and `delegation` in their implementation
  - ViewController: https://developer.apple.com/library/content/featuredarticles/ViewControllerPGforiPhoneOS/index.html#//apple_ref/doc/uid/TP40007457
  
  - `Model:`
      - UIDocument
      - Data Objects
          - Data model objects store your app’s content and Data object for database.
  - `View`
      - UIWindown
      - UIView
      - UI Objects
      - StoryBoard files
  - `Controller`
      - UIViewController
          - The UIViewController class is the base class for all view controller objects.
          - it provides default functionality for loading views, presenting them, rotating them in response to device rotations
      - ViewController
          - View controller objects manage the presentation of your app’s content on screen.
          -  A view controller manages a single view and its collection of subviews.
          -  When presented, the view controller makes its views visible by installing them in the app’s window.
         
## The Heart Of IOS Application
- The heart of every iOS app is the **UIApplication** object.
- UIAppication
  - The UIApplication object manages the event loop and other high-level app behaviors.
  - UIApplication object to deliver events to your views and view controllers.
- ApplicationDelegate 
  - The app delegate is the heart of your custom code. This object works in tandem with the UIApplication object to handle app initialization, state transitions, and many high-level app events.
  
## Structures
#### The App Delegate Source File `(AppDelegate.swift)` ====================> **Entry point**
  - AppDelegate ~ Entrypoint
  - AppDelegate is declaced by `UIApplicationMain` attribute (@UIApplicationMain)
  - The AppDelegate.swift source file has two primary functions:
    - It creates the `entry point` to your app and a `run loop` that delivers input events to your app
    - It defines the AppDelegate class, The AppDelegate class is where you write your custom app-level code.
  - The AppDelegate class contains a single property: window
  
#### The View Controller Source File `(ViewController.swift)` ====================> **Controller**
  - A controller that managers a view.
  - ViewController equivalent Controller In MVC parttern, (ViewController = C)
  - ViewController is a sub-class of UIViewController, ViewController inherits all the behavior defined by UIViewController.

#### The Storyboard Source File `(Main.storyboard)` ====================> **View**
  -  A storyboard is a user interface filse, storyboard <=> files layout.xml of Android
  -  A storyboard file can contain many UI element, such as buttons and text-fields
  - Storyboards contain the views and view controllers that the app presents on screen. 
  - Views in a storyboard are organized according to the view controller that presents them. 
  - Storyboards also identify the transitions (called segues) that take the user from one set of views to another.

#### View Elements
  - All view objects in iOS are of type `UIView` => All view in IOS is subclasse of `UIView`.
  - For example : UITextField is a subclass of `UIView`.

#### The AppName.app File `(hello.app)` 
  - The executable file contains your app’s compiled code. The name of your app’s executable file is the same as your app name

#### The Information Property List File `(Info.plist)`
  - This file contains metadata about your app, which the system uses to interact with your app.
    - App name
    - App name display on screen
    - Version
    - Build version
  - Xcode creates this file for you automatically based on your project’s configuration and settings.

## View Controller: **C layer**
  - Every app has at least one view controller, and most apps have several
  - Each view controller manages a portion of your app’s user interface as well as the interactions between that interface and the underlying data
  - `View Controller` is the object that control the `view`
  - `View Controller` is the `Controller layer` in MVC
  - Every `View Controller` is inherited from `UIViewController`
  
- https://developer.apple.com/library/content/featuredarticles/ViewControllerPGforiPhoneOS/index.html#//apple_ref/doc/uid/TP40007457-CH2-SW1

#### Types Of View Controllers
  - There are two types of view controllers:
    - Content view controllers manage a discrete piece of your app’s content and are the main type of view controller that you create.
    - Container view controllers collect information from other view controllers (known as child view controllers) and present it in a way that facilitates navigation or presents the content of those view controllers differently.
  
#### Understand the View Controller Lifecycle

#### UIViewController class
  - `View controller` is an object that manages a set of views
  - Every `View Controller` is inherited from `UIViewController`
  - UIViewController methods get called as follows:
  
    - Step 1: **`viewDidLoad()`**
      - Called when the view controller’s content view (the top of its view hierarchy) is created and loaded from a storyboard.
      - This method is intended for initial setup
    - Step 2 **`viewWillAppear()`**
      - Intended for any operations that you want always to occur **before** the view becomes visible
      - This method is always called immediately before the content view appears onscreen
    - Step 3 **`viewDidAppear()`**
      - Intended for any operations that you want to occur **as soon as** the view becomes visible
      - This method is always called immediately **after** the content view appears onscreen.

## View : **V layer**
#### The Ways To Implement Views Layer
  - An object that’s used to construct your UI and display content to the user.
  - We can implement `View Layer` by 3 ways:
    - iOS Storyboards: A visual tool for laying out multiple application views and the transitions between them. A Storyboard is a board with a story to tell.
  
    - NIBs (or XIBs): Each NIB file corresponds to a single view element and can be laid out in the Interface Builder, making it a visual tool as well. Note that the name “NIB” is derived from the file extension (previously .nib and now .xib, although the old pronunciation has persisted).
      - NIB : NeXT Interface Builder
      - XIB : XML Interface Builder

    - Custom Code: i.e., no GUI tools, but rather, handling all custom positioning, animation, etc. programmatically.


