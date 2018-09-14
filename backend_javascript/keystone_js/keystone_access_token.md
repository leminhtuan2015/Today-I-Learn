### Access Token


------------------------------------

### Access Token

* The Access Token is a credential that can be used by an application to **access an API**.
* **Access Token** giống như **member ID card** (thẻ thành viên) khi đăng ký tập gym

  * Step 1. Đăng ký thành viên tại 1 gym club (giống như dùng ID/Password để đăng nhập vào 1 hệ thống thông tin).
  * Step 2. Gym club admin sẽ cấp cho bạn 1 thẻ thành viên (giống như hệ thống sẽ response lại 1 access token, client lưu lại access token)
  * Step 3: Mỗi ngày đến gym club mình cần đưa thẻ để chứng minh là thành viên rùi mới có thể vào phòng (giống như việc mỗi lần mình request đến API thì gửi theo access token để xác thực mình là user của hệ thống)
  * Step 4: Nếu thẻ hết hạn bạn phải re-new để đc vào phòng tập (giống như khi access token bị expried bạn cần đăng nhập lại hoặc re-new access token để có thê tiếp tục truy cập API của hệ thống)
