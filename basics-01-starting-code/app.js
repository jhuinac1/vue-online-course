//Vue uses a declaritive approach
//meaning we define a templane and vue updates the DOM
//we declare a goal
const app = Vue.createApp({
    //returns an object full of data.
    data() {
        return {
            courseGoalA: "Finish the course and learn Vue!",
            courseGoalB: "<h1> Master Vue! </h1>",
            vueLink: "https://vuejs.org/",
        };
    },
    // methods allow to execute function when something happens like an event listener(click, hover). this is a reserved name
    //takes an aboject which is full of objects, can be any name, They all need to be functions
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount("#user-goal");