
const app = Vue.createApp({
    data() {
        return{
            myName: "Johnny",
            myAge: 29,
            randNumber: Math.floor(Math.random() * 2),
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoW17ItMCrXatIcZ_q9gg7L2WxXJiE786OSg&usqp=CAU",
        }
    },
    methods: {
        inFiveYears() {
            return this.myAge + 5;
        }
    }
})


app.mount("#assignment");