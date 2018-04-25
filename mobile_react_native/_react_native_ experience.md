### 1. Infinite navigation loop in Stack Navigator when dispatching "navigate" after "reset"

------------------------------------------------------

### 1. Infinite navigation loop in Stack Navigator when dispatching "navigate" after "reset"

* Issue:
  * Infinite loop when reset to a "Drawer Navigator" or "Stack Navigator" because the **setParams** in **componentDidMount**

* Solution
  * Wrap in **runAfterInteractions**

```js
    componentDidMount = () => {
 
      InteractionManager.runAfterInteractions(() => {
          this.props.navigation.setParams({
              headerTitle: "header",
          })
      });
    }
```
