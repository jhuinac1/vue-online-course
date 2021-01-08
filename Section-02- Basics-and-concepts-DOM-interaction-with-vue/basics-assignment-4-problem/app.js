
const app = Vue.createApp({
    data() {
        return{
            cssClass: "",
            isVisible: true,
            color:"",
        }
    },
    computed: {
        getClass(){
            return this.cssClass;
        },
        getColor(){
            return this.color;
        }
    },
    methods: {
        toggleP(){
            this.isVisible = !this.isVisible;
        }
    }
})

app.mount("#assignment");