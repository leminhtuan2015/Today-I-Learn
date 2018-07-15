### What is Raycasting?
### Unity Raycasting

----------------------------------------

### What is Raycasting?

* Raycasting is a physics object
* "Raycasting is the process of shooting an invisible ray from a point, in a specified direction to detect whether any colliders lay in the path of the ray."


### Unity Raycasting

#### Unity Raycast check touch on object (not UI object)

```c#
    public static bool IsPointerOverGameObject()
    {
        //check mouse
        if (EventSystem.current.IsPointerOverGameObject())
            return true;

        //check touch
        if (Input.touchCount > 0 && Input.touches[0].phase == TouchPhase.Began)
        {
            if (EventSystem.current.IsPointerOverGameObject(Input.touches[0].fingerId))
                return true;
        }

        return false;
    }
```

#### Unity Raycast handle touch on object

```c#
  public void TouchOnGameObject(){
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition - Vector3.up);
        float z_plane_of_2d_game = 0;
        Vector3 pos_at_z_0 = ray.origin + ray.direction * (z_plane_of_2d_game - ray.origin.z) / ray.direction.z;
        Vector2 mousePos2D = new Vector2(pos_at_z_0.x, pos_at_z_0.y);
        RaycastHit2D hit = Physics2D.Raycast(mousePos2D, Vector2.zero);

        if (hit.collider != null)
        {
            Debug.Log("Position : " + hit.collider.gameObject.name);
        }
  }
  
   void HandleTap(){
        if (IsPointerOverGameObject()){
            Debug.Log("Clicked on the UI");
            return;
        }

        if (Input.GetMouseButtonDown(0)){
            TouchOnGameObject();
        }
    }
  
  private void Update(){
        HandleTap();
  }

```
