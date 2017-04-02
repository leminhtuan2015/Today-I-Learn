### Xcode add files
### Xcode add folder(referenced folder)
### Xcode new group(symbolic group)

-------------------------------------
### Xcode add files
  - XCode không quản lý file mà ta create/copy vào folder chứa xcode project, mà ta phải mở xcode lên và add files/folder bằng  Xcode.
  - Nếu create hay copy 1 file/folder nào đó vào folder chứa project Xcode thì khi mở XCode lên file/folder vừa create/copy sẽ không thấy xuất hiện trong Xcode, mà lúc này ta phải thực hiện trong XCode: Right click -> Add files to ... -> chọn files/Folder
  
  ```swift
    let path = Bundle.main.path(forResource: fileName, ofType: nil)!
  ```
 
### Xcode add folder(referenced folder) - màu  xanh biển
  - Folder là 1 dạng đặc bệt của file, Cũng phải add vào bằng Xcode: Right click -> Add files to ... -> chọn tới folder
  
  ```swift
    let path = Bundle.main.path(forResource: fileName, ofType: nil, inDirectory: inDirectory)!
  ```
  
### Xcode new group(symbolic group) - màu vàng
  - Group chỉ có ý nghĩa là hiển thị để dễ nhìn trên Xcode IDE, còn vị trí thực sự của các files/foldels trên ổ cứng sẽ không thay đổi
