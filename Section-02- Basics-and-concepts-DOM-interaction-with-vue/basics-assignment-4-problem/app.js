
const app = Vue.createApp({
    data() {
        return{
            cssClass: "",
            isVisible: true,
            color:"",
        }
    },
    methods: {
        toggleP(){
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount("#assignment");