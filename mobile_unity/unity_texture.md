
### Unity Create Texture In Background

-------------------------

### Unity Create Texture In Background

* If you use `WWW www = new WWW(pathToFile);` => this will not smooth


```c#
        WWW www = new WWW(pathToFile);
        yield return www;

        Texture2D texture = www.texture;
```

* `UnityWebRequestTexture.GetTexture` => make loading is smooth

```c#
using UnityEngine;
using System.Collections;
using UnityEngine.Networking;
 
public class MyBehaviour : MonoBehaviour {
    void Start() {
        StartCoroutine(GetTexture());
    }
 
    IEnumerator GetTexture() {
    
        // On local:
        // var path = Application.persistentDataPath + "/" + imageResource;
        // System.Uri uri = new System.Uri(path);
        // string pathToFile = uri.AbsoluteUri;
        
        UnityWebRequest www = UnityWebRequestTexture.GetTexture("http://www.my-server.com/image.png");
        yield return www.SendWebRequest();

        if(www.isNetworkError || www.isHttpError) {
            Debug.Log(www.error);
        }
        else {
            Texture myTexture = ((DownloadHandlerTexture)www.downloadHandler).texture;
        }
    }
}
```
