const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: "",
      // fullName: "",
    };
  },
  //similar to computed, 
  //here we don't have any name clashes, if a property in data, is named also in watchers
  watch:{
    //whenever name changes, this function name will get executed automatically by vue
    //we don't return anything, because we won't be using it on the html
    //we dont' even need this.name inside this method because it can take an argument that represents the variable 'name' in data.
    //it can also take a second argument that represents the old value, in this case "name" old value 
    // name(value) {
    //   if(!value){
    //     this.fullname= "";
    //   }else{
    //     this.fullName = value + " " + "canvas";
    //   }
    // }

    //Here is an examples where watchers shine
    //another can be for http requests which you want to send when certain data changes
    // Or timers which you want to set if certain values change.
    counter(value){
      const that = this;
      if(value > 50){
        setTimeout(()=>{
          that.counter = 0;
        },2000);
      }
    }
  },
  //one of the key options supported by vue, reserved key name
  //methods here will be executed differently
  //name computed properties just like you name data properties
  //call it on html without invoking it, just point at it (e.g. fullName)
  //we use them like variables not functions
  computed: {
    //this only will be recalculated while any of the variables used in these methods has changed, and not when any variable even outside changes.
    fullName(){
      if(!this.name || !this.lastName){
        return "";
      }
      return this.name + " " + this.lastName;
    }


  },

  methods: {
    //this is still not the best way to do it.
    outputFullName(){
      // console.log("running again");
      if(!this.name){
        return "";
      }
      return this.name + " " + "controllers";
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){ 
      this.name = "";
      this.fullName = "";
      this.lastName = "";
    }
  }
});

app.mount('#events');
