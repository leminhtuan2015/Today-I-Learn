**1. Javascript FUNCTIONAL OR OBJECT ORIENTED?**
**2. JavaScript, object oriented?**
**3. Nodejs require exports vs module.exports**
**4. Referrence**


Trả lời: 

**1. Javascript FUNCTIONAL OR OBJECT ORIENTED?**

- "JAVASCRIPT: FUNCTIONAL OR OBJECT ORIENTED?"

```
Question: Is the JavaScript languge functional or object oriented?
Answer: Both. And more. 

Question: Should we use JavaScript primarily as a functional language or object orientated?
Answer: Depends (on your skill, taste, project needs). 

Question: Are there examplary libraries that can be said as primarily functional or object orientated?
Answer: Well, most of the libraries are like JavaScript itself in that they support multiple programming paradigms. However, JQuery has a strong flavor of functional programming, while Ext.js is a completely object oriented javascript library.

Why? How?
```

- Vậy nghĩa là Javascript(JS) là ngôn ngữ hỗ cả FUNCTIONAL ORIENTED, OBJECT ORIENTED và nhiều kiến trúc khác nữa.

- Ví dụ về các framework đã sử dụng JS.
  + Jquery : thư viện JS hỗ trợ Frontend web được phát triển theo functional programing.
  + Ext.js là thư viện được phát triển theo 100% object oriented.

- Việc áp dụng JS theo hướng Object hay Functional phụ thuộc vào kỹ năng của dev, yêu cầu của khách hàng, hay dựa vào đặc điểm của dự án.

- Trong bài này em sẽ tập trung vào việc JS code theo OBJECT ORIENTED.

**2. JavaScript, object oriented?**
 
 - Oject-oriented programing(OOP) là mô hình lập trình dựa trên khái niệm "object", trong thế giới của OOP mọi thứ đều là object.
 
 - Một object bao gồm 2 thành phần:
     + attributes
     + methods
     
 - Class mục đích là định nghĩa ra những thành phần của một object
 
 - OOP sử dụng classes và objects để mô phỏng toàn bộ những bài toán trong thế giới thực thành những thàn phần trong lập trình

- Cách khởi tọa object trong JS

- Cách 1:

```js
    var x = new object();       // Khởi tạo một object có tên là x
    x.name ="x";                // add thuộc tính "name" cho object
    x.tellName = function (){   // add thêm function "tellName" cho object x
        alert(this.name)
    };
```

- Cách 2: 

```js
    // Trong JS kí hiệu {} đại diện cho object
    // kí hiệu [] đại diện cho array
    
    var x = {
     name : "x",
     tellName : function(){
            alert("my name is " + this.name)
          }
    };
```

`+ Trong JS kí hiệu {} đại diện cho object`

`+ kí hiệu [] đại diện cho array`


**3. Nodejs - require exports vs module.exports**
 
**A: require, exports, module.exports**
 
 - Node là framework hỗ trợ run JS code ở server side.
 
 - Để hỗ trợ nhiều hơn trong việc object hóa, Nodejs sử dụng 3 keywork đó là:
   + require("path/to/file/js")
   + module.exports
   + exports 

 - Em xin giải thích một chút về 3 keyword phía trên:
      + 3 từ khóa tên được sử dụng rất nhiều trong nodejs, như em đã nói, mục đích của 3 từ khóa trên là để việc object hóa một file trong javascript
  
      + `Chú ý: Khi Nodejs execute bất kỳ một file js nào thì trình biên dịch sẽ dịch một file như sau:`
     

