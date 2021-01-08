
const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    computed:{
        displayResult(){
            if(this.counter < 37){
                return "Not there yet";
            } else if (this.counter === 37) {
                return this.counter;
            }
            return "Too much!";
        }
    },
    methods: {
        add(num){
            this.counter+= num;
            console.log(this.counter)
        }
    },
    watch: {
        // counter(value){
        //     const that = this;
        //     if(value > 37){
        //         setTimeout(() =>{
        //             that.counter = 0;
        //         }, 5000)
        //     }
        // }

        // another approach
        //won't trigger the timeout since the value of result doesn't change unless it becomes 37  or too much;
        displayResult(){
            const that = this;
            setTimeout( ()=> {
                that.counter = 0;
            }, 5000);
        }
    }

})

app.mount("#assignment");