This is the new Play application
=================================
By : Tuan LM

###*I Scala là gì ?*

- Scala là ngôn ngữ lập trình `"functional programming"`
- Kế thừa toàn bộ những gì đã có ở Java.
- Có thể dùng toàn bộ những API của java tronng một app Scala
- Là ngôn biên dịch(INTERPRETER) toàn bộ source sẽ được biên dịch sang mã máy trước khi được thực thi
- Ruby là ngôn ngữ thông dịch (COMPILER) (compile at runtime) thay vì phải dịch toàn bộ source tại thời điểm chạy đến đâu sẽ compile đến đó và trả lại kết quả ngay.
- Cách biên dịch mã code : Source -> bytecode -> machinecode
  + Source sẽ dùng scalac (tương tự javac, gcc) để dịch mã ngồn sang bytecode (mã bytecode không phải là mã máy, mã byte code chỉ JVM hiểu được) vì thế
    chỉ ccaanf có mã bytecode ta có thể chạy trên mọi nền tảng đã cài đặt JVM -> đó chính là tại sao slogan của JAVA là : *`"Viết một lần, chạy mọi nơi"`*
- Ngoài `"functional programming"` (main ideal), Scala cũng là *`object-oriented`*
- Cú pháp của scala lai giữa Java với Ngôn ngữ script

- Với các ngôn ngữ script(INTERPRETER) ta sẽ không thấy có hàm main (Không có entry point), Scala vẫn là ngôn ngữ biên dịch nên cần có một Entrypoint
- Entry point của Scala giống hàm *main* trong Java

```scala
object HelloWorld {
  def main(args: Array[String]) {
    println("Hello, world!")
  }
}
```

####*1: Scala class*

#####*Case class*
```
case class User(name: String)
```
- Case class : Là một class bình thường.
- Case class : tự động định nghĩa các getter cho những tham số có trong Constructor.
- Case class : tự động định nghĩa hai method hashcode và equals (hashcode và equals là hai phương thức của class dùng để định nghĩa ra 1 rule để xác định 2 object là bằng nhau )
- http://www.scala-lang.org/old/node/107
- http://stackoverflow.com/questions/2312881/what-is-the-difference-between-scalas-case-class-and-class

###*Scala Classes & Objects*
####*Class*
- Class là một mô tả của những object

####*Object của class*
- Object là một thể hiện cụ thể của class
- Tạo Object bằng từ khóa `new`

####*Object của scala*
- Scala cung cấp một khái niệm về Object (Object ở đây không phải là thể hiện của một class)

```scala
object Test {
   def main(args: Array[String]) {
      val pt = new Point(10, 20);

      // Move to a new location
      pt.move(10, 10);
   }
}
```

- Tương tự khái niệm `singleton objects` ta sử dụng object khi muốn Class chỉ có một thể hiện duy nhất.
- `object` có hai hàm đặc biệt :
```scala
def apply(...)
def unapply(...)
```
- Mục đích của hai hàm này là để `functional` mọi thứ vì thế giới của scala là `functional`.
- Khi gọi Test(params) thì sẽ giống như việc gọi `Test.apply(params)`.
- Object không có constructor vì mục đích của consructor là khởi tạo các thuộc tính cho một object mà bản chất object nó đã là một object cho nên
object KHÔNG có constructor.
- Tất cả các thành phần của `object` đều đc access trực tiếp qua tên của object, nó giống khái niệm `structure trong C`
hay có thể hiểu tất cả các thành phần trong `object` đều giống như `static` trong `Java`.
- Scala không có khái niệm `static method` hay `static field`
- Bản chất `object` hay class hay struct cũng chỉ là một cấu trúc dữ liệu.

####*NOTICE : *
 - Theo convention thì tên class phải trùng với tên file (được viết hoa theo cú pháp lạc đà)
 - Với Object ta cũng đặt tên object trùng với tên file , tất nhiên là viết hoa
 - Có thể đặt class và object trong cùng một file, => tên class và tên object có thể trùng nhau 

####*2: Scala Variable : var - val*
- `var` : variable
- `val` : final variable (Constant)

- Trong `Rails` với `Play`
  + @@ <=> static
  + Trong Play một biến đặt trong thân class vẫn là Instance variable.

