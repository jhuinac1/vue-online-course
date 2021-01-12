# Vue Behind The Scenes

    Javascript by default is not reactive

    Vue keeps track of data properties, and when something changes it updates the data that has been update, it does that by wrappying the data with proxies. 



## Vue updates the Virtual DOM

Vue instance: Stores data, computed, propoerties, methdos, ... 

Vue uses a virtual copy of the DOM
exists only in memory,
when data changes, it just creates a new virtual DOM, and compares it, and only differences are then rendrered to the real DOM.



## refs

```html
<input type="text" ref="userText">
```
```javascript
methods:{
    setText() {
         // this.message = this.currentUserInput;
         this.message = this.$refs.userText.value;
       },
}
```

