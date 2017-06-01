### IOS, Android, Web : View Layer

--------------------------------------

### IOS, Android, Web : View Layer

* How IOS/Android/Web render View
  * `IOS:` **Swift (Logic) - XML (View)**
  * `Android:` **Java (Logic) - XML (View)**
  * `Web:` **Javascript (Logic) - HTML (View)**

* **IOS/Android/Web** all use **XML/HTML** to render **View Layer**
* But you still can create **View** by code

* **Web Example:** We can create **View** of Web by Javascript code

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<body></body>

<script>
var text = "This Is Me, Click Me now!"

var para = document.createElement("p");
var node = document.createTextNode(text);

para.appendChild(node)

$(para).click(function(){ 
	alert("Clicked 0")
})

para.addEventListener('click', function(){ 
	alert("Clicked 1")

	node.nodeValue="You Already Clicked, Refresh Your Browser";
}, true); 

$("body").append(para)
</script>
```

* **Android Example:** We can create **View** of Android by Java code

```java
//the layout on which you are working
LinearLayout layout = (LinearLayout) findViewById(R.id.linear_layout_tags);

//set the properties for button
Button btnTag = new Button(this);
btnTag.setLayoutParams(new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT));
btnTag.setText("Button");
btnTag.setId(some_random_id);

//add button to the layout
layout.addView(btnTag);
```

* **IOS Example:** We can create **View** of IOS by Swift code

```swift
let button = UIButton(frame: CGRect(x: 0, y: 0, width: 44, height: 44))
button.backgroundColor = UIColor.red
button.addTarget(self, action: #selector(ratingButtonTapped), for: .touchUpInside)
addSubview(button)

func ratingButtonTapped() {
    print("Button pressed")
}
```