####*3: Scala function*
#####*Định nghĩa function:*

- Cú pháp:
```scala
def functionName ([list of parameters]) : [return type] = {
   function body
   return [expr]
}
```

- Ví dụ :

```scala
object add{
   def addInt(a:Int, b:Int): Int = {ệnh
      var sum:Int = 0
      sum = a + b

      return sum
   }
}
```
- *Chú ý:*
  + `def addInt(a:Int, b:Int): Int = {}` tương đương `def addInt(a: Int, b: Int) : Int = {}`
  + Tên biến và kiểu dữ liệu có thể cách nhau bởi dấu `:` hoặc đấu hai chấm và đấu cách `: ` .

- Nếu phần thân của hàm chỉ có 1 câu lệnh thì ta không cần dấu `{ }` , ví dụ:
  ```scala
    def all(): Future[Seq[User]] = db.run(Users.result)
  ```


#####*Symbol { }*

######*Use case 1*

- Mục đích của `{ }` chỉ là để gói lại các câu lệnh với nhau.
- Sử dụng khi một hàm có nhiều hơn 1 câu lệnh

```scala
def addInt(a:Int, b:Int): Int = a + b
```
Or
```scala
def addInt(a:Int, b:Int): Int = {
  var c = a + b
  ...
  ...
  println(c)
}
```
######*Use case 2*
- Gọi hàm
```scala
println("Hello")
```
The same

```scala
println{"hello"}
```

#####*Symbol [ ]*
######*Use case 1*
- Mô tả kiểu dữ liệu
  + ví dụ :
  ```java
    List<User> users = new AralyList<Users>();  ------------> Seq[User]
    List<String>                                ------------> List[String]
  ```

#####*Unit*

- Kiểu dữ liệu `Unit` tương tự kiểu `void` trong Java, khi một hàm không cần trả về gía trị ta có thể dùng
```scala
object Hello{
   def printMe( ) : Unit = {
      println("Hello, Scala!")
   }
}
```
- Calling Functions: (list of parameters cách nhau bởi dấu phẩy)
```scala
functionName( list of parameters )
```

- Calling Functions theo instance :
```scala
[instance.]functionName( list of parameters )
```
- Scala Default Parameter Values for a Function
 + Trong trường hợp bạn muốn có những parameter default cho một function nghĩa là khi gọi tới function mà không truyền vào params thì giá trị của params mặc định được gán :
 + Trong ví dụ sau dù không truyền prams vào hàm addInt() nhưng ta vẫn có những params được khoải tạo giá trị theo giá tri mặc định:
 ```scala
 object Test {
    def main(args: Array[String]) {
         println( "Returned Value : " + addInt() );
    }
    def addInt( a:Int=5, b:Int=7 ) : Int = {
       var sum:Int = 0
       sum = a + b

       return sum
    }
 }
 ```

#####*Anonymous Function Syntax*
- Tại sao lại cần `Anonymous Function` : Khi ta viết một hàm mà hàm đó chỉ sử dụng một lần duy nhất thì ta nên viết hàm đó dưới dạng `Anonymous Function`
- Ví dụ :
```scala
def abc(x: Int): Int = x + 1
```
- Nếu hàm `abc` chỉ được dùng một lần thì ta có thể viết dưới dạng `anonymous`
```scala
(x: Int) => x + 1
```

```scala
(x: Int) => {
  var t = x + 1
  printf(t)
}
```
#####*NOTICE:*

```scala
val f2 = (x:Int) => x + 1
//tương đương :
def f2 (x:Int) = x + 1
```

- Bỏ từ khóa `def`
- Bỏ tên hàm
- chuyển `=` thành `=>`

#####*Assign an object representing the function to a variable*
- Gán một Object đại diện cho một anonymous Function

```scala
val f2 = (x:Int) => x + 1
//tương đương :
def f2 (x:Int) = x + 1
```
- Gọi hàm `f2` : `f2(1)`

- Định nghĩa một tên cho một function
```scala
def f1 (x:Int) = x + 1
```
- Gọi hàm `f1` : `f1(1)`


#####*Anonymous Class Syntax*

