## View
  - An object that’s used to construct your UI and display content to the user.
  - We can implement `View Layer` by 3 ways:
    - iOS Storyboards: A visual tool for laying out multiple application views and the transitions between them. A Storyboard is a board with a story to tell.
  
    - NIBs (or XIBs): Each NIB file corresponds to a single view element and can be laid out in the Interface Builder, making it a visual tool as well. Note that the name “NIB” is derived from the file extension (previously .nib and now .xib, although the old pronunciation has persisted).
      - NIB : NeXT Interface Builder
      - XIB : XML Interface Builder

    - Custom Code: i.e., no GUI tools, but rather, handling all custom positioning, animation, etc. programmatically.

## Gesture Recognizer
  - An object that you attach to a view that allows the view to respond to actions the way a control does.
  - Some views is NOT designed to respond to input of user, such as (when user tap, click).
  - To give a view the same capabilities as a control (that’s triggered when a user taps on) by adding a gesture recognizer to it.
  - You can write an action method that occurs when a gesture recognizer recognizes its assigned gesture
  - `Button view object` is the view object conatain `gesture recognizer`

#### Type Of Gesture Recognizer
  - UITapGestureRecognizer
  
#### Connect the Gesture Recognizer to Code
  - The same add action for `button view object`

## StoryBoard
  - A file that contains many `view objects` 
  - `Storyboard` is the one of ways to create the UI (View Layer) in IOS application.
  - `Storyboard` creates UI by `XML` code
  - `Storyboard` automatically generates the xml source code in `.storyboard` files
  
#### How `Storyboard` works?
  - Step 1: Mapping one view object to the ID
  - Step 2: Connection the ID of object to a variable
  
  - Example:
    - Step 1: TextField -> ID_1254_xyx0
    - Step 2: var txt -> ID_1254_xyx0
    - => var txt -> TextField
    - The same `findElementById` of `Android`

```xml
    <view key="view" contentMode="scaleToFill" id="8bC-Xf-vdC">
        <subviews>
            <!--TEXT FIELD is assigned to an random ID-->
            <textField id="mBm-wv-l6k1">
                <rect key="frame" x="119" y="180" width="97" height="30"/>
            </textField>
        </subviews>
    </view>
    
    <!--CONNECTION-->
    <connections>
        <!-- Connect the variable name to a ID-->
        <outlet property="txt1" destination="mBm-wv-l6k" id="R8q-gZ-9HS"/>
    </connections>

```

#### StoryBoard Auto Layout

## Create a Custom View (Custom UIView)

#### Steps create a UIView
  - Choose File > New > File (or press Command-N).
  - On the left of the dialog that appears, select Source under iOS.
  - Select Cocoa Touch Class, and click Next.
  - In the Class field, type [View_Name].
  - In the “Subclass of” field, select UIView.
  - Make sure the Language option is set to Swift.

## Connect StoryBoard To Custom View
