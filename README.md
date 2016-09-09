# TIL logs.


### TODO QUEUE.
- use strictjavascript
- Default object in controller of spring. In ruby we have params object what is in spring
- sed , jq shell
- debug Java
- web bower. web pack…
- https://github.com/FasterXML/jackson-core   => Crossfilter
- http://stackoverflow.com/questions/4114095/revert-git-repository-to-a-previous-commit
- https://www.ansible.com/
- - git checkout -- hello.file
- https://www.vagrantup.com




| Tables                       |      Are                          |  Cool                     |
|------------------------------|-----------------------------------|---------------------------|
|                              |                                   |                           |
|                              |                                   |                           |
|                              |                                   |                           |
|                              |                                   |                           |
|                              |                                   |                           |
|                              |                                   |                           |
|                              |                                   |                           |
|                              |                                   |                           |
|                              |                                   |                           |
|                              |                                   |                           |



q- eclipse speedup builder
- firebase lost wifi => NOT delete socket connection stackover..
- auto reconnect when online 
- - all firebase onDisconnection code is run at ser-ver side
- các hàm on, once là các hàm tạo socket kết nối đến firebase 
Khi mất mạng mà kết nối  đến firebase.on, once , .. thì dù mất mạng cũng k bao h báo lối, mà các kết nối đó sẽ được ở trạng thái chờ (các trạng thái này được cache trong bộ nhớ của broswer ), một khi có mạng nó sẽ tự động được mở lại các socket đã lưu trong cache 

Trường hợp 2: nếu đã tạo socket thành công thông qua on, once .. mà bị mất mạng thì các socket cũng k bị huỷ mà nó cũng vẫn đc lưu lại trong câche , đến khi có mạng trở lại thì các socket này sẽ tự động đc kết nối lại 

http://stackoverflow.com/questions/11351689/detect-if-firebase-connection-is-lost-regained
https://www.firebase.com/docs/web/guide/offline-capabilities.html

onDisconnect > just called when you shutdown the app , when you lost wifi or internet this function is not be called => : BECAUSE when lost wifi firebase sill remain connection that mean socket connection if NOT be deleted and will be reconnect when you open wifi again


firebase.on, once > có thể hiểu là đăng ký các kết nối đến sẻver , nếu có mạng sẽ thực thi ngay, nếu k có mạng sẽ lưu vào cache và chờ đến khi có mạng sẽ TỰ ĐỘNG tạo kết nối và thực thi 

- Khi đang mở các soket đến sẻver firebase và sau đó mất mạng => các connection KHÔNG bị díconnect mà sẽ chờ đên khi có mạng và kết nối lại => khi có mạng các socket (on, once) sẽ được kết nối lại một cách tự động (CHÚ Ý: khí kết nối lại các socket thì có 2 bước là: 1: huỷ kết nối, 2: tạo kêt nối mới ) => các hàm database.disconnect() sẽ được gọi nếu ta đăng ký sự kiện onDisconnect()  (các code của onDisconnect() sẽ thự hiện phía sẻver )
