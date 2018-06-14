
### Unity Physics Components

----------------------------------------------------

### Unity Physics Components

* SpriteRenderer // Ảnh, Đồ hoạ
* RigidBody2d // Vật Thể Rắn (trọng lực)
* CircleCollider2d // Bọc hình tròn, va chạm
* PolygonCollider2d // Bọc đa giác, va chạm

### Collider2d

* OnTriggerEnter2D : called when Collider

```c#
  void OnTriggerEnter2D (Collider2D collider) {
		Debug.Log ("collider"); 
	}
```
