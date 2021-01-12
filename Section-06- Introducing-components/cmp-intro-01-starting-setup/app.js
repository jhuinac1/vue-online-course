

const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "0123 5678 991",
                    email: "manuel@localhost.com"
                },
                {
                    id: "Julie",
                    name: "Julie Jones",
                    phone: "0123 4444 991",
                    email: "julie@localhost.com"
                }
            ],
        }
    },
    methods: {
        // toggleDetails(){
        //     this.detailsAreVisible = !this.detailsAreVisible;
        // }

    }
})

//components are pieces of HTML that contain data and logic.
//These are re-usable
//components needs an identifier: custom HTML, the identifier needs a dash. so you won't clash with built in html tags e.g. <p>
//the second argument, is a config object, just like app.create.
//will be connected to the main app
//This also needs it's own template.

app.component("friend-contact", {
    template: `
    <li >
    <h2> {{ friend.name}}</h2>
    <button @click="toggleDetails">{{detailsAreVisible ? "Hide" : "Show"}} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone}}</li>
      <li><strong>Email:</strong> {{ friend.email}}</li>
    </ul>
  </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: "manuel",
                name: "Manuel Lorenz",
                phone: "0123 5678 991",
                email: "manuel@localhost.com"
            },
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
})



app.mount("#app");