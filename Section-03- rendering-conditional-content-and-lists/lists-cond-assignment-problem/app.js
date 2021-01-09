
const app = Vue.createApp({
    data() {
        return{
            tasks: [],
            enteredInput: "",
            isListVisible: true,
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.enteredInput);
            this.enteredInput = ""
        },
        toggleTasks(){
            this.isListVisible = !this.isListVisible;
        }
    }
})

app.mount("#assignment");