- *In Java :*
```java
button.addActionListener(new ActionListener(){
  def actionPerformed(e: ActionEvent){
    // do something.
  }
});
```

- *In Scala*
- Mọi thứ được viết một cách `Implicit`
```scala
button.addActionListener(e => /* do something */)
```

####*Symbol =>*
- An action is essentially a (Request[A] => Result) function that handles a request and generates a result to be sent to the client.
- Action chứa một function, function này có đầu vào là một biết kiểu `Request` và giá trị trả về có kiểu `Result`
```scala
def index = Action.async { implicit request =>
  userDao.all.map{users => Ok(views.html.users.index(users)).flashing("success" -> "Got all")}
}
```

####*Apply function*
- https://en.wikipedia.org/wiki/Apply

#####*apply function chỉ dùng cho object, nó chính là constructor của object*

#####*Constructor của Class khác với Constructor cú Object, mục đích của hàm appy là để làm cho object cũng có Constructor*

- Mục đích của `apply function` là để thư hẹp khoảng cách giữa lập trình hướng đối tượng với lập trình hướng chức năng.
- apply serves the purpose of closing the gap between Object-Oriented and Functional paradigms in Scala
- So apply method is just a handy way of closing the gap between functions and objects in Scala.
- `apply` : Là hàm mọi object đều có.
- `apply` : để biến mọi thứ đều là function. => biến một object cũng thành một function.


- Ví dụ với object của một class:
```scala
class Person{
  def apply(x: Int) = x + 1
}
var obj = new Person()
var y = obj(4) // equivalent to obj.apply(4)
// Bản chất là gọi hàm apply
```
- Ví dụ với một object
```scala
object Person{
  def apply(x: Int) = x + 1
}
var x = Person(4) // equivalent to Person.apply(4)
var x = Person{4}
// Bản chất là gọi hàm apply
```

####*Action object with apply method*

#####*object Action*

- `Action` ở đây là một object : https://www.playframework.com/documentation/2.3.x/api/scala/index.html#play.api.mvc.Action$
- http://stackoverflow.com/questions/28247560/what-does-the-word-action-do-in-a-scala-function-definition-using-the-play-fra
- https://www.playframework.com/documentation/2.0/ScalaActionsComposition
- Mục đích của từ `Action` trong đoạn code bên dưới để làm gì :

```scala
def index = Action {
  Ok(views.html.index("Hi there"))
}
```
The same:
```scala
def index = Action({
  Ok(views.html.index("Hi there"))
})
```
- => vì Action là một object nên khi gọi Action{} thực chất là ta đang gọi Action.apply()

- *Vậy kết luận : `index` bên dưới chính là kết quả trả về của hàm apply trong `object Action`, hay nó chính là một object kiểu `Action`*

```scala
def index = Action {
  Ok(views.html.index("Hi there"))
}
```
#####*Hàm apply trong object Action*

- Hàm apply trong Action là : *`Hàm nhận tham số là một hàm`*
- Hàm apply trong object Action nhận vào tham số là một `anonymous function`

```scala
final def apply(block: (Request[AnyContent]) ⇒ Result): Action[AnyContent]
//Constructs an Action with default content.

For example:

val echo = Action { request =>
  Ok("Got request [" + request + "]")
}

//block: the action code (thân của hàm apply)
//returns: an object action
```


####*Constructor function (Java - Scala)*
- Constructor of scala id definded right after class name
- Constructor With params:
```scala
class Person(name: String, age: Int)
```

The same :

```java
class Person {
  public Person(String name, int age) {
  }
}
```
- Contructor With var params:
```scala
class Person(var name: String, var age: Int) // also we can use 'val'
```
The same:

```java
class Person {
  String name;
  int age;

  public Person(String name, int age) {
     this.name = name;
     this.age = age;
  }
}
```

####*Implicit in scala*
- http://stackoverflow.com/questions/10375633/understanding-implicit-in-scala

###-----------------------------------------------------------------------------

###*II : Play framework*

####*Kiến trúc PLAY Framework*
- Kiến trúc của Play là MVC


  + Folder

####*A : Play framework là gì*
- *Play* là một framework Web cho build một Web app với Java hoặc Scala.
- Kiến trúc : MVC

####*B : Play framework globle variable*

