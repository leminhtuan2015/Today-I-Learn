### Vuejs Data Binding

---------------------------------------

### Vuejs Data Binding

* When the variable in **data** changed => the components referent to that variable will be updated 
* When the variable **message** changed => the content of HTML will be updated auto

```vue
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: "Test"
    }
  }
</script>

```