```js
    var module = { exports: {} };
    var exports = module.exports;

    // your code

    return module.exports;
```
 - Bất kì một file code nào khi được dịch thì toàn bộ đoạn code của file đó sẽ được đặt ở phần `// your code` như ví dụ trên. Nghĩa là nodejs tự động chèn thêm 2 dòng
   + `var module = { exports: {} };`
   + `var exports = module.exports;`
  ở phía đầu file.
  
  và dòng
  + `return module.exports;` 
  ở cuối file
 
 
 - `return module.exports;` : module.exports là một object, object này được return ở cuối của mọi file trong nodejs, vậy object này trả về cho ai, trả về khi nào
  => object module.exports này trả về khi require() được gọi. 

 - `require("path/to/file/abc.js")` : nhận về object `module.exports` được trả lại trong file abc.js

- `x` là một object được gán bằng object `module.exports`

- Bằng cách làm như trên của Nodejs, mỗi file js có để được object hóa hoàn toàn, lúc này ta có thể coi mỗi file .js như một object với những thuộc tính và function riêng, đảm nhiệm một chức năng riêng, sau đó gọi và sử dụng các object này bằng cách require()


**Demo:**
 - Tạo một file có tên test.js

```js
    \\create a file with name is test.js
    
    var name = "Tuan LM";

    var getName = function(){
      return name
    }


    module.exports.name = name;        // add thêm vào object module.exports biến name
    module.exports.getName = getName;  // add thêm vào object module.exports hàm getName
```

- Trong node console ta `require("./test")` => sẽ nhận lại object với một biến và một hàm chính là biến và hàm ta đã add vào object `module.exports`.


- Gán require() cho một oibect khác và gọi ra các thành phần trong object nhận lại:

- Nếu ta không add thêm thành phần vào biến `module.exports` hay không gán module.exports bằng một object nào đó thì hiển nhiên module.exports sẽ không chứa bất kỳ dữ liệu gì, và kết qủa require() nhận lại được sẽ là một object rỗng.

```js
// file test.js

var name = "Tuan LM";

var getName = function(){
  return name
}

```

=> Kết quả khi require() file test.js mà file này k gán giá trị vào biến `module.exports`: => Kết quả sẽ là một object rỗng

### B: exports, module.exports
 - Câu hỏi: `Đã có module.exports rồi và khi require một file ta cũng chỉ nhận lại được object module.exports vậy thế exports sinh ra với mục đích gì?`

=> Trả lời em cũg k hiểu tại sao nó lại đẻ ra 2 object(cùng troe vào 1 vùng nhớ) trong khi đó chỉ cần return về duy nhất object là `module.exports`.
 
** `Chú ý khi sử dụng 2 biến module.exports và exports `**

  + 2 biến exports và module.exports đều cùng trỏ vào một vị trí nhớ, vì vậy khi ta add thêm trường hoặc function bằng một trong hai biến đó thì vùng nhớ A sẽ được có thêm các thành phần được add

  + exports.name = "hello" => Vùng nhớ A sẽ có thêm một biến name = "hello"

  + Nhưng khi ta không add thêm thành phần vào mà gán exports bằng một biến khác thì lúc này exports sẽ trỏ đến vùng nhớ hoàn toàn khác (Không phải vùng nhớ A), vì thế kết quả trả về mà ta nhận được không hề có thành phần của exports 

ví dụ:

```js
    var name = "Tuan LM";

    var getName = function(){
      return name
    }


    exports = name;
    module.exports.getName = getName;

```

=> Kết quả nhận về chỉ  hàm getName được add bởi `module.exports.getName = getName;`
lúc này `exports` đã trỏ đến một nới hoàn toàn mới k còn liên quan gì đến `module.exports`

Và kết quả ta nhận về khi require cũng chỉ là những thành phần mà object `module.exports` trỏ tới

**4. Referrence**
 - http://stackoverflow.com/questions/16383795/difference-between-module-exports-and-exports-in-the-commonjs-module-system
 - http://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js
 - http://stackoverflow.com/questions/5311334/what-is-the-purpose-of-node-js-module-exports-and-how-do-you-use-it/5311377#5311377

 - http://thoughtsonscripts.blogspot.com/2011/11/javascript-functional-or-object.html


Thank you so much, please leave some comments if I have anything misunderstood. 
