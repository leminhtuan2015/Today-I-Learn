### IOS, Android, Web : View Layer

--------------------------------------

### IOS, Android, Web : View Layer

* `IOS:` **Swift (Logic) - XML (View)**
* `Android:` **Java (Logic) - XML (View)**
* `Web:` **Javascript (Logic) - HTML (View)**

* **IOS/Android/Web** all use **XML/HTML** to render **View Layer**
* But you still can create **View** by code

* Exxample: I can create **View** of HTML by Javascript code

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
