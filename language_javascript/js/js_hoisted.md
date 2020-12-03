### 1. Javascript Hoisting .
### 2. Hoisting with variable.  

--------------------------------------------------------------------------------------------

 ### 1. Javascript Hoisting. 
 
 * In short: **Hoisting đưa tất cả các biến trong 1 `scope` lên khai báo ở đầu của `scope` đó.**
 
 * Trước khi execute code, thằng JS có cơ chế pre-execute để thực hiện quá trình **hoisted** cho toàn bộ file code.js, sau đó nó mới thực sự execute code.
 
 - Hiểu đơn giản "hoisted" là một cơ chế trong cách thực thi code mà chỉ tồn tại trong JS, nó làm nhiều new dev cảm thấy "confuse" và có thể gây ra lỗi trong app nếu không hiểu rõ về "hoisted".
 
>  - Định Nghĩa 1: 
    * Hoisted Javascript là một cơ chế luôn luôn tách việc tạo ra biến thành 2 phần: 
      * phần 1: khai báo (variable declaration), 
      * phần 2: gán giá trị (variable definition)
 
 
 ### 2. Hoisting with variable.  
 
 ####  Ví dụ 1: khai báo một biến trong JS 
 
 ```js
    var name;                  // variable declaration
    name = "TuanLM vd1";       // variable definition (assignment)
```

- Ví dụ 1 ở  trên không có gì đặc biệt cả câu lệnh 1 là định nghĩa ra 1 biến, câu lệnh 2 là gán giá trị cho biến đó.


 ####  Ví dụ 2: 
 
```js
    var name = "TuanLM vd2";
```
- Ví dụ này có lẽ cũng không hề khác so với ví dụ một chẳng qua ta chỉ gộp 2 câu lệnh thành 1 câu lệnh, nhưng hãy suy nghĩ một chút về định nghĩa "Hoisted" tôi vừa đề cập rất rõ phía trên. dòng code sẽ được JS thực thi theo đúng cơ chế "Hoisted" (Cắt câu lệnh trên ra làm 2 câu lệnh riêng biệt), Nghĩa là nó sẽ được chạy như sau:

```js
    //Bước 1 : Khai báo:
    var name;

    // Bước 2: gán giá trị
    name = "TuanLM vd2";
```
  
  - Vậy nếu "Hoisted" chỉ là cơ chế cắt một câu lệnh khai báo và gán giá trị thành 2 câu lệnh đơn, một là khai báo, hai là gán giá trị thì nó cũng đâu có ý nghĩa gì lớn lắm mặt khác còn làm rắc rối và vô nghĩa, nhưng hãy cùng xét một ví dụ tiếp theo ạ

>  - Định Nghĩa 2: "Hoisted Javascript là một cơ chế luôn luôn đưa phần khai báo biến (variable declaration), lên đầu tiên của scope"


 #### Ví dụ 3 
 
```js
    console.log(name);
    
    # => Error
```

- Kết quả : Không có gì đặc biệt vì cũng giống bất kỳ trình biên dịch của những ngôn ngữ khác, bộ Interpreter của JS cũng thực thi từ Top to Bottom, nên khi không tìm thấy biến name trình biên dịch sẽ báo lỗi "name is not defined" do không tồn tại biến "name"


 #### Ví dụ 4: 
 
 
 ```js
    console.log(name);
    var name;
    
    # NOT eror
    # => undefined
```

- Kết quả : ta nhận lại đc giá trị của biến name là undefined (name = undefined), nghĩa là biến name chưa được gán giá trị, nhưng đã tồn tại

- Tại sao lại như này được , lúc này ta lại không bị lỗi như ở ví dụ 3 nữa , rõ ràng  khi chạy câu lệnh "console.log(name);" ta vẫn chưa hề chạy câu lệnh "var name;" vậy nghĩa là biến "name" chưa hề được khai báo vậy mà kết quả in ra là "undefined", có phải lần này trình biên dịch nó chuyển hướng hoặc đổi tư thế mới lại nhảy sang biên dịch từ dưới lên trên.

- Câu trả lời đó là nó vẫn biên dịch từ trên xuống dưới vẫn giữ nguyên tư thế nhưng mà trong quá trình chạy code một lần nữ lại có cơ chế của "Hoisted" xuất hiện trong đây.

- "Hoisted" mang tất cả những khai báo biến lên top của scope, cho dù ta khai báo biến ở bất kì đâu thì nó cũng sẽ được mang (move) lên đặt ở đầu tiên của scope

- Hoisted sẽ làm như sau:

    * Định Nghĩa 1: 
      * Hoisted Javascript là một cơ chế luôn luôn tách việc tạo ra biến thành 2 phần
        * phần 1: khai báo (variable declaration)
        * phần 2: gán giá trị (variable definition)"

    * Định Nghĩa 2: 
      * "Hoisted Javascript là một cơ chế luôn luôn đưa phần khai báo biến (variable declaration), lên đầu tiên của **scope**"

- Vậy một câu hỏi đặt ra như sau:

```js 
    function hello(){
        console.log(name);
        var name = "Am Handsome"
    }
```

- Bước 1 theo định nghĩa 1: cắt : 

```js
    function hello(){
        console.log(name);
        var name;
        name = "Am Handsome"
    }

```

- Bước 2 theo định nghĩa 2: move phần khai báo

```js
    function hello(){
        var name;
        console.log(name);
        name = "Am Handsome"  
    }
```

- Vậy phần gán giá trị có đc move lên đầu sope hay không, phần gán gán giá trị được xử lý như nào?

- => Câu trả lời là:  phần gán giá trị cho biến vẫn được giữ nguyên ở vị trí hiện tại

`Chú ý:`

Nếu ta có thói quen Khai báo tất cả mọi biến ở đầu scope thì lúc này hoisted sẽ không cần làm các thao tác cắt hay di chuyển phần khai báo lên top của scope nữa.







