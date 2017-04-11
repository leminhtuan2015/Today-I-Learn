
#### @UIApplicationMain attribute
#### @objc attribute
#### @escaping - @noescape
#### @IBOutlet - @IBAction

#### File vs Class
#### Value Parameters - reference parameter
#### Lazy variable (Stored Property)
#### Getter - Setter


----------------

### @UIApplicationMain: Entry-point
  - Entry point is declare by ***@UIApplicationMain***
  - Change ***AppDelegate.swift*** ------> ***Main.swift***
  - In ***Main.swift*** change ***class AppDelegate*** ------> ***class Hello***
  
  ```swift
  // file Main.swift
  
  @UIApplicationMain
  class Hello: UIResponder, UIApplicationDelegate { 
     ...
  }
  ```
  
### @objc attribute
  - The @objc attribute makes your Swift API available in Objective-C and the Objective-C runtime
  - You can call Swift from Objective-C 
  
### @escaping - @noescape
- @escaping - @noescape : Use for when you pass function/closure for a function as parameter

```swift
var callback: (_ status: CallbackType, _ message: String) -> Void = {_ in
    Logger.log(string: "Call back gg login")
}
    
public func setCallback(callback: @escaping (_ status: CallbackType, _ message: String?) -> Void) {
    self.callback = callback
}

@escaping : Scope của closure nằm ngoài scope của hàm, hàm chạy xong nhưng closure vẫn tồn tại 
@noescape : Scope của closure nằm trong scope của hàm, hàm chạy xong và closure cũng bị xóa khỏi bộ nhớ

// Trong trường hợp này ta phải dùng @escaping bởi vì biến callback được gán là global variable 
// => biến này vẫn tồn tại cho dù hàm đã kết thúc
```

- Escaping and Non-Escaping in Swift 3
- In Swift 1 and 2 : closure parameters were escaping by default
- In Swift 3 : closure parameters are non-escaping by default
- ***@escaping :*** function/closure parameter still alive when function end
- ***@noescape :*** function/closure parameter out of scope  when function end

### @IBOutlet - @IBAction
 - IBAction and IBOutlet are macros defined to denote variables and methods that can be referred to in Interface Builder
 
### File vs Class
  - File .swift can be not contain any class (file swift có thể không chứa class)
  - File .swift can be contain class with difference name (tên class và tên file không cần giống nhau)
  - Function can be placed out of Class
  - Variable can be placed at top-level
  - Expressions are ***NOT*** allowed at the top level (Không cho phép gọi hàm ở top level, mà phải gọi trong class/trong hàm)

  ```swift
    import Foundation

    // Variable can be placed at top-level 
    var test = 10  

    // Function dont need to be inside class
    func hello(){
        print("Hello \(test) \(test1)")
    }

    var test1 = 20

    // Class name and file name are NOT related 
    class A {
        init() {}

        func hello() {
            print("A hello")
        }
    }
  ```
  
  - Call from other swift file:
  
  ```swift
  
  hello() // Hello 10 20
  
  ```
  
### Value Parameters - reference parameter
  - In Swift you ***CAN NOT*** change ***Value Parameters*** of function
  - This is different from JavaScript, Javascript ***CAN*** change ***Value Parameters*** of function
  
  ```swift
  
  func myFunction(name: String){
     name = "changed"  // Error here because you can not change the "name" parameters
     print(name)
  }
  
  ```
### Lazy variable (Stored Property)
  - The closure is only evaluated once
  - The closure associated to the lazy property is executed only if you read that property

```swift
  var s1: String = {
     // Đoạn code đặt trong closure này chỉ đc chạy duy nhất 1 lần
    print("called s1")
    return "test"
  }()

  // Only is executed when you use the s2 variable
  lazy var s2: String = {
    // Đoạn code đặt trong closure này chỉ đc chạy duy nhất 1 lần
    print("called s2")
    return "test"
  }()

func getVariable(){
    print(s1)
}

Mỗi lần gọi hàm "getVariable" thì chỉ in ra "called s1" 1 lần duy nhất
Nghĩa là biến s1 sẽ được khởi tạo giá trị duy nhất 1 lần 
và từ lần sau khi đọc ra giá trị và trả lại luôn
```

### Getter - Setter

```swift
//
//  Media.swift
//  LanguageListening
//
//  Created by Fuji on 4/11/17.
//  Copyright © 2017 Admin. All rights reserved.
//

import Foundation

class Media {
    private var _id: String?
    
    init() {}
    
    var id: String? {
        set(id) {
            print("Set ID")
            _id = id
        }
        
        get {
            print("Get ID")
            return _id
        }
    }
}
```

