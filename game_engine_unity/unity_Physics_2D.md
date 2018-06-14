
### Unity Physics
### Unity Physics Components

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
* Colliders Component // Va Chạm 

#### Rigidbody

* A Rigidbody is the main component that enables physical behaviour for a GameObject. 
* With a Rigidbody attached to a GameObject, the GameObject will immediately respond to gravity

#### Collider
* Collider components define the shape of an object for the purposes of physical collisions



* OnTriggerEnter2D : called when Collider

```c#
  void OnTriggerEnter2D (Collider2D collider) {
      Debug.Log ("collider"); 
  }
```
