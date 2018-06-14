
### Unity Physics

----------------------------------------------------

### Unity Physics

* A GameObject in a game must have physics behaviour
  * Accelerate correctly 
  * Be affected by collisions, gravity and other forces
  * ...
  
* Unity provide components that handle the physical simulation for you
* We must attach physics components for a GameObject to make that GameObject have physics behaviour


### Unity Physics Components

* Rigidbody Component // Vật Thể Rắn (trọng lực)
* Colliders Component
	* CircleCollider2d // Bọc hình tròn, va chạm
	* PolygonCollider2d // Bọc đa giác, va chạm

#### Rigidbody


#### Collider

* OnTriggerEnter2D : called when Collider

```c#
  void OnTriggerEnter2D (Collider2D collider) {
      Debug.Log ("collider"); 
  }
```
