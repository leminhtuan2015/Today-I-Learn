### Transform Position
### Transform Component
### Transform Component properties
### Transform API
### Transform Class

-------------------------------------------------

### Transform Position

* Every Game Object or UI element in Unity **must have** a Transform to define (x, y, z, w, h)
* (x, y, z, w, h) tell where to place the GameObject or UI element
* (x, y, z) of Game Object or UI element is the center point of GameObject/UI
* **Toạ độ (x, y, z) của mọi GameObject/UI chính là điểm chính giữa của (tâm) của GameObject/UI đó**
* Trong IOS (x, y) của UIView chính là điểm **Phía trên bên trái**


#### localPosition: Refer to parent game object (quy chiếu với object cha)
#### position: Refer to O(0, 0, 0) of OXY (quy chiếu với gốc toạ độ)

### Transform component
  * Every GameObject/Component in Unity have a default component is **Transform component**
  * Every object in a scene has a Transform, **Transform** is the very important component, by default every GameObject must have a transform component (all GameObjects implicitly have a Transform)
  * In Unity GameObject/Component must be have default **Transform component**, because Transform component describe (x, y, z, width, height) of GameObject/Component, without Transform component Unity can not how to display object on screen.
  * The Transform component define (x, y, z, width, height) of a component on the screen
  * The Transform is used to store a GameObject’s position, rotation, scale,...
  
### Transform component properties
  * Transform component have 3 properties
    * Position
    * Rotation
    * Scale

### Transform API

  * **transform.gameObject**: return the game object this component is attached to. A component is always attached to a game object.
  * **transform.parent**: return a transform component of parent GameObject
  
  * **transform.position**:	The position of the transform in world space.
  
### Transform class

* Description
  * class in UnityEngine
  * Inherits from: Component
  * Implemented in: UnityEngine.CoreModule
  
* Properties
  * childCount	
  * parent
  * position
  
* Inherited Members
  * gameObject
  * tag
  * transform
  
* Public Methods
  * GetChild
  * Find
  * SetParent
  
  
  
