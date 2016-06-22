**1. VARIABLE**
**2. OBJECT** 
**3. SCOPE.** 
**4. Meta-programming (Writing code dynamically)**
**5. Modules**
**6. Hook Methods**
**7. Super basic memoization** 
<hr>

**`Let's get started.`** 

**1. VARIABLE**
 
 - Trong Ruby một Object không thể access trực tiếp tới một biến trong class.
 - Bắt buộc phải viết Setter và Getter cho một biến nếu muốn access biến trong Ruby Class.

```ruby
class Test
 @x
 
 def get_x
   @x
 end
 
 def set_x value
   @x = value
 end
end
``` 

- Như ví dụ trên ta không thể accsess tới biến `@x` bằng cách `Test.new.x` mà chỉ có một cách duy nhất là
gọi qua method `get_x` và gán giá trị bằng method `set_x` (thử code đi ạ).
 
 
- Method `attr_accessor`.
 
```ruby
 class Test
   attr_accessor :x
 end
```
 - Khi sử dụng `attr_accessor` ta có thể access biến `x` bằng cách `Test.new.x`, 
 lúc này các bạn sẽ nghĩ điều này mâu thuẫn với 2 cái gạch đầu dòng bên trên vì như đã 
 nói Object không thể trực tiếp access biến `x` như vậy, mà phải thông qua Getter và Setter:
 
**Trả lời** : Khi sử dụng method `attr_accessor :x` Ruby đã ngầm định 
tạo ra hai method Setter và Getter như bên dưới, vì thế khi ta gọi `Test.new.x` 
thực chất là ta gọi đến `method x()` để access biến `x`, tương tự khi gán giá trị `Test.new.x = value` ta sẽ gọi đến `method x=()` .
     
```ruby
    #Getter
     def x 
       return @x
     end
       
    #Setter
    def x= value 
      @x = value
    end
```


**2.OBJECT** 

 - Khi dùng một Object của một class để truy xuất, Ruby luôn hiểu bạn đang truy xuất vào một `method`
 - Trong một số ngôn ngữ khác như Java, bạn không thể có hai thành phần trùng tên trong một class 
 (ví dụ khi đã có biến `x` thì bạn không thể đặt tên một method tên là **"x"**) 
 vì Java sẽ không biết bạn truy xuất thành phần nào khi bạn gọi tới `x`.

- Nhưng trong Ruby mặc định là bạn đang gọi tới một `Method`, vì vậy có thể thoải mái 
đặt tên biến trùng với tên hàm mà không sợ nhầm lẫn là đang gọi cái gì trong class.

```ruby
 class Test
    @@x
    
    def self.x
    end
 end
```
- Khi gọi `Test.x` thì Ruby sẽ hiểu ta đang access vào một method có tên là **"x"**.

- Đây cũng là một lý đo để chứng minh thêm cho việc ta 
bắt buộc phải viết Getter và Setter cho Variable trong Ruby (Vì object chỉ có thể gọi tới method mà không thể gọi trực tiếp tới biến).


**3. SCOPE.** 
 - **`Class Scope`**. (Tạo ra một vùng nhớ và đặt vào vùng nhớ đó những thành phần mà bản thân con trỏ của chính class đó có thể access)
 - **`Object Scope`**. (Tạo ra một vùng nhớ và đặt vào đó những thành phần mà `object` của class đó có thể access)
 
```ruby
class Test                                                                      
                                                                    
  attr_accessor :x                                                           
                                                                                
  @@y = 1                                                                
                                                                                
  def self.get_y                                                                        
    @@y                                                                     
  end 
  
  def get_y
    @@y
  end
end                                                                                                                                                
```

 - Khi compile một Class như trên Ruby sẽ tạo ra 2 Scope
  - Một Class Scope mà chính con trỏ `Test` trỏ tới.
  - Một Object Scope mà con trỏ Test.new (`object của Test`) trỏ tới.

 - Trong ví dụ trên: Những thành phần lằm trong `Class scope` bao gồm:
 
```ruby
   # @@ is the same static variable in Java
   @@y = 1                                                                

  #self define Class scope
  def self.get_y                                                                      
    @@y                                                                     
  end 
```
 
 - Những thành phần lằm trong `Object scope` bao gồm:

```ruby
  attr_accessor :x
  
  def get_y
    @@y
  end
```
  
- `Chú ý :` Vùng nhớ cấp cho Class scope là một vùng nhớ Share cho tất cả các Object của nó. Vì thế khi tạo nhiều Object của class Test thì tất cả các object này đều dùng chung biến `@@y`.

