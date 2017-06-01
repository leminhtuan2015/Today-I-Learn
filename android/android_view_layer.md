### Android View Layer

-----------------------

### Android View Layer

* **Each View Object in Android will be mapped with one XML Tag (XML layout)**

* **Android Button Programmatically**

```
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

* **Android Button XML (XML layout)**
```
// ANDROID CODE

b1=(Button)findViewById(R.id.button);
b1.setOnClickListener(new View.OnClickListener() {
   @Override
   public void onClick(View v) {
      Toast.makeText(MainActivity.this,"YOUR MESSAGE",Toast.LENGTH_LONG).show();
   }
});
      
// XML CODE
<Button
  android:id="@+id/button"
  android:text="Button"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:layout_alignTop="@+id/editText"
  android:layout_alignLeft="@+id/textView1"
  android:layout_alignStart="@+id/textView1"
  android:layout_alignRight="@+id/editText"
  android:layout_alignEnd="@+id/editText" />
```
