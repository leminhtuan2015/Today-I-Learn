
### Auto Layout

* The auto layout system provides ways to place elements in nested layout groups such as horizontal groups, vertical groups, or grids. It also allows elements to automatically be sized according to the contained content.

* Component use for Auto Layout:
  * Content Size Fitter
  * Layout Element
  * Horizontal Layout Group
  * Vertical Layout Group
  * Grid Layout Group


### Horizontal Layout Group + Content Size Fitter

* Content Size Fitter
  * The Content Size Fitter is a layout controller that controls the size of its own.
  * Tự động co/giãn để ôm khít những phần tử con.
  
  * Horizontal Fit : How the **width** is controlled
    * Unconstrained: 
    * Min Size:
    * Preferred Size: Tự động co/giãn **độ rộng** dựa trên độ rộng của các phần tử con.

  * Vertical Fit	: How the **height** is controlled
    * Unconstrained: 
    * Min Size:
    * Preferred Size: Tự động co/giãn **độ dài** dựa trên độ dài của các phần tử con.

* Horizontal Layout Group
  * Child Controls Size: Layout Group sẽ tự động kiểm soát width/height các phân tử con.
  