- Tương tự với JSF hay JEE, Play định nghĩa ra một số biến đặc biệt:
  + controllers : Quản lý tất cả các object thuộc về namespace (package) Controller
  + views : Quản lý tất cả các object thuộc về namespace (package) View
  + models : Quản lý tất cả các object thuộc về namespace (package) Model
  + routes : Quản lý các path trong việc định nghĩa URL
  + request (play.api.mvc.Http) quản lý các request từ client lên server (lấy ra các params từ client gửi lên) => *Tương tự việc ta lấy params trong Rails *

####*C : Play framework @ for embed code*
- Vì là Web platform nên việc nhũng code Scala với code HTML là điều cần có vì vậy :
  + Nếu trong PHP ta dùng <? code PHP ?> để nhúng code PHP vào HTML thì trong Scala ta dùng @
  + `@` để đánh dấu (mark) là đoạn code phía sau nó là Scala.

####*D : Play framework @ View Params*
- Theo kiến trúc của Play:
  1> Request từ client
  2> Routers sẽ phân tích request để mapping vào một Action của một Controller
  3> Gửi toàn bộ request, params, data... đó đến Action của Controller đã được map
  4> Controller thao tác với Model để lấy data từ DB
  5> Gọi đến Viewer để sinh ra mã HTML
  6> Trả mã HTML về Client

- Ở những bước trên khi Controller gọi đến view để sinh ra một trang HTML thì ta phải truềy theo dữ liệu đến View đó
  + Chú ý: trong Rails mặc định các instance variable trong acction của controller sẽ được tự pass cho view tưng ứng, nhwung Play không có nên nó mới sinh ra khái niệm "View parameter"

  - Ví dụ: File index.scala.HTML

  ```scala
  @(user: User)(content: Html)
  //HTML code
  //@  scala code
  ```  

  - Trong ví dụ trên :   @(user: User)(content: Html) chính là việc định nghĩa view index.scala.html sẽ nhận vào một object kiểu User và một object kiểu Html

- Để từ Controlller truyền params vào view ta sẽ là tương tự

```scala
def index = Action { implicit request =>
  Ok(views.html.homes.index("hello"))
}
```

####*E : Play framework Flash/Sesion*
- Theo cơ chế hoạt động của HTTP thì mỗi Request là độc lập với nhau ta không lưu dữ liệu giữa 2 request, nghĩa là những dữ liệu mà request thứ nhất có thì khi thực hiện request tiếp theo
toàn bộ sẽ được làm mới từ đầu và request thứ 2 không liên quan gì tới request thứ nhất.
- Một điều đặt ra là để lưu lại dữ liệu giữa nhiều request : ta có 2 cách:
  + Sử dụng seesion (rất gần gũi)
  + Sử dung Flash
- Seesion lưu thông tin của cả một phiên giao dịch gữa client và server
- Flash chỉ lưu thông tin của 2 request liền nhau
- Flash store data theo cấu trúc key-value

```scala
flash.get : (sesion.get) lấy ra giá trị đã save trong flash
flash.flashing gán giá trị vào hash trong biến flash
```  

- Flash sử dụng khi bạn muốn thông báo một vấn đề fail mà người dùng thực hiện ở request trước đó : ví dụ như tạo form mà có trường nhập vào fail.

####*F : Play framework Entrypoint*

- project/build.sbt : File được chạy đầu tiên trong play:
  + libraryDependencies: Định nghĩa các thư viện sẽ được dowload về từ Maven reposite và add vào classpath của project
  + Runtime Dependency Injection

####*G : Play framework Actions, Controllers and Results*
#####*#What is an Action?*
   - Mỗi `request` từ client gửi nên sẽ được `Router` phân tích và forward đến một `Action`
   - `Action` là một class cụ thể trong layer Controller , đảm nhận việc handle các request
   - *Action = Request => Result* (play.api.mvc.Action = play.api.mvc.Request => play.api.mvc.Result)
   - *Action* nhận đầu vào là một đối tượng *Request* và đầu ra là một đối tượng *Result*

- Với Action thiếu đầu vào như bên dưới ta sẽ không thể nhận được dữ liệu từ client gửi lên, hay tham số đầu vào `request` là nil:
```scala
  Action {
    Ok("Hello world")
  }
```

