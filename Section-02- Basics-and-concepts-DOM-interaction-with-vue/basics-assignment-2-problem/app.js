
const app = Vue.createApp({
    data() {
        return {
            output1: "",
            output2: "",
        }
    },
    methods: {
        displayAlert() {
            alert("Hello World!")
        },
        updateOutputOne(e) {
            this.output1 = e.target.value;
        },
        updateOutputTwo(e) {
            this.output2 = e.target.value;
        }
    }
})

app.mount("#assignment");