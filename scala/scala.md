## *Câu hỏi*
#### 1. Typesafe Inc.
#### 2. Có ranh giới giữa Scala và Java ?
#### 3. SBT (Scala build tool).
#### 4. Typesafe Activator.
#### 5. Nhúng Java vào Scala.
#### 6. Method trong Scala.
#### 7. Object trong Scala.
#### 8. Future trong scala. (Non-Blocking)
#### 9. Sử dụng thư viện của java trên Maven reposite cho Scala
#### 10 .Thanks

## *Trả lời*
### 1. Typesafe Inc.
- `Typesafe Inc` Là công ty xây dựng ra Scala language (https://www.typesafe.com/)
- Cũng đồng thời là công ty tạo ra `Play framework`
- Ngoài ra Typesafe còn cung cấp thêm một số tool phổ biến như :
  + SBT : Scala build tool.
  + Slick : Functional Relational Mapping for Scala.
  + Eclipse for scala

### 2. Có ranh giới giữa Scala và Java ?
- Như đã biết Scala base trên Java, code scala sẽ được chạy trên JVM, Scala kế thừa được tất cả những
  gì mà Java đã có
  => Không hề có một ranh giới nào giữa Scala với Java
    + Có thể nhúng thoải mái code Java vào Scala và ngược lại
    + Có thể sử dụng toàn bộ những gì Java có trong Scala,
    + Có thể import một file `.java` vào file `.scala`
    + Có thể sử dụng các thư viện `.jar` của Java vào một project Scala
    + Có thể Sử dụng toàn bộ thư viện trên `Maven repository` trong Scala app.
    
### 3. SBT (Scala build tool).
#### *What is SBT ?*
  - SBT là một open-source tool cho Scala và Java project
  - SBT tương tự
    + Maven - Java
    + Ant - Java
    + Make - Linux
#### *What is it use for ?*
  - SBT dùng để build ra một project Scala/Java
  - SBT quản lý các thư viện trong một project Scala/Java (tương tự bundle-ruby)

#### *Install SBT*

```shell
  echo "deb https://dl.bintray.com/sbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list
  sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 642AC823
  sudo apt-get update
  sudo apt-get install sbt
```
#### *How to use ?*
  - SBT cho pháp định nghĩa ra một mô tả về project trong file `build.sbt`
  - Chạy project, test, build, compile ...., Manage library.
  - Tạo một project Scala bằng sbt

  ```
  $ mkdir hello
  $ cd hello
  $ vim build.sbt
  $ mkdir -p src/main/scala/
  $ sbt run
  ```
  + => sau khi chạy những command trên thì `sbt` đã tạo ra một scala project trong folder `hello`
  + Code ta tạo những file `.scala` và đặt trong src/main/scala
  + Chú ý : SBT ngu hơn maven hay những tool khác : nó không hề tạo cho chúng ta
    cấu trúc của 1 project (project layout folder)
    mà ta phải tạo bằng tay, thằng sbt nó dùng để chạy, build, test, quản lý thư viện.....

#### *Cú pháp một file .stb*

```scala
// Set the project name to the string "my-project" and the version to 1.0.0.
name := "my-project"
version := "1.0.0"
// Add a single dependency, for tests.
libraryDependencies += "junit" % "junit" % "4.8" % "test"

// Add multiple dependencies.
libraryDependencies ++= Seq(
  "net.databinder" %% "dispatch-google" % "0.7.8",
  "net.databinder" %% "dispatch-meetup" % "0.7.8"
)
```

#### *SBT Commands*
- `sbt clean` : Deletes all generated files (in the target directory).
- `sbt compile` : Compiles the main sources (in src/main/scala and src/main/java directories).
- `sbt run` : Runs the main class for the project in the same virtual machine as sbt.
- `sbt console` : tarts the Scala interpreter with a classpath including the
  compiled sources and all dependencies

#### *SBT with libraries (libraryDependencies)*
- Khi muốn dùng một thư viện nào đó ta sẽ khai báo thư viện muốn dùng trong file `build.sbt`

```scala
libraryDependencies ++= Seq(
   "net.debasishg" %% "redisclient" % "3.0"
)
```
- Sau khi khai báo thêm mới (hoặc thay đổi version của thư viện)
  trong file `build.sbt` ta chạy `sbt run` thì tự động thư viện sẽ được tìm kiếm trên reposite
để dowload về hoặc được update version.

![Lib](https://raw.githubusercontent.com/leminhtuan2015/scala-redis/master/lib.png)
    
### 4. Typesafe Activator.
####*What is it ?*
  - Là một tool dùng để tạo ra một `Play project`
  - `activator` : Base trên `sbt`
    + Tương tự như `rails new` trong Rails framework ta có : `activator new` trong Play

#### *Install*
  + step 1: Dowload from > https://www.typesafe.com/get-started
  + step 2: Sau khi nhận được 1 thư mục activator sẽ chứa một file `activator`
  + Để sử dụng ta sẽ buildpath vào .bashrc để dừng ở mọi nơi (nếu không mỗi khi dùng
    activator ta sẽ phải trỏ vào tận link tuyệt đối của
    file chứa activator.)

#### *How to use :*
  + activator new => create a play project  (rails new)
  + activator run => run a project Play     (rails server)
  + activator shell  => interact with project by terminal (rails console gọi irb)  
    `activator shell` gọi `sbt`
    
### 5. Nhúng Java vào Scala.
    
- Ví dụ ở đây là : Trong một project Scala ta muốn sử dụng Date trong Java để xử lý dữ liệu kiểu Date
- Tạo file `UtilLogic.scala`

```scala
package logics;

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.text.SimpleDateFormat;
import java.text.DateFormat;
import java.util.Date;
import java.text.ParseException;

object UtilLogic {
  def getAge(birthDate: String): Int = {
    var formatter = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");
    var cal1 = Calendar.getInstance();
    try{
      var date = formatter.parse(birthDate);
      cal1.setTime(date);
    }catch{
      case e: ParseException => e.printStackTrace();
    }
    var cal = new GregorianCalendar(cal1.get(Calendar.YEAR),
      cal1.get(Calendar.MONTH), cal1.get(Calendar.DATE));
    var now = new GregorianCalendar();
    var res = now.get(Calendar.YEAR) - cal.get(Calendar.YEAR);
    if ((cal.get(Calendar.MONTH) > now.get(Calendar.MONTH))
        || (cal.get(Calendar.MONTH) == now.get(Calendar.MONTH)
        && cal.get(Calendar.DAY_OF_MONTH) > now.get(Calendar.DAY_OF_MONTH))){
      res = res - 1;
    }
    return res;
  }
}

```
- Lưu ý : 
  +  Nếu trong Java : `SimpleDateFormat formatter = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");`
  + Thì khi nhúng code Java vào Scala  => `var formatter: SimpleDateFormat = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");`
  + hoặc : `var formatter = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");`

### 6. Method trong Scala.
- Khi viết hàm trong scala ta có 2 cách viết

- def x() { // Trả về Unit (void) }

- def x() = {// Trả về giá trị là giá trị của đoạn code cuối cùng của hàm}

- Chú ý không nên viết return vì mặc định trả về kết quả của câu lệnh cuối cùng,
  nhưng trong 1 số trường hợp vẫn cầu return ví dụ như trong vong for
  
- Không cần chỉ rõ giá trị trả về

- Nếu một hàm không có tham số ta có thể viết
  + `def x = { //hàm x không có tham số đầu vào + trả về giá trị là câu lệnh cuối cùng}`
  + `def x { //hàm x không có tham số đầu vào + trả về Unit (void) }`
    
### 7. Object trong Scala.

- Khái niệm object trong Scala chính là khái niệm Static trong class của Java

- Trong một object mọi thứ đều là `static`

- Mục đích của Object trong Scala là để dùng trong trường hợp chỉ cần 1 instance duy nhất của 1 class.

- Tối ưu hóa việc quản lý bộ nhớ của, vì chỉ có 1 instance duy nhất.

- Khi nào sử dụng Object: Khi muốn Class chỉ có 1 instance duy nhất thì dùng Object : Ví dụ như tầng xử lý business, logic 
  thì không nên viết class vì mục đích chính của tầng logic hay business là xử lý dữ liệu chứ khing phải là cấu trúc dữ liệu, vậy nên ta viết dưới dạng Object và truyền dữ liệu vào để sử lý.


```scala
object Hello{
  //Your codeis here
  // All method 
}
```

### 8. Future trong scala.
#### *Future Non-blocking scala*

##### *Khái niệm*
- Future trong scala cung cấp cơ chế `non-blocking` xử lý song song
- Mục đích cỦa Future : For the sake of performance and speed.
- Như List là đối tượng để lưu nhiều phần tử thì Future là một đối tượng để
  lưu kết quả của một tiến trình long-time
- Future là một object lưu một giá trị là kết quả trả về (result) của một
  tiến trình nào đó. (tiến trình ở đây là một hàm tính toán, hay một hàm
  access lấy dữ liệu trong db, hay một hàm cần long-time để trả về kết quả.)
  + Trạng thái của Future object chính là trạng thái của tiến trình.
  + Khi một tiến trình chưa hoàn thành thì Future cũng là chưa hoàn thành và ngược lại
- Future hoạt động như một Thread, Một khi có một future đc khởi tạo thì có  thể
  coi một thread mới đc khởi tạo và chạy độc lập với Main thread.

##### *Khởi tạo một Future*
- Future thuộc : `scala.concurrent.Future`
- import scala.concurrent package to make the type Future and the construct Future visible
- Khi nào cần khởi tạo một Future:
  + Khi một tiến trình (hàm) nào đó cần long-time
  + Muốn tối ưu CPU
  + Không muốn phải đợi cho đến khi một tiến trình (hàm) nào đó thực hiện xong
    mới làm những công việc khác mà ta có thể gọi tiến trình làm việc sau đó sẽ
    lấy kết quả ở một thời điểm khác.

  - Cú pháp tạo một Future bọc một tiến trình
    + hàm `abc()` thực hiện cần long-time
    + hàm `abc()` trả về kiểu dữ liệu là T đã được đặt trong Future (Future[T])

  - `Future{ abc() }` : Future nhận đầu vào là một hàm, kết quả trả về là một
    Future với kiểu trả về và kiểu trả về của hàm
  - Một Thread sẽ được tạo ra , Thread này có các tài nguyên chính là những tài
    nguyên nằm trong block {} bao gồm :
      + biến `x`
      + hàm `abc()`
  - Chú ý về Scope variable : Biến x chỉ tồn tại trong block của Future, ra khỏi
    block thì biến đó bị hủy.

```scala
val f: Future[T] = Future{
  var x = 123
  abc()
}
```


```scala
package src.main.scala

import com.redis._
import scala.concurrent._
import ExecutionContext.Implicits.global

object Hello {
  val redis: RedisClient = new RedisClient("localhost", 6379)

  def main(args: Array[String]) = {
    println("Hi What the fuck!")
    set
    println(redis)
  }

  def set() = {
    val f: Future[Boolean] = Future {
      redis.set("key", "leminhtuan2015 cccc")
    }
  }
}

```

- ###*Vậy để non-blocking một tiến trình nào đó ta chỉ cần bọc nó trong một Future*

#### *Future workflow*
- Cách thức hoạt động một Future như nào

- Khi trình biên dịch (JVM) đọc đoạn code bên dưới thì nó tạo ra một thread mới
  + Thread này chạy song song với Main Thread
  + Tài nguyên cung cấp cho Thread này là phần nằm trong hai dấu `{ }`
  + Tài nguyên của Future có thể là những biến chỉ tồn tại trong scope của
    Future đó,nhưng nó cũng có thể nhìn thấy những tài nguyên của scope bao bên
    ngoài nó như tào nguyên của class, của hàm chứa Future,

    + Nếu là tài nguyên của riêng scope Future thì nó sẽ chỉ tồn tại trong phạm
      vi scope Future
    + Nếu Future lấy những tài nguyên của scope rộng hơn nó (như class variable )
      thì phải cẩn thận trong việc có nhiều Thread vì các thead đều share tài nguyên của class.
    + ===>>> Tài nguyên của Class sẽ được Share cho tất cả các Future, Chỉ cần
      Một Future thay đổi giá trị của một Class variable thì giá trị đó bị thay
      đổi và vì thế phài quan tâm đến các tài nguyên dùng chung của nhiều thread (Tài nguyên găng)

```scala
val f: Future[Boolean] = Future {
  redis.set("key", "leminhtuan2015 zzz")
}
```


#### *Future callback*
- Vậy ta đã có thể lập trình non-blocking cho những hàm long-time, và ta sẽ phải
  suy nghĩ là vậy quản lý việc trả lại kết quả của một Future như nào ???
- Future có một khái niệm là `callbacks` : Hàm callbacks sẽ được tự động trigger khi Future complete.
- Như hàm f.onSuccess bên dưới thì nó tự động đc gọi khi Future completed.
  + record chính là giá trị trả về cảu hàm `redis.set("key", "leminhtuan2015 zzz")`

```scala
package src.main.scala

import com.redis._
import scala.concurrent._
import ExecutionContext.Implicits.global

object Hello {
  val redis: RedisClient = new RedisClient("localhost", 6379)

  def main(args: Array[String]) = {
    println("Hi What the fuck!")
    set
    println(redis)
  }

  def set() = {
    val f: Future[Boolean] = Future {
      redis.set("key", "leminhtuan2015 zzz")
    }

    f.onSuccess{ case record =>
      println("record "+ record)
    }
  }
}
```

### *Future Blocking scala*
- Như đã nói ở phần trên :

##### *Future hoạt động như một Thread, tiến trình đc bọc trong Future đc chạy
  bằng một Thread đọc lập với main Thread và trả về kết quả bằng callback.*

- Vậy nhưng cũng có nhiều trường hợp ta phải cần đến `Blocking` (Tuần tự) và để
  lập trình Blocking trong Scala ta được hỗ trợ bởi
  + Future
  + Promise
- Scala cung cấp 2 cách thức để thực hiện Blocking đó là :
  + Await.ready  => waits until the future becomes completed, nhưng không lấy
    lại đc kết quả của thread Future trả về
  + Await.result  => waits until the future becomes completed, Nhận lại đc kết
    quả của thread Future trả về

```scala
package src.main.scala

import com.redis._
import scala.concurrent._
import scala.concurrent.duration._
import ExecutionContext.Implicits.global

object Hello {
  val redis: RedisClient = new RedisClient("localhost", 6379)

  def main(args: Array[String]) = {
    println("Hi What the fuck!")
    set
    println(redis)
  }

  def set() = {
    val f: Future[Boolean] = Future {
      redis.set("key", "leminhtuan2015 zzz")
    }

    var result = Await.result(f, 1000 nanos)
    println(result)

    //f.onSuccess{ case record =>
    //  println("record "+ record)
    //}
  }
}

```
- Khi sử dung `Await` thì code sẽ được `blocking` (chạy tuần tự) Mail thread sẽ
  phải đợi cho đến khi Future chạy song thì nó mới chạy những câu lệnh bên dưới
=> Chốt lại `Await` dùng để Tuần tự các Thread.

- Nhưng cái đáng lo ngại nhất khi dùng `Await` là ta phải xác định đc `time-out`
  của một Future , Nghĩa là phải xác định (dự đoán) trong khoảng thời gian bao
  lâu thì future đó sẽ tính toán xong
  + Nếu ước lượng thời gian quá lớn thì không tốt
  + Nếu ước lượng thời gian nhỏ quá thì bị bung ra lỗi time-out như bên dưới

```shell
java.util.concurrent.TimeoutException: Futures timed out after [1 nanosecond]
```
- Thường thường bạn sẽ sử dụng Future với những hàm tính toán long-time và khó
  ước lượng time, thêm vào đó nế đã muốn tuần tự thì bạn Dùng Future làm chi cho mệt!!!

### 9. Sử dụng thư viện của java trên Maven reposite cho Scala

#### *Maven Central Reposite*
#### *Maven*
- Giống như:
  + activator : Play  (built.sbt)
  + sbt : Scala  (built.sbt)
  + Ant : Java (pom.xml)
  + Maven : Java (pom.xml)

- Thì `maven` là một tool để quản lý project Java
- Maven có những tính năng sau
  + Tạo ra một layout Structure Folder của một project Java
  + Build
  + Compile
  + Run
  + Test
  + Deploy
  + Managment Lib (Quản lý thư viện)
- Ta có một Maven Repository chuyên để các thư viện của Java tương tự như Rubygem
  là server để quản lý các thư viện của Ruby
- Với maven ta đặt các tự viện trong file pom.xml trong với cú pháp như sau

```xml
<dependencies>
     <dependency>
         <groupId>junit</groupId>
         <artifactId>junit</artifactId>
         <version>4.11</version>
         <type>jar</type>
         <scope>test</scope>
     </dependency>

     <dependency>
         <groupId>redis.clients</groupId>
         <artifactId>jedis</artifactId>
         <version>2.4.2</version>
     </dependency>
 </dependencies>
```

- Ngoài ra Server của Maven còn hỗ trợ những thư viện cho Scala, để láy về một
  thư viện trên Maven Repository về Scala app ta có thế add dòng code bên dưới
  vào file build.sbt

```scala
libraryDependencies += "redis.clients" % "jedis" % "2.4.2"
```
