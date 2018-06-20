
### Unity Physics
### Unity Physics Components

----------------------------------------------------

### Unity Physics

* A GameObject in a game must have physics behaviour
  * Accelerate correctly 
  * Be affected by collisions, gravity and other forces
  * ...
  
* Unity provide components that handle the physical simulation for you
* We must attach physics components to a GameObject to make that GameObject have physics behaviour

### Unity Physics Components

* Rigidbody Component // Vật Thể Rắn (trọng lực)
* Colliders Component // Va Chạm 

#### Rigidbody
  * A Rigidbody is the main component that enables physical behaviour for a GameObject. 
  * With a Rigidbody attached to a GameObject, the GameObject will immediately respond to gravity

#### Collisions
  * Collider components define the shape of an object for the purposes of physical collisions
  * **2 Collisions types**:
    * **Non-Trigger Collisions** (Do not allow pass through each other), OnCollisionEnter will be called
    * **Trigger Collisions** (Allow other colliders to pass through), OnTriggerEnter will be called
    
  * **Conditions for Collision between GameObject A and GameObject B**
    * Both A and B have Collider Component
    * At least A or B have Rigibody component
    * If you want Non-Trigger Collisions: Both A and B have **IsTrigger = false**
    * If you want Trigger Collisions : At least A or B have **IsTrigger = true**
        
