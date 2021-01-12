
//This is how vue reactivity works under the hood.

const data = {
    message: "hello",
}

//will handle traps which proxy supports
const handler = {
    set(target, key, value){
        console.log(target)
        console.log(key)
        console.log(value)
    }
}



const proxy = new Proxy(data, handler);

proxy.message = "hello!!!!";