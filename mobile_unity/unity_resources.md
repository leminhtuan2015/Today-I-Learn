
### Resources.Load

------------------------------------------------

### Resources.Load

* **Resources.Load** will search for a directory in **Assets/Resources**

```c#
// If you want to put it to Sprites directory then put it inside Resources (ex. Assets/Resources/Sprites).

Sprite myFruit = Resources.Load <Sprite> ("Sprites/Graphics_3");
```

#### `IMPORTANT`
* https://answers.unity.com/questions/181033/how-do-i-destroy-things-properly-to-free-up-memory.html
* Assets loaded from resources will stay in memory **FOREVER**
* Some loaded assets, most notably textures, can **use up memory even when no instance exists** in the scene. To reclaim this memory when the asset is no longer needed, you can use `Resources.UnloadUnusedAssets`
  
* To release memory when the asset is no longer needed:
  
```c#
Resources.UnloadUnusedAssets() 
```

