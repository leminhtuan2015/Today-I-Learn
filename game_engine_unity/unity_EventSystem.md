### Unity EventSystem

--------------------------------------------------------

### Unity EventSystem

* Clicking on the Button actually seems to be clicking through onto the scene => 2 event is trigged, resolved by below code

```c#
  // true if clicking on a GameObject 
  UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject()
```