- Với để đón được những dữ liệu từ client gửi lên theo Http ta cần một đối tượng của class Request như bên dưới:

```scala
Action { request =>
  Ok("Got request [" + request + "]")
}
```

- Để đánh dấu (mark) các tham số của request có thể là `implicit` ta dùng từ khóa `implicit`:
- Viêc này dùng khi view nhận vào tham số kiểu `implicit` :

```scala
@(users: List[User])(implicit flash: Flash, lang: Lang)
```
```scala
Action { implicit request =>
  Ok("Got request [" + request + "]")
}
```

####*D : Play framework - Some common Class, Trait*

#####*Trait in Scala :*
- Giống như Interface trong Java
- Không có Contructor
- Dùng để Chỉ định nghĩa ra các hàm, tất nhiên các hàm này sẽ được cài đặt tại class
- Một điểm khác với Interface trong Java thì : Trait cho phép cài đặt code

#####*Common class:*
- play.mvc.results.Action   : một action trong controller

  ```
  val echo = Action { request =>
    Ok("Got request [" + request + "]")
  }
  ```
- play.mvc.results.Request  : một request được gửi tới controlller

  ```
  Action { request => play.mvc.results.Result}
  ```

- play.mvc.results.Result   : kết quả trả về của một action

  ```
    Ok("Got request [" + request + "]")
  ```
- `Ok` extends Result: Ok là một class kế thừa `Result` : play.mvc.results.Result extended by play.mvc.results.Ok

####*M: Java - Scala*
#####*Action*

```java
public static Result index(){
  return ok("Got request " + request() + "!");
}
```
```scala
val index = Action { request =>
  Ok("Got request [" + request + "]")
}
```

####*V: Managing library dependencies*
- Trong Rails ta có `bundle` để quản lý các gem của 1 project
- Trong java ta có `Maven` để quản lý các lib của project

- => việc sử dụng các tools để quản lý project giúp ta rất nhiều khi làm việc theo team mà sử dụng nhiều
  lib , plugins , các tools sẽ giúp các team có một chuẩn thống nhất về việc dùng thư việc thứ 3 về cả mặt version lẫ nguồn.

#####*library dependencies trong Play*
- Khi tạo thư mục /lib và đặt các jar file trong thư mục này thì chúng sẽ tự động được add vào classpath và bạn có thể sử dụng bình thường.
Nhưng vấn đề ở đây là thư việc đó chỉ có trên máy bạn và viecj chia sẽ các thư việc khi dùng kiểu này sẽ hơi bất tiện.
- `Play` cũng có một cách quản lý thư viện của nó giống như `bundle` của `Ruby`:  đó là /build.sbt

```scala
libraryDependencies ++= Seq(
  "mysql" % "mysql-connector-java" % "5.1.27"
)
```
- Khi dùng thư viện bằng `build.sbt` thì `Play` sẽ lấy các thư viện từ reposite của Maven., và chúng ta sẽ thống nhất về cả nguồn và version rong nhiều team.
#####*/project/plugins.sbt*
- Các thư viện chuẩn của play sẽ được cài đặt từ server của Play và ta sẽ định nghĩa trong file plugins.sbt

```scala
// The Play plugin
addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.4.2")
// web plugins
addSbtPlugin("com.typesafe.sbt" % "sbt-coffeescript" % "1.0.0")
addSbtPlugin("com.typesafe.sbt" % "sbt-less" % "1.0.6")
addSbtPlugin("com.typesafe.sbt" % "sbt-jshint" % "1.0.3")
addSbtPlugin("com.typesafe.sbt" % "sbt-rjs" % "1.0.7")
addSbtPlugin("com.typesafe.sbt" % "sbt-digest" % "1.1.0")
addSbtPlugin("com.typesafe.sbt" % "sbt-mocha" % "1.1.0")
```
#####*build.sbt*
- Các thư việc từ bên thứ 3 (third party) (thường là file .jar sẽ đặt trên server của Maven), khi muốn cài đặt các thư viện này ta sẽ đặt trong `/build.sbt`
```scala
name := """project3"""
version := "1.0-SNAPSHOT"
lazy val root = (project in file(".")).enablePlugins(PlayScala)
scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  specs2 % Test,
  "mysql" % "mysql-connector-java" % "5.1.27",
  "com.typesafe.play" %% "play-slick" % "1.0.1"
)
resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"
routesGenerator := InjectedRoutesGenerator

//Comment
```

