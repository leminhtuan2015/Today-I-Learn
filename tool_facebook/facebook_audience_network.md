### Facebook Audience Network

* **Notice For Send Review**
  * After intergrate Facebook in your app done, You just can see the **test ad**
  * To be reviewed by Facebook you have to send ad request from test user of your FB app
  
* **Chú Ý**
  * Bundle ID của App Phải trùng với Bundle ID đã đăng ký trên Facebook Audience Network
  * Khi ở **Test Mode** thì sẽ luôn luôn hiển thị **test ad**  (dù đã được approve hay chưa được approve)
  * Khi không ở **Test Mode** thì chỉ những app đã đc approve mới hiển thị live/real ad
  * Nếu Facebook Audience Network chưa được approve ta sẽ chỉ hiển thị đc test ad ở chế độ **Test Mode**, nếu không để **Test Mode** thì khi request ad sẽ bị lỗi (No Fill , Server Error)
  * Nếu muốn hiên thị live/real ad khi chưa đc Facebook Audience Network approve thì phải là đăng nhập vào Facebook app trên mobile bằng account của admin/dev/test sau đó mới hiển thị đc real/live ad (Chú ý, cái này IOS 9.3.5 chạy OKI, còn IOS 10.3.x chạy không thành công)
  * Sau khi đã được Approve nếu vẫn để **Test Mode** thì app vẫn hiển thị test ad, => Sau khi đc approve phải BỎ chế độ **Test Mode**
  * Để có thể gửi được "Sent for review" thì ta phải **request ad** bằng tài khoản Facebook admin/dev/test => Nghĩa là đăng nhập vào Facebook app (App Facebook trên điện thoại) bằng một trong những tài khoản trên, Sau đó request ad ở chế độ **KHÔNG PHẢI Test Mode** => Sẽ nhìn thấy real/live ad (Đây là cách mà chưa cần approve cũng có thể hiển thị Real/Live ad)
  
  * **Test Mode** chính là : `FBAdSettings.addTestDevice(FBAdSettings.testDeviceHash())`
  * Bỏ test mode chính là không chạy đoạn code trên, hoặc `FBAdSettings.clearTestDevices()`
  
  ```swift
     if(isTesting != nil && isTesting!){
         FBAdSettings.addTestDevice(FBAdSettings.testDeviceHash())
     } else {
         FBAdSettings.clearTestDevices()
     }
  ```

### ADS: No Fill

* Khi IDFA lạ (không gắn với bât kỳ user nào của facebook) thì facebook sẽ không hiện ad (No fill 1001)

```
FB AD BANNER ERROR : Error Domain=com.facebook.ads.sdk Code=1001 "No fill" UserInfo={FBAdErrorDetailKey={
    msg = "No fill. We are not able to serve ads to this person. Please refer to https://developers.facebook.com/docs/audience-network/faq#a12. If you are integrating Audience Network for the first time, you can use test ads https://developers.facebook.com/docs/audience-network/testing.";
}, NSLocalizedDescription=No fill}

```





