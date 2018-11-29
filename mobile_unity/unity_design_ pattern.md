### Unity Singleton Design Pattern
### Examples

--------------------------------------------------------------

### Unity Singleton Design Pattern
* Singleton is a basic Design Pattern. 
* Classes implementing Singleton pattern will ensure that only one instance of the object ever exists at any one time. 
* It is recommend using Singletons for things that do not need to be copied multiple times during a game.
* This is great for **controller classes like `GameManager` or `AudioController`**.


### Examples

* http://www.unitygeek.com/unity_c_singleton/

```c#
public class SingletonController : MonoBehaviour {
public static SingletonController Instance;
 
  private void Awake() {
   if (Instance != null) {
     Destroy(gameObject);
   }else{
     Instance = this;
   }
 }
}

// It is not recommended to call SingletonController.Instance in any Awake() method because, 
// since we don’t know the order that Awake() will be executed through all scripts, 
// we can end up with a Null Reference Exception.

public class SingletonController : MonoBehaviour {
public static SingletonController Instance;
 
  private void Awake() {
   if (Instance != null) {
     Destroy(gameObject);
   }else{
     Instance = this;
     DontDestroyOnLoad(gameObject);
   }
 }
}





```