###*III : Play with Database*
####*ORM - DAO*
#####*DAO - data access object*
- Play kế thừa toàn bộ từ Java vì thế để tương tác với DB Scala Play sử dụng khái niệm DAO (Data access object) để interact với DB,
- Thư viện sử dụng : JDBC (sql server, Mysql ...)
- Dev vẫn phải hiểu cả về ngôn ngữ SQL (ngôn ngữ để query vào DB mà app sử dụng)
- DAO đơn giản chỉ là một công cụ chuyển những câu query từ App sang cho hệ quản trị CSDL để thực thi , sau đó dữ liệu từ Hệ quản trị CSDL gửi về sẽ
được convert sang thành một Object của App.
#####*ORM - object relational model*
- Hiện nay DAO đã không còn được sử dụng nhiều do nó khá rườm rà trong việc access với db
- Với các ứng dụng thông qua DAO, Ngoài MVC ta phải sử dụng thêm một package có tên là `daos` để chứa các class ánh xạ với các class trong tầng Models để access vào DB
- Khái niệm ORM Hoạt động khác hẳn DAO, DEV không hề cần có kiến thức về SQL, tất cả các câu lệnh truy vấn đã được cài đặt thành các hàm của chính ngôn ngữ lập trình mà Dev đang dùng
#####*Play-Slick*
- Là một Tool sử dụng khái niệm ORM để access vào DB.
- Slick bản chất vẫn dùng JDBC để tạo ra query tương tác với DB nhưng nó đã gói những query này vào những hàm theo cú pháp Scala (Mục đích là che đi các câu SQL)
là cho Dev tiện lợi và dễ dàng trong việc tương tác với DB

*Setup*
- Vì Slick là thư viện của bên thứ 3 cung cấp nên ta đặt trong `build.sbt` :
```scala
libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  specs2 % Test,
  "com.typesafe.play" %% "play-slick" % "1.0.1"
)
```

*JDBC driver dependency*
- Trong Java có rất nhiều loại JDBC : ứng với mỗi loại DB lại có một `JDBC` riêng
- Ví dụ :
  + JDBC for Mysql
  + Jdbc for Sql server
   + JDBC for Oracle  
- Play -slick không cố định sử dụng trong nó một loại JDBC nào mà khi thao tác với loại DB nào ta sẽ chỉ ra JDBC cho Slick đó sử dụng.
- Ví dụ khi sử dụng Mysql database ta sẽ add thêm `Mysql jdbc ` cho `Slick`
```scala
libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  specs2 % Test,
  "mysql" % "mysql-connector-java" % "5.1.27",
)
```

####*Database Configuration*
- Tương tự file `database.yml` của Rails để config thông tin về database sẽ sử dụng ta sẽ config trong file `application.conf`
- Có một các khác để tách file config database ra bên ngoài file `application.conf`
- Tạo ra một file có tên là `database.conf`

```scala
//database.conf
slick.dbs.default.driver=com.mysql.jdbc.Driver
slick.dbs.default.url="jdbc:mysql://localhost:3306/enfit_development"
slick.dbs.default.user="root"
slick.dbs.default.password="root"
slick.dbs.default.logStatements=true
```
- Trong file `application.conf` ta sử dụng `include "database.conf"`

```scala
include "database.conf"

play.crypto.secret = "changeme"
play.i18n.langs = [ "en" ]

#comment

```

- Tương tự như `Rails` ta có thể định nghĩa nhiều Database sẽ sử dụng trong project

```scala
slick.dbs.default.driver=com.mysql.jdbc.Driver
slick.dbs.default.url="jdbc:mysql://localhost:3306/enfit_development"
slick.dbs.default.user="root"
slick.dbs.default.password="root"
slick.dbs.default.logStatements=true

slick.dbs.test.driver=com.mysql.jdbc.Driver
slick.dbs.test.url="jdbc:mysql://localhost:3306/enfit_test"
slick.dbs.test.user="root"
slick.dbs.test.password="root"
slick.dbs.test.logStatements=true
```

