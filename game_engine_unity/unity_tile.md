
### Tile
### Title Palette
### Tilemap

---------------------------------------------------------------

### Tile (.asset)
* Tile = **Sprite** GameObject
* A Tile are actually a **Sprite** that are arranged on a Tilemap
* Tile is stored with **.asset** extension, such as **MyTile.asset**
* Tile can not be a GameObject, Tile must be stored in .asset file
* Each Tile just contain only one Sprite

### Title Palette (.prefab)
* Title Palette = Multiple Tiles
* Title Palette used if you want to create multiple Tiles.
* We can group multiple Tiles together in a **Title Palette**

### Tilemap
* Tilemap = Container of Title Palettes
  * Title Palette = Multiple Tiles
    * Tile = **Sprite** GameObject
    
* The Tilemap GameObject is where Tiles are painted on
* Tilemap is a special GameObject
  * If **UI GameObjects** must be placed in **Canvas** => Tilemap must be placed in **The Grid GameObject**
* The Grid GameObject will contain the child GameObject is called Tilemap 





