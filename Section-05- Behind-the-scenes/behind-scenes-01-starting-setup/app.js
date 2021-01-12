const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  //LIFECYCLE HOOKS
  ///This method will trigger before 
  beforeCreate(){
    console.log("beforeCreate()");
  },
  created(){
    console.log("created()");
  },
  beforeMount(){
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  //DATA CHANGE
  beforeUpdate(){
    console.log("beforeUpdate()");
  },
  updated(){
    console.log("Updated()");
  },

  //INSTANCE OF UNMOUNTED
  beforeUnmount(){
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("Mount()");
  },

});

app.mount('#app');

setTimeout( () =>{
  app.unmount()

}, 3000)

const app2 = Vue.createApp({
  //example of a template
  template: `
    <p> {{favoriteMeal}} </p>
  `,
  data(){
    return {
      favoriteMeal: "Pizza",
    }
  }
})

app2.mount("#app2")