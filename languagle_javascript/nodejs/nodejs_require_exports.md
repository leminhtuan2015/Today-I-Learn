### Nodejs `require`, `exports` vs `module.exports`

--------------------------


### Nodejs `require`, `exports` vs `module.exports`
 
#### require, exports, module.exports
 
 - Node là framework hỗ trợ run JS code ở server side.
 
 - Để hỗ trợ nhiều hơn trong việc object hóa, Nodejs sử dụng 3 keywork đó là:
   - require("path/to/file/js")
   - module.exports
   - exports 

  
 - `Chú ý: Khi Nodejs execute bất kỳ một file js nào thì trình biên dịch sẽ dịch một file như sau:`
     

```js
    var module = { exports: {} };
    var exports = module.exports;

    // your code

    return module.exports;
```
 - Bất kì một file code nào khi được dịch thì toàn bộ đoạn code của file đó sẽ được đặt ở phần `// your code` như ví dụ trên. Nghĩa là nodejs tự động chèn thêm 2 dòng sau ở phía đầu file.
   - `var module = { exports: {} };`
   - `var exports = module.exports;` 
  
 - Và dòng sau được chèn ở cuối file
   - `return module.exports;` 
  
 
 
 - `return module.exports;` : module.exports là một object, object này được return ở cuối của mọi file trong nodejs, vậy object này trả về cho ai, trả về khi nào
  => object module.exports này trả về khi require() được gọi. 

 - `require("path/to/file/abc.js")` : nhận về object `module.exports` được trả lại trong file abc.js

 - `x` là một object được gán bằng object `module.exports`

 - Bằng cách làm như trên của Nodejs, mỗi file js có để được object hóa hoàn toàn, lúc này ta có thể coi mỗi file .js như một object với những thuộc tính và function riêng, đảm nhiệm một chức năng riêng, sau đó gọi và sử dụng các object này bằng cách require()



#### Example
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

#### exports, module.exports
 - Câu hỏi: `Đã có module.exports rồi và khi require một file ta cũng chỉ nhận lại được object module.exports vậy thế exports sinh ra với mục đích gì?`
 
#### Chú ý khi sử dụng 2 biến module.exports và exports

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








