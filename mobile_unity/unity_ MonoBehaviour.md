### MonoBehaviour
### Unity script (MonoBehaviour) life cycle

------------------------------------------------------------------------------------

### MonoBehaviour

* Unity script is the **component** of GameObject
* MonoBehaviour is the **base class for every Unity script** derives.
* When you use **C# script**, you **must** explicitly derive from MonoBehaviour.

### Unity script (MonoBehaviour) life cycle

* **Awake**: This function is always called before any Start functions and also just after a prefab
 is instantiated
 
* **OnEnable**: (only called if the Object is active): This function is called just after the object is enabled.

* **Start**: Start is called before the first frame update only if the script instance is enabled.

* **OnDestroy**: This function is called after all frame updates for the last frame of the object’s existence 

* **OnDisable**: This function is called when the behaviour becomes disabled or inactive.






[](https://github.com/leminhtuan2015/Today-I-Learn/blob/master/mobile_unity/unity_%20MonoBehaviour_flowchart.png)
