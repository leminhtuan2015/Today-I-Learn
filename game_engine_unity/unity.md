### Unity
### Unity Game
-----------------------------

### Unity

  * Unity is a game engine for multiple platform such as IOS/Android/Destop
  * Unity Game is a special mobile app, Unity is designed to support dev create game easier and faster

### Unity Game
  * Unity have a un-limited space with OXY coordinates, You place GameObjects on that coordinates
  * Camera will capture an area of coordinates and user will see the same what camera capture.
  
  * Unity cung cấp 1 vùng không gian không giới hạn, và không gian đó được gắn một hệ trục toạ độ OXY hoặc OXYZ
  * Việc xây dựng game chính là quá trình 
    * Đặt vị trí các GameObjects tại vị trí thích hợp trong hệ toạ độ
    * Viết Script component để xử lý logic cho các GameObjects
    * Viết Script component xử lý logic của Camera GameObject, Vùng camera chiếu trên hệ toạ độ chính là vùng sẽ hiển thị trên màn hình của thiết bị.
    * Camera trong Unity hoạt động giống như quay phim, chỉ vùng không gian nào được camera quay sẽ được hiển thị lên màn hình
  
  
  * Project (has-many Scenes)
    * Scene1 (has-many GameObject)
      * GameObject1 (has-many Chil GameObject)
        * ChilGameObject1
        * ChildGameObject2 (has-many Components)
          * Component1
          * Component2 (has-many Properties)
            * Property1
            * Property2
  
    
    
    
    
    
    
    
    
    
    
    
    
    
