## StoryBoard
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