- Prefix `slick.dbs` là keyword chỉ ra đây là config của `Slick`
- `slick.dbs.default` : Config cho database default
- `slick.dbs.test` : Config cho server database test

TODO : Chi tiet ve playslick

####*Kiến trúc DAO trong Play-Slick*
- Thành phần:
  + 1 Model : Thể hiện các trường trong DB
  + 1 DAO tương ứng : 1 Model sẽ được mapping với một DAO, DAO sẽ chứa tất cả các method access với Database

- Model : các field sẽ tương ứng với các trường trong DB
```scala
package models

case class User(id:Long, name: String, age: Int)
```

- DAO : Toàn bộ code thao tác với database :

```scala
package daos

class UserDAO extends HasDatabaseConfig[JdbcProfile]{
  protected val dbConfig = DatabaseConfigProvider.get[JdbcProfile](Play.current)
  import driver.api._

  private val Users = TableQuery[UsersTable]

  def all(): Future[Seq[User]] = dbConfig.db.run(Users.result)

  def find(id:Long): Future[User] = dbConfig.db.run(Users.filter(_.id === id).result.head)

  def create(user:User): Future[Unit] = dbConfig.db.run(Users += user).map { _ => () }

  def destroy(id:Long) = dbConfig.db.run(Users.filter(_.id === id).delete)

  private class UsersTable(tag:Tag) extends Table[User](tag, "user") {
    def id = column[Long]("ID", O.PrimaryKey, O.AutoInc)
    def name = column[String]("NAME")
    def age = column[Int]("AGE")
    def * = (id, name, age) <> (User.tupled, User.unapply _)
  }
}

```

- Trong DAO ta sẽ ánh xạ Model với các trường trong DB
  + tag: tên bảng trong DB
  + def id = column[Long]("ID", O.PrimaryKey, O.AutoInc) : định nghĩa các trường trong db ứng với các thuộc tính của Model
```scala
private class UsersTable(tag:Tag) extends Table[User](tag, "user") {
  def id = column[Long]("ID", O.PrimaryKey, O.AutoInc)
  def name = column[String]("NAME")
  def age = column[Int]("AGE")
  def * = (id, name, age) <> (User.tupled, User.unapply _)
}
```


####*Hàm Form. fold - Validate form - Tham số của một hàm là một hàm (Hàm đóng vai trò làm parameter)*
- Ví dụ hàm `fold` của `play.api.data.Form`
```scala
def fold [R] (hasErrors: (Form[T]) ⇒ R, success: (T) ⇒ R): R
```
- Handles form results. Either the form has errors, or the submission was a success and a concrete value is available.

- For example:
```scala
  anyForm.bindFromRequest().fold(
     f => redisplayForm(f),
     t => handleValidFormSubmission(t)
  )
```
 + R : common result type
 + hasErrors : a function to handle forms with errors
 + success : a function to handle form submission success
 + returns : a result R.

- hàm này nhận vào 2 tham số là 2 anonymous function
  + anonymous function 1: Khi validate có lỗi : có dạng `f => redisplayForm(f)`
    + f chính là form với những gia trị đã được input
    + redisplayForm(f) : Một hàm để xử lý sau khi validate
  + anonymous function 2 : Khi validate Ok : `t => handleValidFormSubmission(t)`
    + t : là đối tượng Model được validate (User , Product)
    + handleValidFormSubmission : hàm xử lý khi success

####*Anonysmous function á Parameter*

- Hàm Form.fold nhận vào tham số là một hàm anonymous vì thế ta chỉ quan tâm đến phần trước dấu => và phần cuối cùng sau dấu =>
- Ví dụ :

```scala
form.fold(
  hasErrorsForm => Redirect(routes.Users.edit(id)).flashing(Flash(hasErrorsForm.data) + ("error" -> "Please corect the erors in the form"))
,
  user =>
    userDao.update(id)(user)
  }
)
```

- Như ví dụ trên
```scala
user =>
  userDao.update(id)(user)
```
  + chính là cấu trúc của anonymous hàm phần tham số là : user
  + phần thân là một hàm khác : userDao.update(id)(user)

