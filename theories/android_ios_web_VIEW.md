
### Android, IOS, Web code VIEW (HTML, XML)
### Render VIEW (render html, xml)
-----------------------------

### Android, IOS, Web code VIEW
  - ***Web*** code VIEW by ***HTML code***
  - ***Android and IOS*** code VIEW by ***XML code***

### Render VIEW (render html, xml)
#### ***Web*** -> HTML
  - Web render view ***HTML*** by ***Browser***
  - ***HTML*** is the static views, if we want ***create/insert/remove/move*** views at run-time we have to use ***Javascript***
  - ***Javascript*** can ***create/insert/remove/move*** a view for Web at run-time
  - ***Browser render view:*** Browser will execute all HTML and Javascript code line by line form top to bottom => We should place Javascript code below HTML code 
  
  ```html
    $("#div_id") // will not work if you place it before <div id="div_id">
  ```
    
#### ***Android, IOS*** -> XML
  - Android, IOS render ***XML*** view by ***OS***
  - In IOS Storyboard/NIB is a XML file
  - ***XML*** is the static views, if we want ***create/insert/remove/move/update*** views at run-time we need to code programmatically (Code in Activity/ViewController)
  - Android and IOS will render XML code before any logic code, we can ***create/insert/remove/move/update*** in XML by programmatically
  
  ```java
    @Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_change_password);

      // activity_change_password => the XML file
    }
  ```
  #### CHÚ Ý:
   - ***Browser*** sẽ thực thi code HTML, CSS, JS line by line, từ trên xuống => Nên đặt code JS ở dưới mã HTML, Vì nếu code JS đặt trước HTML mà JS lại có truy xuất đến các Views HTML thì lúc JS sẽ không tìm thấy các Views đó (Browser chưa render ra)
    
  ```html
    <div id="div_id"> Hello </div>

    <script>
      $("#div_id")
    </script>

    // Nếu script đặt trước đoạn render thẻ div thì $("#div_id") sẽ không tìm được thẻ cần tìm 
    // vì nó chưa được Browser render lên
   ```
   - ***Android / IOS***  khi đi vào mỗi màn hình: sẽ render code XML của màn hình đó đầu tiên trước khi làm bất kỳ điều gì khác, => ta hoàn toàn có thể:
     - ***remove/move*** Views đã có trong XML
     - ***create/insert*** Views mới vào trong XML
     - Hình dung màn hình là 1 ***Canvas***, XML/HTML là mô tả vị trí các Views trong Canvas (XML/HTML là static view), sau đó ta code thể ***programmatically coding by Java/Swift*** để ***create/insert/remove/move/update*** views vào Canvas
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
