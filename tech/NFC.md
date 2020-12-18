### NFC (Near-Field Communications)
### NFC Data Exchange Format (NDEF)
--------------------

### NFC (Near-Field Communications)

* Near-Field-Communication (NFC) is a set of **communication protocols** for communication between two electronic devices over a distance of 4 cm (1​1⁄2 in) or less

* NFC (Near-Field Communications) là công nghệ kết nối không dây phạm vi tầm ngắn trong khoảng cách 4 cm

* Để NFC hoạt động, chúng ta buộc phải có 2 thiết bị:
  * 1 là thiết bị khởi tạo **initiator** (NFC Reader/Writer)
  * 2 là mục tiêu **target**
  
* Bí mật của NFC nằm ở đây, initiator (NFC Reader/Writer) sẽ chủ động tạo ra những trường sóng radio (bản chất là bức xạ điện từ) đủ để cung cấp năng lượng cho target vốn hoạt động ở chế độ bị động

* Target của NFC sẽ không cần điện năng, năng lượng để nó hoạt động lấy từ thiết bị initiator (NFC Reader/Writer). Đây là một đặc điểm cực kỳ có ý nghĩa vì nó cho phép người ta chế tạo những thẻ tag, miếng dán, chìa khóa hay thẻ NFC nhỏ gọn hơn do không phải dùng pin.

* **Ví dụ** : Bạn muốn một ví dụ về ứng dụng của NFC trong thực tế? Hãy tượng tượng bạn đến rạp chiếu phim, tại rạp có tấm poster giới thiệu phim mới rất thú vị, chúng ta chỉ việc chạm điện thoại vào poster, tất cả các thông tin về phim đó sẽ hiện lên trên điện thoại, link dẫn tới trailer, đánh giá, lịch chiếu phim ở rạp gần nhất hay trang web mua vé online....
  * Tấm poster = target
  * Điện thoại là initiator (NFC Reader/Writer)

* Chẳng hạn như điện thoại vừa có thể đóng vai trò initiator hay target, Ví dụ khi thanh toán, thay vì quẹt thẻ, Bạn có thể chạm điện thoại vào máy POS point of sale (POS) or point of purchase (POP), lúc này điện thoại đóng vai trò là target, May Post sẽ đọc thông tin từ điện thoại và tiên hành giao dịch 

* NFC phần mềm: Chúng ta cần có những tools để điều khiển đc (NFC Reader/Writer) để đọc hoặc dữ liệu từ target hoặc ghi dữ liệu vào target, ĐỐi với điện thoại cũng cần có 2 phần là app và phần cứng, app sẽ điều khiển phần cứng để đọc hay ghi dữ liệu từ target


* Smart-phone vừa có thể bắt Wifi từ máy khác và cũng vừa có thể phát Wifi cho máy khác dùng => NCF trên Smart-phone cũng tương tự: Smart-phone vừa có thể đọc/ghi data từ target và cũng có thể là target để cho các thiết bị khác đọc/ghi data 


### NFC Data Exchange Format (NDEF)

* NDEF (NFC Data Exchange Format) is a light-weight binary format, used to encapsulate typed data. It is specified by the NFC Forum, for transmission and storage with NFC

* NDEF defines messages and records. 
  * An NDEF Record contains typed data, such as MIME-type media, a URI, or a custom application payload. 
  * An NDEF Message is a container for one or more NDEF Records.

* **An NDEF Message is a container for one or more NDEF Records.**

* There are currently **4 NFC Forum standardized tag types** that can be formatted to contain NDEF data.
  * NFC Forum Type 1 Tag (NFC_FORUM_TYPE_1), such as the Innovision Topaz
  * NFC Forum Type 2 Tag (NFC_FORUM_TYPE_2), such as the NXP MIFARE Ultralight
  * NFC Forum Type 3 Tag (NFC_FORUM_TYPE_3), such as Sony Felica
  * NFC Forum Type 4 Tag (NFC_FORUM_TYPE_4), such as NXP MIFARE Desfire

* Some vendors have their own well defined specifications for storing NDEF data on tags that do not fall into the above categories