####*Hàm `map` trong Action*
- Our new action makes use of the fact that findByEan returns the product wrapped in
an Option , so that we can call the Option.map method to transform it into an Option
containing a page that shows the product details. This rendered page is then returned
as the action’s result by the call to getOrElse . In the case that the product wasn’t
found, findByEan will have returned a None whose map will return another None whose
getOrElse returns its parameter— NotFound in this case.

- Success :
```Scala
def show(id:Long) = Action.async { implicit request =>
  var user = userDao.find(id)
  user.map {
   user => Ok(views.html.users.show(user))
  }
}
```
- Fail:
```Scala
def show(id:Long) = Action.async { implicit request =>
  var user = userDao.find(id)
  user => Ok(views.html.users.show(user))
}
```

####*Action.async*
- http://stackoverflow.com/questions/24166136/what-effect-does-using-action-async-have-since-play-uses-netty-which-is-non-blo
- Sự khác biệt giữa
```scala
def index = Action { ... }
```
vs
```scala
def index = Action.async { ... }
```
- Khi thao tác với database thì Play-slick luôn trả về kiểu `Result` là `Future[SimpleResult]`, mà một `Action` lại trả về `SimpleResult`
vì vậy mục địch `async` là để xử lý việ đồng bọ hóa kiểu giá trị trả về giữa play-slick với Action của Play.

####*Form helper*
- Play hỗ trợ form helper trong việc tạo form và validate các giá trị trong form.
- Một form helper gồm 2 thành phần :
  + 1 > Phần định nghĩa validate (Điịnh nghĩa trong controller)
  + 2 > Phần hiển thị trên view
- Phần 1 định nghĩa :
  + Tham số tryền vào là một Model
  + Form sẽ validate cho các trường trong Model
```scala
private var validateUserForm: Form[User] = Form(
  mapping(
    "id" -> ignored(-1L),
    "name" -> nonEmptyText,
    "age" -> number
  )(User.apply)(User.unapply)
)
```

- Phần 2 : Hiển thị
  + View nhận tham số đầu vào chính là một form đã được định nghĩa các validate
  + Đối tượng helper sẽ generate ra các item dựa vào form đã validate

```scala
@(validateUserForm: Form[User])(implicit flash: Flash, messages: Messages)
@import helper._
@import views.html.layout._

@layout.main(""){
  @helper.form(action = routes.Users.create()) {
    <fieldset>
      @helper.inputText(validateUserForm("name"))
      @helper.inputText(validateUserForm("age"))
    </fieldset>
    <input type="submit" value="Create" class="btn btn-primary">
  }
}

```

####*Cách hiển thị Flash khi validate form*
- Bước 1 : tới acction new => hiển thi một form đã được định nghĩa validate
- Bước 2 : nhập dữ liệu vào form => submit
- Bước 3 : form được gửi tới action create
- bước 3 : ở trong action create ta kiểm tra dữ liệu nhập vào với validate
- bước 4:  nếu bước 3 validate success , nếu bước 3 validate fail
  + bước 4.1 : success : sử dụng DAO để thao tác với DB
  + Bước 4.2 : Fail : Gọi lại tới action view (làm lại từ đầu)

- => Vấn đề ở bước 4.2 : làm thế nào để giữ lại thông tin mà người dùng đã nhập vào : => Ta sẽ sử dụng Flash
- Như đã nêu ở trên Flash là một cơ chế cho phép truyền dữ liệu ở một request này theo request ngau sau nó
- Bình thường 2 request luôn luôn là độc lập nhưng Flash hỗ trợ để store data giữa 2 request liên tiếp.

####*Restful với Play*
- Play hoàn toàn hỗ trợ restful ở phía server
- Có đầy đủ Delete, Put, Post, Get ...
- Nhưng ở phía client (Link, Form) thuộc về view thì nó không hề hỗ trợ
- Cụ thể : khi định nghĩa một action với method là delete trên Server play và sau đó sử dụng `curl -XDELETE "LINK_TO_SERVRT"` thì ta thấy action với method delete
đó dẽ được gọi
- Vấn đề là : Làm cách nào để View (Form, Link) gửi được các methos đó lên server vì mặc định HTML chỉ gửi đc get, pót theo link hay form
