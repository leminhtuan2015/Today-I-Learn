### Swift View Layer

-------------------

### Swift View Layer
* Each view object in Swift will be mapping with one XML tag
 
* **Swift Button Programmatically**

```
let button = UIButton(frame: CGRect(x: 0, y: 0, width: 44, height: 44))
button.backgroundColor = UIColor.red
button.addTarget(self, action: #selector(ratingButtonTapped), for: .touchUpInside)
addSubview(button)

func ratingButtonTapped() {
    print("Button pressed")
}
```
 
* **Swift Button XML (Storyboard)**
 
```
<button opaque="NO" contentMode="scaleToFill" 
         contentHorizontalAlignment="center" 
         translatesAutoresizingMaskIntoConstraints="NO" 
         id="AY6-Jq-7hp">
        
        <rect key="frame" x="93" y="56" width="30" height="30"/>
         
        <constraints>
            <constraint firstAttribute="height" constant="30" id="yqg-DZ-qFa"/>
        </constraints>
        
        <state key="normal" title="P"/>
        
        <connections>
              <action selector="playButton:" 
                      destination="d2Z-AE-9rH" 
                      eventType="touchUpInside" 
                      id="VhN-lf-znv"/>
        </connections>
</button>
```
