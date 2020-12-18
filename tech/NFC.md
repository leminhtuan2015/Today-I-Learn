### NFC (Near-Field Communications)
### NFC Data Exchange Format (NDEF)
### NFC Tag Types
--------------------

### NFC (Near-Field Communications)

* Near-Field-Communication (NFC) is a set of **communication protocols** for communication between two electronic devices over a distance of 4 cm (1​1⁄2 in) or less

* NFC (Near-Field Communications) là công nghệ kết nối không dây phạm vi tầm ngắn trong khoảng cách 4 cm

* Để NFC hoạt động, chúng ta buộc phải có 2 thiết bị:
  * 1 là thiết bị khởi tạo **initiator** (NFC Reader/Writer)
  * 2 là mục tiêu **target** (NFC Tag)
  
* Bí mật của NFC nằm ở đây, initiator (NFC Reader/Writer) sẽ chủ động tạo ra những trường sóng radio (bản chất là bức xạ điện từ) đủ để cung cấp năng lượng cho target vốn hoạt động ở chế độ bị động

* Target của NFC sẽ không cần điện năng, năng lượng để nó hoạt động lấy từ thiết bị initiator (NFC Reader/Writer). Đây là một đặc điểm cực kỳ có ý nghĩa vì nó cho phép người ta chế tạo những thẻ tag, miếng dán, chìa khóa hay thẻ NFC nhỏ gọn hơn do không phải dùng pin.

* **Ví dụ** : Bạn muốn một ví dụ về ứng dụng của NFC trong thực tế? Hãy tượng tượng bạn đến rạp chiếu phim, tại rạp có tấm poster giới thiệu phim mới rất thú vị, chúng ta chỉ việc chạm điện thoại vào poster, tất cả các thông tin về phim đó sẽ hiện lên trên điện thoại, link dẫn tới trailer, đánh giá, lịch chiếu phim ở rạp gần nhất hay trang web mua vé online....
  * Tấm poster = target (NFC Tag)
  * Điện thoại là initiator (NFC Reader/Writer)

* Chẳng hạn như điện thoại vừa có thể đóng vai trò initiator hay target, Ví dụ khi thanh toán, thay vì quẹt thẻ, Bạn có thể chạm điện thoại vào máy POS point of sale (POS) or point of purchase (POP), lúc này điện thoại đóng vai trò là target, May Post sẽ đọc thông tin từ điện thoại và tiên hành giao dịch 

* NFC phần mềm: Chúng ta cần có những tools để điều khiển đc (NFC Reader/Writer) để đọc hoặc dữ liệu từ target hoặc ghi dữ liệu vào target, ĐỐi với điện thoại cũng cần có 2 phần là app và phần cứng, app sẽ điều khiển phần cứng để đọc hay ghi dữ liệu từ target (NFC Tag)


* Smart-phone vừa có thể bắt Wifi từ máy khác và cũng vừa có thể phát Wifi cho máy khác dùng => NCF trên Smart-phone cũng tương tự: Smart-phone vừa có thể đọc/ghi data từ target và cũng có thể là target để cho các thiết bị khác đọc/ghi data 


### NFC Data Exchange Format (NDEF)

* NDEF (NFC Data Exchange Format) is a light-weight binary format, used to encapsulate typed data. It is specified by the NFC Forum, for transmission and storage with NFC

* NDEF defines messages and records. 
  * An NDEF Record contains typed data, such as MIME-type media, a URI, or a custom application payload. 
  * An NDEF Message is a container for one or more NDEF Records.

* **An NDEF Message is a container for one or more NDEF Records.**


### NFC Tag Types

* NFC Forum defines **four different tag types** - each intended for different applications.

* There are currently **4 NFC Forum standardized tag types** that can be formatted to contain NDEF data.
  * NFC Forum Type 1 Tag (NFC_FORUM_TYPE_1), such as the Innovision Topaz
  * NFC Forum Type 2 Tag (NFC_FORUM_TYPE_2), such as the NXP MIFARE Ultralight
  * NFC Forum Type 3 Tag (NFC_FORUM_TYPE_3), such as Sony Felica
  * NFC Forum Type 4 Tag (NFC_FORUM_TYPE_4), such as NXP MIFARE Desfire

* Some vendors have their own well defined specifications for storing NDEF data on tags that do not fall into the above categories

* The different NFC tag type definitions are as follows:

  * **Tag 1 Type:**   The Tag 1 Type is based on the ISO14443A standard. These NFC tags are read and re-write capable and users can configure the tag to become read-only. Memory availability is 96 bytes which is more than sufficient to store a website URL or other small amount of data. However the memory size is expandable up to 2 kbyte. The communication speed of this NFC tag is 106 kbit/s. As a result of its simplicity this tag type is cost effective and ideal for many NFC applications.
  * **Tag 2 Type:**   The NFC Tag 2 Type is also based on ISO14443A. These NFC tags are read and re-write capable and users can configure the tag to become read-only. The basic memory size of this tag type is only 48 bytes although this can be expanded to 2 kbyte. Again the communication speed is 106 kbit/s.
  * **Tag 3 Type:**   The NFC Tag 3 Type is based on the Sony FeliCa system. It currently has a 2 kbyte memory capacity and the data communications speed is 212 kbit/s. Accordingly this NFC tag type is more applicable for more complex applications, although there is a higher cost per tag.
  * **Tag 4 Type:**   The NFC Tag 4 Type is defined to be compatible with ISO14443A and B standards. These NFC tags are pre-configured at manufacture and they can be either read / re-writable, or read-only. The memory capacity can be up to 32 kbytes and the communication speed is between 106 kbit/s and 424 kbit/s.

* **Type 1 and type 2 tags** are dual state and may be either read/write or read-only. 
* **Type 3 and Type 4 tags** are read-only, data being entered at manufacture or using a special tag writer.






