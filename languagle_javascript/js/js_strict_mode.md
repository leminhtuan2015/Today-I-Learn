#### Strict Mode in Javascript "use strict";
#### Declaring Strict Mode
#### References
  - https://msdn.microsoft.com/library/br230269(v=VS.94)
---------------------------

#### Strict Mode in Javascript "use strict";

##### Overview
- Strict Mode là một tập hợp các quy ước để code được tốt đẹp hơn, Strict Mode sẽ ra lỗi khi  gặp những đoạn code không an toàn.
- Strict Mode được tạo ra để giúp bạn tránh được một số lỗi không đáng có khi làm việc với Javascript, dễ dàng viết code Javascript an toàn hơn, cũng như giúp phong cách code của bạn trở nên mạch lạc, dễ đọc hơn.
- Nếu bạn hỏi có nên sử dụng Strict Mode không thì theo mình, câu trả lời đơn giản là: **CÓ**
- Mọi browser hiện đại ngày nay đều đã support Strict Mode

##### What is Strict Mode
 - Strict Mode was introduced in **ECMAScript 5**
 - Strict mode makes it easier to write "secure" JavaScript.
 - Strict mode changes previously accepted "bad syntax" into real errors  => Change **bad code** of < ECMAScript 5 into **errors**
 - **Strict mode code** and **non-strict mode code** can co-exist
 - Strict mode makes several changes to normal JavaScript semantics
   - Strict mode fixes mistakes that make it difficult for JavaScript engines
   - Strict mode is a way to introduce better error-checking into your code
 - When you use strict mode, you **cannot**, for example:
   - Cannot use implicitly declared variables
   - Cannot assign a value to a read-only property
   - Cannot add a property to an object that is not extensible
   
   
#### Declaring Strict Mode
 - The **scope of a strict mode** declaration depends on its context
 - To invoke strict mode for an entire script, put the exact statement **"use strict"; (or 'use strict';)** before any other statements.
 
 ```js
   // Whole-script strict mode syntax
   
  'use strict';
  
  var v = "Hello";  // OK
  
  x = 3.14;         // Error
 ```
 
 - If **Strict Mode** is declared in a function, all the code in the function is in strict mode
 
 ```js
 function testFunction(){
    "use strict";
    var x = 5;       // OK
    y = 4;           // Error
    return testvar;
}
 ```
 
 ```js
 x = 3.14;       // OK
 myFunction();

function myFunction() {
   "use strict";
    y = 3.14;   // Error
}
 
 ```
 
 
 
 
 
 
 
