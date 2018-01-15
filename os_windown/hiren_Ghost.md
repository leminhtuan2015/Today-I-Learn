### Tích hợp Ghost vào Hiren

* Từ phiên bản Hiren's Boot 15.2 trở lên thì chức năng Ghost bị lượt bỏ. Vì thế ta phải thêm vào file “Hiren's.BootCD.15.2.iso” các file sau: Ghost.7z và Ghost32.7z

* Thông qua các bảng báo Lỗi sau:
  * “File Missing C:\HBCD\Dos\Ghost.7z”
  * “This commercial application is not included in the package. Use HBCDCustomizer.exe and add HBCD\Programs\Files\Ghost32.7z”

* Các bạn mở file: Hiren's.BootCD.15.2.iso
  * Ghost.7z vào đường dẫn /HBCD/Dos
  * Ghost32.7z vào đường dẫn /HBCD/Programs/Files
