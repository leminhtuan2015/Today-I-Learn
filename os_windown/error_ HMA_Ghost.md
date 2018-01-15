### Warning: the high memory area (HMA) is not available.

```sh
Warning: the high memory area (HMA) is not available.
Additional low memory (below 640k) will be used instead.
Creating 64Mb Ram Drive as R:
Bad command or file name
Bad command or file name
Bad command or file name
Bad command or file name
Bad command or file name
Bad command or file name
Label not found.
R:\>
```


* Lỗi cảnh báo khi Ghost:
  * Warning: the high memory area (HMA) is not available
  * Additional low memory (below 604K) will be used instead
* Tạm dịch:
  * Cảnh báo: khu vực bộ nhớ cao (HMA) không có sẵn
  * Bộ nhớ thấp thêm (dưới 604K) sẽ được sử dụng thay

* Tuy nhiên, quá trình tạo Bộ nhớ thấp thêm (dưới 604K) không thành công, không thể thao tác Ghost được :–(
  * Nguyên nhân:
  * Lỗi này thường gặp đối với dòng máy có RAM 4Gb
  * Không phải tại đĩa Ghost lỗi đâu, mà do không tạo được vùng bộ nhớ thấp thêm tạm thời nên tiến trình Ghost không thực hiện tiếp được.

* Giải pháp:
  * Mục tiêu: cần tạo được bộ nhớ thấp tạm thời. Cách thức như sau:
  * Khởi động bằng đĩa Hiren Boot :
  * Chọn Dos Programs > Next => Dos => Dos Seting => Dos (with HimemX, try this if Ram Drive faits) 
  * để lấy ra 100MB Ram làm ổ đĩa Ram tạm thời. Tiếp đó máy sẽ có một số bảng thông báo, bạn cứ để máy **tự chạy**.

* Cuối cùng tại dấu nhắc R:\> bạn đánh lệnh **Ghost** để vào chương trình Ghost bình thường.
* Việc thiết lập AHCI sang IDE không cần thiết. Theo thao tác trên là quá trình Ghost thành công rồi