- `@@y` is the same static variable in Java.

![Untitled Diagram (2).png](/uploads/images/d2248e69c1a2cb4ca94c9ec9f711d05f2224b2b6/9f1b32895f423ffd32f3d85b7e8ef85c908b497e.png) 

 - t1, t2, t3 đều dùng chung biến @@y, vì @@y nằm trong Class Scope.

**Chứng minh:**

```ruby
class Test                                                                      
                                                                                
  @@y = 2                                                                       
                                                                                
  def get_y                                                                     
    @@y                                                                         
  end                                                                           
                                                                                
end                                                                             
                                                                                
t1 = Test.new                                                                   
t2 = Test.new                                                                   
t3 = Test.new                                                                   
                                                                                
p "@@y in t1: #{t1.get_y}"                                                                      
p "@@y in t2: #{t2.get_y}"                                                                      
p "@@y in t3: #{t3.get_y}"

```
Kết quả:
```bash
$ @@y in t1 : 2
$ @@y in t2 : 2
$ @@y in t3 : 2
```


**4. Meta-programming (Writing code dynamically)**

- Chắc hẳn hầu hết chúng ta đều đã nghe nói tới khái niệm **`Metaprogramming`**. Hiểu một cách đơn giản thì : 
  - `Metaprogramming` là một kĩ thuật cho phép một ta code ra một ứng dụng mà chính ứng dụng đó quản lý chính bản thân nó.
  - `Metaprogramming` là một kĩ thuật cho phép viết `code` để quản lý `code`.
  - `Metaprogramming` viết `code` để sinh ra những `code` khác, viết `code` để điều khiển những `code` khác.

For example:

```ruby
class A
  METHOD_NAMES = 

  METHOD_NAMES.each do |name|
    define_method(name) do |arg|
      "Called method #{name} with argument: #{arg}"
    end
  end
end

obj = A.new
obj.abc(42)        # => "Called method abc with argument: 42"
obj.mno('arg')     # => "Called method mno with argument: arg"
```
 - tuy ta không định nghĩa ra các hàm như 'abc', 'def', 'ghi', 'jkl', 'mno', nhưng với `Metaprogramming` 
 cụ thể là việc sử dụng method `define_method` ta sẽ dùng code để tạo ra những hàm đó.

```ruby
  METHOD_NAMES.each do |name|
    define_method(name) do |arg|
      "Called method #{name} with argument: #{arg}"
    end
  end
```

- Please sử dụng `define_method` hay `Metaprogramming` với sự cẩn trọng,
nhìn về mặt tốt thì bạn có thể thấy nó khá thú vị khi viết ít line hơn mà lại được nhiều code hơn, 
nhưng sẽ rất không ổn, phức tạp và khó khăn khi bạn thực hiện debug.


**5. Modules** 

- Có một người nói với em là "Ruby’s modules are perhaps one of the language’s most powerful features", em hiểu là : "Modules trong Ruby có lẽ chính là một trong những điểm mạnh nhất của nó".
- Là một trường hợp đặc biệt của `class` (nó là một class dặc biệt)
- Một Module là nơi chứa các `method` và các `constants`.
- Method trong Module có thể là `instance methods` hoặc `module methods`

- Sự khác biệt giữa Module với Class
  - Classes are about `objects`
  - Modules are about `functions`.
  
- Mục đích của Module là gì:
  - Module bao gồm những Method mang tính chất `dùng chung` (share) mà nhiều class đều cần sử dụng.
  Khi nghĩ tới Module có thể hiểu nó như là một nơi để `share methods`. 
  - Đóng vai trò như một `namespace` dùng để gói các class liên quan lại với nhau.
  - Xử lý việc Dupplicate code, ví dụ bạn có 2 model chứa 2 scope tương tự như: 
  - `scope :newest, ->{order("created_at DESC")}`
  - lúc này cách xử lý là tạo ra một module chung (trong Rails ActiveSupport::Concern) và `include` 
  module trong 2 model để sự dụng chung scope "newest"

- Không thể tạo Instance của module , vì vậy có thể coi Module giống `static class` trong `Java`
mọi thứ trong module đều được access qua chính tên Module


 ` Module vs Class` 
  What is the difference between `include` and `extend` in Ruby?

```ruby
module M
  def mod_method
    "Module method invoked"
  end
end

class A
  extend M
end

class B
  include M
end

A.mod_method        # => "Module method invoked"
B.new.mod_method    # => "Module method invoked"

```

