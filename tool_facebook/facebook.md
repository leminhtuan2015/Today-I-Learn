### Facebook Audience Network

* **Notice For Send Review**
  * After intergrate Facebook in your app done, You just can see the **test ad**
  * To be reviewed by Facebook you have to send ad request from test user of your FB app
  
* **Chú Ý**
  * Bundle ID của App Phải trùng với Bundle ID đã đăng ký trên Facebook Audience Network
  * Khi ở **Test Mode** thì sẽ luôn luôn hiển thị **test ad** 
  * Khi không ở **Test Mode** thì chỉ những app đã đc approve mới hiển thị live/real ad
  * Nếu Facebook Audience Network chưa được approve ta sẽ chỉ hiển thị đc test ad ở chế độ **Test Mode**, nếu không để **Test Mode** thì khi request ad sẽ bị lỗi (No Fill , Server Error)
  * Nếu muốn hiên thị live/real ad khi chưa đc Facebook Audience Network approve thì phải là đăng nhập vào Facebook app trên mobile bằng account của admin/dev/test sau đó mới hiển thị đc real/live ad (Chú ý, cái này IOS 9.3.5 chạy OKI, còn IOS 10.3.x chạy không thành công)
  * Sau khi đã được Approve nếu vẫn để **Test Mode** thì app vẫn hiển thị test ad, => Sau khi đc approve phải BỎ chế độ **Test Mode**
  
  * **Test Mode** chính là : `FBAdSettings.addTestDevice(FBAdSettings.testDeviceHash())`
  * Bỏ test mode chính là không chạy đoạn code trên, hoặc `FBAdSettings.clearTestDevices()`
  
  ```swift
     if(isTesting != nil && isTesting!){
         FBAdSettings.addTestDevice(FBAdSettings.testDeviceHash())
     } else {
         FBAdSettings.clearTestDevices()
     }
  ```
