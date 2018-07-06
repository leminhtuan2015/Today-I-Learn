
### Tile
### Title Palette
### Tilemap
### Painting Tilemap

---------------------------------------------------------------

### Tile (.asset)
* Tile = **Sprite** GameObject
* Title is a .asset file stored in Assests folder
* A Tile are actually a **Sprite** that are arranged on a Tilemap
* Tile is stored with **.asset** extension, such as **MyTile.asset**
* Tile can not be a GameObject, Tile must be stored in .asset file
* Each Tile just contain only one Sprite

### Title Palette (.prefab)
* Title Palette is a .prefab file stored in Assests folder
* Title Palette = Multiple Tiles (or single Tile)
* We can group multiple Tiles together in a **Title Palette**
* Title Palette is a **tool for painting tiles on Timemap GameObject**
* Title Palette is stored as **.prefab** extension, such as **MyTitlePalette.asset**

### Tilemap
* Tilemap is a GameObject in scene
* Tilemap = Container of Title Palettes
  * Title Palette = Multiple Tiles/Single Tile
    * Tile = **Sprite** GameObject
    
* The Tilemap GameObject is where Tiles are painted on
* Tilemap is a special GameObject
  * If **UI GameObjects** must be placed in **Canvas** => Tilemap must be placed in **The Grid GameObject**
* The Grid GameObject will contain the child GameObject is called Tilemap 

### Painting Tilemap
* **Tile Palette Windown** (Unity menu > Windown > Tile Palette) it is a tool for painting Tiles on Tilemap GameObject
* To paint on a Tilemap it must be the selected Active Tilemap in the **Tile Palette Windown**
  * Active Tilemap : Is the Tilemap GameObject you will paint Tiles on it.
* You must be have a Tilemap GameObject in scene to paint on


