- **`extend`** : mixes in specified module methods as class methods in the target class
  - `extend` : mang những method của `module` về làm `class method` trong class
<hr>
- **`include`** : mixes in specified module methods as instance methods in the target class
  - `include` : mang những method của `module` về làm `instance method` trong class


`Tip:` Chúng ta có thể `include` or `extend` một `module` bằng cách thứ 2

```ruby
module M
  def mod_method
    "Module method invoked"
  end
end

class A
end

class B
end

A.extend M
B.include M

A.mod_method        # => "Module method invoked"
B.new.mod_method    # => "Module method invoked"
```


**6. Hook Methods** 
**`What is a Hook Method?`**
 - `Hook methods` là những phương thức đặc biệt của Ruby cung cấp một cách để mở rộng hoạt động của chương trình tại thời điểm `runtime`.
 - `Hook method` giống như việc đăng kí (registry) một sự kiện và sự kiện đó sẽ được callback (fire) bởi một chỗ khác.
 - Câu hỏi : 
   - Khi bạn kế thừa một class cha từ một class con vậy bên trong việc kế thừa đó chuyện gì sẽ xảy, có hàm nào được thực thi không? hay đơn giản chỉ là từ class con có thể nhìn thấy mọi thứ của class cha.
 - Trả lời :
   - Khi trình biên dịch đọc đến dòng code mà thấy có sự kết thừa thì nó sẽ callback đến một hàm của class cha, hàm đó chính là một `hook method`
 - Chúng ta sẽ tìm hiểu về những `hook methods` bên dưới :
   - inherited
   - included
   - extended
   - prepended
   - method_missing


**`inherited`** 

 - Inheritance là một khái niệm rất cơ bản và quan trọng trong object-oriented programming.
 - Cú pháp để `inherite` trong Ruby là kí tự `<` (class A < B end)
 - Chúng ta sẽ tạo ra 2 class tên là Person và User, User sẽ kế thừa class Person vậy ngoài việc instance của class User sẽ nhìn thấy các method trong class Person, có còn điều gì xảy ra không ?


- **Khi trình biên dịch đọc đến kí tự inherite `"<"` nó sẽ tự thực hiện việc callback tới phương thức `"self.inherited"` của class cha** 

```ruby
class Person
  def self.inherited child_class
    puts "#{child_class} inherits #{self}"
  end
 
  def name
    "My name is Person"
  end
end
 
class User < Person
end
 
# => User inherits Person
```

**`included`**

- include mang tất cả những method của module về làm 'instance method' của class.
- Tương tự inherite từ một class ta `include` một module lúc này khi trình biên dịch đọc đến 
kí tự `include` thì nó sẽ callback tới method `self.included` của module cha.

```ruby
module Person
  def self.included base
    puts "#{base} included #{self}"
  end
end

class User
  include Person
end
```

**`extended`**

- extende mang tất cả những method của module về làm 'class method' của class.
- Tương tự inherite từ một class ta `extende` một module lúc này khi trình biên dịch đọc 
đến kí tự `extended` thì nó sẽ callback tới method `self.extended` của module cha.


```ruby
module Person
  def self.extende base
    puts "#{base} extended #{self}"
  end
end

class User
  extende Person
end

# => User extende Person
```

**`method_missing`**
- Là một `hook ` được sử dụng rộng rãi nhất trong `Ruby hook `
- `method_missing` được callback khi một object gọi tới một method không tòn tại.
- `method_missing` nhận đầu vào là 2 tham số :
  - tham số thứ nhất : tên của method được gọi
  - tham số thứ hai : các tham số được truyền cho method được gọi.

```ruby
class Person
  def method_missing(sym, *args)
     "#{sym} not defined on #{self}"
  end
 
  def name
    "My name is Person"
  end
end
 
p = Person.new
 
puts p.name     # => My name is Person
puts p.address  # => address not defined on #<Person:0x007fb2bb022fe0>
```

**7. Super basic memoization** 

**`||=`**
- `a ||= b` tương dương `a = a || b`
  - `x || y` => return `x`
  - `x && y` => return `y` 

**`class < < self`** 
 - Is another way of defining `class methods` in Ruby
 
```ruby
class << self
  def class_method
  end
end

# tương đương với 
class
  def self.class_method
  end
end
```
 
Reference

- http://stackoverflow.com/questions/156362/what-is-the-difference-between-include-and-extend-in-ruby
- http://stackoverflow.com/questions/156362/what-is-the-difference-between-include-and-extend-in-ruby
- http://www.sitepoint.com/rubys-important-hook-methods/
